"use client"

import MarketingHero from '@/components/MarketingHero'
import ChatPreview from '@/components/ChatPreview'
import ScrollReveal from '@/components/ScrollReveal'
import FadeContent from '@/components/FadeContent'
import Link from 'next/link'

export default function PrivateGPsPage() {
  const chatMessages = [
    { role: 'user' as const, content: "Getting palpitations, especially after coffee and stress" },
    { role: 'ai' as const, content: "I see. How often do they occur? Any chest pain or dizziness?" },
    { role: 'user' as const, content: "2-3 times daily, no pain, slight dizziness sometimes" },
    { role: 'ai' as const, content: "Thanks. I'll organize your full cardiac history for your specialist consultation." },
  ]

  return (
    <>
      <MarketingHero
        headline="Arrive Prepared for Every Consultation"
        description="Lebn captures comprehensive patient histories before appointments. Start consultations with context, not questions. Deliver the premium, personalized care your private patients expect."
        benefits={[
          "Patients arrive with organized medical histories",
          "Spend consultation time on care, not data gathering",
          "Premium intake experience that patients appreciate",
          "Clear continuity between follow-up visits"
        ]}
        cta={{
          href: "/private-gps/register",
          label: "Register for Pilot Program"
        }}
        rightSlot={<ChatPreview messages={chatMessages} />}
      />

      {/* The Problem Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            First Consultations Often Start from Scratch
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-red-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Current Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Patients arrive without full or organized medical histories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">First 10+ minutes spent gathering background instead of diagnosing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Follow-up visits lack continuity if information is missed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Inefficient intake affects both time and perceived quality of care</span>
                  </li>
                </ul>
              </div>
            </FadeContent>
            <FadeContent delay={400} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-green-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">With Lebn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Complete patient histories ready before appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Jump straight into examination and treatment planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Perfect continuity with comprehensive visit records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Premium service that justifies private healthcare costs</span>
                  </li>
                </ul>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* How It Works - Visual 3-Step Flow */}
      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            How It Works
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                step: "1", 
                title: "Patient Talks to Lebn", 
                description: "Before their appointment, patients share symptoms, history, and lifestyle factors via text, voice, or photos",
                icon: "💬"
              },
              { 
                step: "2", 
                title: "AI Summarizes the Case", 
                description: "Lebn organizes everything chronologically - symptoms, relevant history, test results, and medications",
                icon: "🤖"
              },
              { 
                step: "3", 
                title: "Brief Delivered Securely", 
                description: "You receive a concise, clinically-formatted summary before the patient arrives - start informed",
                icon: "📋"
              },
            ].map((item, index) => (
              <FadeContent key={index} delay={index * 150} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Private Healthcare */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Benefits for Private Healthcare
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Time Efficiency",
                description: "More time spent on examination and discussion, less on data gathering",
                metric: "15+ mins saved",
                icon: "⏱️"
              },
              {
                title: "Better Preparedness",
                description: "Start every consultation with full context, not basic questions",
                metric: "100% prepared",
                icon: "📚"
              },
              {
                title: "Premium Service",
                description: "Patients feel their time is respected with streamlined consultations",
                metric: "5-star experience",
                icon: "⭐"
              },
              {
                title: "Improved Continuity",
                description: "Clear, comprehensive history between all follow-up appointments",
                metric: "Zero gaps",
                icon: "🔄"
              }
            ].map((benefit, index) => (
              <FadeContent key={index} delay={index * 100} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <div className="text-brand font-bold text-xl mb-2">{benefit.metric}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Example Scenario - Cardiology Patient */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Real-World Example
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b">
                  <h3 className="font-semibold text-xl">Cardiology Referral - Palpitations</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Pre-Appointment</div>
                      <p className="text-slate-600">Patient uses Lebn to document palpitation episodes, triggers, lifestyle factors, and previous test results</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      📄
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Brief Delivered</div>
                      <p className="text-slate-600">You receive: symptom timeline, trigger analysis, relevant cardiac history, current medications, lifestyle factors</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      👨‍⚕️
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Consultation Starts</div>
                      <p className="text-slate-600">Skip the history-taking, start with targeted examination and focused discussion on treatment options</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 border-t">
                  <div className="font-semibold text-green-800 mb-2">Result</div>
                  <p className="text-green-700">30-minute consultation feels like 45 minutes. Patient impressed by thoroughness and preparation.</p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Premium Features for Private Practice
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "White-Label Options",
                description: "Full customization with your practice branding - patients see your logo and colors throughout",
                icon: "🎨"
              },
              {
                title: "Lifestyle Insights",
                description: "Capture sleep, exercise, diet, and stress patterns for holistic health assessments",
                icon: "💪"
              },
              {
                title: "Multi-Language Support",
                description: "Serve international patients - intake in their language, summaries in yours",
                icon: "🌍"
              },
              {
                title: "Specialist Workflows",
                description: "Customized templates for different specialties - cardiology, dermatology, psychiatry, etc.",
                icon: "🏥"
              },
              {
                title: "Family Accounts",
                description: "Premium patients can manage health records for their entire family",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Priority Support",
                description: "Dedicated support team for your practice and your patients",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <FadeContent key={index} delay={index * 100} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy & Security */}
      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Enterprise-Grade Security
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🔒",
                title: "GDPR Compliant",
                description: "Full compliance with data protection regulations and patient consent workflows"
              },
              {
                icon: "🔐",
                title: "Encrypted Exchange",
                description: "End-to-end encryption for all patient data transmission and storage"
              },
              {
                icon: "📊",
                title: "Audit Trails",
                description: "Complete audit logs of all data access and sharing for compliance"
              }
            ].map((item, index) => (
              <FadeContent key={index} delay={index * 100} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            What Private Practitioners Say
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Lebn has transformed my practice. I can now see 20% more patients without feeling rushed.",
                author: "Dr. James Clarke",
                role: "Private GP, Harley Street",
                rating: 5
              },
              {
                quote: "Patients are amazed I know their full history. It's elevated the perceived value of consultations.",
                author: "Dr. Priya Singh",
                role: "Cardiologist, London",
                rating: 5
              },
              {
                quote: "The lifestyle insights are invaluable for functional medicine. Worth every penny.",
                author: "Dr. Michael Chen",
                role: "Integrative Medicine",
                rating: 5
              }
            ].map((testimonial, index) => (
              <FadeContent key={index} delay={index * 150} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-4"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Flexible Pricing for Every Practice
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your practice size and needs. All plans include our core features.
            </p>
          </FadeContent>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Solo Practice",
                price: "£299",
                period: "/month",
                features: [
                  "Up to 100 patients/month",
                  "Core intake features",
                  "Email summaries",
                  "Standard support"
                ]
              },
              {
                name: "Group Practice",
                price: "£799",
                period: "/month",
                features: [
                  "Up to 500 patients/month",
                  "White-label options",
                  "EMR integration",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited patients",
                  "Full customization",
                  "Dedicated success manager",
                  "SLA guarantees"
                ]
              }
            ].map((plan, index) => (
              <FadeContent key={index} delay={index * 150} blur={true} duration={800}>
                <div className={`bg-white rounded-2xl border ${plan.popular ? 'border-brand ring-2 ring-brand/20' : 'border-slate-200'} p-6 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Program */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-brand to-brand-hover text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal 
            containerClassName="text-4xl font-bold mb-6"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Early Access Program
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join selected private practices in our 3-month pilot program. Shape the future of premium patient intake.
            </p>
          </FadeContent>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Free 3-Month Pilot",
                description: "No cost during the pilot period for qualifying practices"
              },
              {
                title: "Training & Onboarding",
                description: "Full training for you and your admin team"
              },
              {
                title: "Direct Input",
                description: "Your feedback shapes product development"
              }
            ].map((item, index) => (
              <FadeContent key={index} delay={300 + index * 100} blur={true} duration={800}>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="opacity-90 text-sm">{item.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
          <FadeContent delay={600} blur={true} duration={800}>
            <Link
              href="/private-gps/register"
              className="inline-block bg-white text-brand px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Register for Pilot Program
            </Link>
            <p className="mt-4 text-sm opacity-75">
              Limited spaces available • Applications reviewed weekly
            </p>
          </FadeContent>
        </div>
      </section>
    </>
  )
}