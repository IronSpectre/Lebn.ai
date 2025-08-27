import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'
import { prisma } from '@/lib/prisma'
import { sendContactToAppsScript } from '@/lib/google-apps-script'

// Create reusable transporter
const createTransporter = () => {
  // For production, use real SMTP credentials
  // For development, you can use services like Gmail, SendGrid, or AWS SES
  
  // Example with Gmail (requires app-specific password):
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  
  // Fallback to Ethereal for testing (creates a test account)
  return nodemailer.createTransporter({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = createTransporter()

    // Prepare email content
    const mailOptions = {
      from: `"Lebn.ai Contact Form" <${process.env.SMTP_FROM || 'noreply@lebn.ai'}>`,
      to: 'contact@lebn.ai',
      replyTo: data.email,
      subject: `[${data.userType || 'General'}] ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
              .message { background: white; padding: 15px; border-radius: 4px; border-left: 3px solid #667eea; white-space: pre-wrap; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${data.name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                
                ${data.phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${data.phone}</div>
                </div>
                ` : ''}
                
                ${data.company ? `
                <div class="field">
                  <div class="label">Organization:</div>
                  <div class="value">${data.company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">User Type:</div>
                  <div class="value">${data.userType || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${data.subject}</div>
                </div>
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message">${data.message}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the Lebn.ai contact form.</p>
                  <p>Timestamp: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Organization: ${data.company}` : ''}
User Type: ${data.userType || 'Not specified'}

Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the Lebn.ai contact form.
Timestamp: ${new Date().toLocaleString()}
      `,
    }

    // Send email
    let emailSent = false
    let messageId = null
    
    try {
      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent successfully:', info.messageId)
      emailSent = true
      messageId = info.messageId
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue to save to database even if email fails
    }
    
    // Save to database for backup
    const submission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        userType: data.userType || 'Not specified',
        subject: data.subject,
        message: data.message,
        emailSent: emailSent,
        emailMessageId: messageId,
      },
    })
    
    // Save to Google Apps Script (non-blocking)
    sendContactToAppsScript({ ...data, id: submission.id }).catch(error => {
      console.error('Failed to save to Google Apps Script:', error)
    })
    
    return NextResponse.json({ 
      success: true, 
      message: emailSent 
        ? 'Your message has been sent successfully!' 
        : 'Your message has been saved. We will contact you soon.',
      messageId: messageId,
      submissionId: submission.id 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}