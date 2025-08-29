"use client"

import React from 'react'
import MarketingHero from '@/components/MarketingHero'
import ChatPreview from '@/components/ChatPreview'
import ScrollReveal from '@/components/ScrollReveal'
import FadeContent from '@/components/FadeContent'
import Link from 'next/link'

export default function HomePage() {
  const heroMessages = [
    { role: 'user' as const, content: "I've been feeling tired and have a headache" },
    { role: 'ai' as const, content: "I understand. When did these symptoms start? Any fever or other symptoms?" },
    { role: 'user' as const, content: "Started 2 days ago. No fever, just tired." },
    { role: 'ai' as const, content: "Thanks for sharing. Are you drinking enough water? Any stress recently?" },
  ]

  const features = [
    {
      icon: "",
      title: "Natural Conversations",
      description: "No complex forms or medical jargon. Just chat naturally about how you're feeling, as if talking to a trusted friend who understands health."
    },
    {
      icon: "",
      title: "Visual Context",
      description: "Upload photos of rashes, wounds, swelling, or any visible symptoms. Our AI analyzes images to provide better context for healthcare providers."
    },
    {
      icon: "",
      title: "Clinical Summaries",
      description: "Automatically generate structured, GP-ready summaries that save consultation time and ensure nothing important is missed."
    },
    {
      icon: "",
      title: "Bank-Level Security",
      description: "Your health data is protected with AES-256 encryption, the same standard used by financial institutions and government agencies."
    },
    {
      icon: "",
      title: "Always Accessible",
      description: "Access your health history anytime, anywhere. Works on all devices with offline support for when you need it most."
    },
    {
      icon: "",
      title: "NHS Integrated",
      description: "Designed to work seamlessly with NHS systems, supporting EMIS, SystmOne, and other major healthcare platforms."
    }
  ]

  const stats = [
    { value: "2.5M+", label: "Health conversations", description: "Meaningful health discussions facilitated" },
    { value: "15min", label: "Average time saved", description: "Per GP consultation" },
    { value: "94%", label: "Satisfaction rate", description: "From patients and practitioners" },
    { value: "50k+", label: "Active users", description: "Growing every day" }
  ]

  const testimonials = [
    {
      quote: "Lebn.ai transformed how I prepare for GP visits. I no longer forget important details, and my doctor appreciates the organized summaries.",
      author: "Sarah M.",
      role: "Patient, London",
      rating: 5
    },
    {
      quote: "As an NHS GP, this saves me valuable time. Patients arrive with clear, structured histories that let me focus on examination and treatment.",
      author: "Dr. James Patterson",
      role: "NHS GP, Manchester",
      rating: 5
    },
    {
      quote: "Our care home staff love how easy it is to log resident symptoms. The red flag alerts have helped us catch UTIs and other issues early.",
      author: "Linda Thompson",
      role: "Care Home Manager, Bristol",
      rating: 5
    }
  ]

  return (
    <>
      <MarketingHero
        headline="Your health companion, always ready to listen"
        description="Chat naturally about your symptoms, get GP-ready summaries, and take control of your health journey. Trusted by patients, NHS practices, and care homes across the UK."
        benefits={[
          "Natural conversation about your health",
          "Upload photos for visual symptoms",
          "GP-ready summaries in seconds",
          "Your health history, always with you"
        ]}
        cta={{
          href: "/register-interest",
          label: "Get Early Access"
        }}
        rightSlot={<ChatPreview messages={heroMessages} />}
      />

      {/* Problem & Solution Section */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
            <div className="w-full">
              <ScrollReveal 
                containerClassName="text-3xl font-bold text-center mb-12"
                baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={25}
              >
                Healthcare Communication, Reimagined
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                <FadeContent delay={200} blur={true} duration={800}>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">The Problem</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-slate-700">Patients forget symptoms during appointments</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-slate-700">GPs spend 40% of consultation time on history-taking</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-slate-700">Care homes struggle with paperwork and handovers</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-slate-700">Important health details get lost between visits</span>
                      </li>
                    </ul>
                  </div>
                </FadeContent>
                <FadeContent delay={400} blur={true} duration={800}>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Our Solution</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">AI captures complete symptom timelines naturally</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">Pre-consultation summaries ready in seconds</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">One-click logging with automatic documentation</span>
                      </li>
                      <li className="flex items-start gap-3 stagger-item">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">Continuous health record across all interactions</span>
                      </li>
                    </ul>
                  </div>
                </FadeContent>
              </div>
            </div>
          </div>
        </section>

      {/* Features Grid */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="w-full">
            <ScrollReveal 
              containerClassName="text-3xl font-bold text-center mb-4"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={25}
            >
              Everything You Need for Better Health Communication
            </ScrollReveal>
            <FadeContent delay={100} blur={true}>
              <p className="text-center text-slate-600 mb-12 px-4 sm:px-8 lg:px-20 xl:px-40">
                Powerful features designed for real-world healthcare needs, from patient symptom tracking to clinical documentation.
              </p>
            </FadeContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-12 lg:gap-y-8 xl:gap-x-16 xl:gap-y-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FadeContent 
                key={index} 
                delay={index * 100}
                blur={true}
                duration={800}
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </FadeContent>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="w-full">
            <ScrollReveal 
              containerClassName="text-3xl font-bold text-center mb-4"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={25}
            >
              Tailored Solutions for Every Healthcare Need
            </ScrollReveal>
            <FadeContent delay={100} blur={true}>
              <p className="text-center text-slate-600 mb-12 px-4 sm:px-8 lg:px-20 xl:px-40">
                Whether you&rsquo;re a patient seeking better health management or a healthcare provider looking to improve efficiency, we have the right solution for you.
              </p>
            </FadeContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-5">
            {[
              { 
                title: "For Patients", 
                description: "Take control of your health journey with natural symptom tracking and GP-ready summaries", 
                link: "/patients",
                benefits: ["Track symptoms naturally", "Upload photos", "Get health insights", "Prepare for appointments"]
              },
              { 
                title: "For NHS GPs", 
                description: "Save consultation time with pre-structured patient histories and clinical summaries", 
                link: "/nhs-gps",
                benefits: ["Structured histories", "Quick triage", "Continuity of care", "NHS system integration"]
              },
              { 
                title: "For Private GPs", 
                description: "Offer premium patient experiences with detailed intake and lifestyle tracking", 
                link: "/private-gps",
                benefits: ["Premium intake", "Lifestyle insights", "Patient portal", "White-label options"]
              },
              { 
                title: "For Care Homes", 
                description: "Streamline resident health monitoring and GP communication", 
                link: "/care-homes",
                benefits: ["Quick logging", "Red flag alerts", "Staff handovers", "GP summaries"]
              },
            ].map((item, index) => (
              <FadeContent
                key={index}
                delay={index * 100}
                blur={true}
                duration={800}
              >
                <Link
                  href={item.link}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1 group block h-full"
                >
                <h3 className="font-semibold text-lg mb-3 group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                  <div className="mt-4 text-brand font-medium text-sm group-hover:underline">
                    Learn more →
                  </div>
                </Link>
              </FadeContent>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            How Lebn.ai Works
          </ScrollReveal>
          <div className="w-full">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              
              {/* Timeline items */}
              {[
                {
                  step: "1",
                  title: "Start a Conversation",
                  description: "Open Lebn.ai and start chatting naturally about your symptoms or health concerns. No forms, no medical jargon required."
                },
                {
                  step: "2",
                  title: "AI Asks Smart Questions",
                  description: "Our AI asks targeted follow-up questions to understand your symptoms better, just like a healthcare professional would."
                },
                {
                  step: "3",
                  title: "Add Visual Context",
                  description: "Upload photos if needed - rashes, wounds, swelling. Our AI analyzes them to provide better context for your GP."
                },
                {
                  step: "4",
                  title: "Get Your Summary",
                  description: "Receive a structured, GP-ready summary instantly. It includes all relevant details in a format healthcare providers prefer."
                },
                {
                  step: "5",
                  title: "Share with Your GP",
                  description: "Share the summary with your GP before or during your appointment. Save time and ensure nothing is missed."
                }
              ].map((item, index) => (
                <FadeContent
                  key={index}
                  delay={index * 150}
                  blur={true}
                  duration={800}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white font-bold text-xl z-10">
                    {item.step}
                  </div>
                  <div className="ml-8 bg-white rounded-2xl border border-slate-200 p-6 flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="w-full">
            <ScrollReveal 
              containerClassName="text-3xl font-bold text-center mb-12"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={25}
            >
              What Our Users Say
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {testimonials.map((testimonial, index) => (
              <FadeContent
                key={index}
                delay={index * 150}
                blur={true}
                duration={800}
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
                </div>
              </FadeContent>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="w-full">
            <ScrollReveal 
              containerClassName="text-3xl font-bold text-center mb-4"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={25}
            >
              Seamless Integration with Your Systems
            </ScrollReveal>
            <FadeContent delay={100} blur={true}>
              <p className="text-center text-slate-600 mb-12 px-4 sm:px-8 lg:px-20 xl:px-40">
                Lebn.ai works with the healthcare systems you already use, ensuring smooth workflows and data compatibility.
              </p>
            </FadeContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 lg:gap-4">
            {["EMIS Health", "SystmOne", "Vision", "Adastra", "NHS App", "Patient Access", "Evergreen", "Cerner"].map((partner, index) => (
              <FadeContent
                key={index}
                delay={index * 50}
                blur={true}
                duration={800}
              >
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">
                  {partner}
                </div>
              </FadeContent>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand to-brand-hover text-white">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 text-center">
          <ScrollReveal 
            containerClassName="text-4xl font-bold mb-4"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Ready to Transform Your Healthcare Experience?
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-xl mb-8 lg:px-16 xl:px-32 opacity-90">
              Join thousands of patients and healthcare providers already using Lebn.ai to improve health outcomes and save time.
            </p>
          </FadeContent>
          <FadeContent delay={300} blur={true} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register-interest"
                className="inline-block bg-white text-brand px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Get Early Access
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all"
              >
                Learn More
              </Link>
            </div>
          </FadeContent>
          <FadeContent delay={400} blur={true} duration={800}>
            <p className="mt-8 text-sm opacity-75">
              No credit card required • Free during early access • Cancel anytime
            </p>
          </FadeContent>
        </div>
      </section>
    </>
  )
}