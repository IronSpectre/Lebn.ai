"use client"

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          userType: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand/5">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative min-h-screen flex items-center pt-28 md:pt-36">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Get in Touch
          </ScrollReveal>
          
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Have questions about Lebn? Want to learn more about our pilot programs? We'd love to hear from you.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-brand to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-sm text-slate-600">contact@lebn.ai</p>
              </div>

              {/* Response Time Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Response Time</h3>
                <p className="text-sm text-slate-600">Within 24 hours</p>
              </div>

              {/* Priority Support Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Priority Support</h3>
                <p className="text-sm text-slate-600">For healthcare providers</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  I am a... *
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="">Select an option</option>
                  <option value="patient">Patient / Individual</option>
                  <option value="care-home">Care Home Representative</option>
                  <option value="nhs-gp">NHS GP</option>
                  <option value="private-gp">Private Healthcare Provider</option>
                  <option value="investor">Investor</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Pilot program inquiry, Technical question, Partnership opportunity"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✓ Your message has been sent successfully! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    ✗ There was an error sending your message. Please try again or email us directly at contact@lebn.ai
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    bg-gradient-to-r from-brand to-purple-600 text-white px-12 py-4 
                    rounded-full font-semibold transition-all text-lg
                    ${isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-xl hover:-translate-y-1 transform hover:scale-105'
                    }
                  `}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-600">
                For urgent matters, healthcare providers can mark their inquiry as priority.
                <br />
                We typically respond to healthcare provider inquiries within 12 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}