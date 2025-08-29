"use client"

import MarketingHero from '@/components/MarketingHero'
import ChatPreview from '@/components/ChatPreview'
import ScrollReveal from '@/components/ScrollReveal'
import FadeContent from '@/components/FadeContent'
import Link from 'next/link'

export default function PatientsPage() {
  const chatMessages = [
    { role: 'user' as const, content: "My asthma has been worse lately, using inhaler more" },
    { role: 'ai' as const, content: "I understand. How many times per day are you using it now?" },
    { role: 'user' as const, content: "About 4-5 times, especially at night" },
    { role: 'ai' as const, content: "Thanks for sharing. Any triggers you've noticed? I'll organize this for your GP." },
  ]

  return (
    <>
      <MarketingHero
        headline="Your Friend-Like Health Chatbot"
        description="Talk to Lebn like a friend about your health. No more forgetting symptoms or struggling to explain your story. Lebn listens, remembers, and creates clear summaries for your GP appointments."
        benefits={[
          "Chat naturally using text, voice, or photos",
          "Never forget important health details again",
          "Get GP-ready summaries in seconds",
          "You control who sees your health story"
        ]}
        cta={{
          href: "/patients/register",
          label: "Register for Early Access"
        }}
        rightSlot={<ChatPreview messages={chatMessages} />}
      />

      {/* The Problem Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Explaining Your Health Story to Doctors is Stressful & Incomplete
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-red-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Current Struggles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Hard to remember exact symptoms or dates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Rushed appointments mean important details get missed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Health information scattered across paper, apps, and memory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Long NHS waits make it hard to get timely help</span>
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
                    <span className="text-slate-700">Everything logged when it happens - never forget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Make the most of appointment time - skip the history taking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">All your health info in one secure, organized place</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Be prepared with complete summaries for any doctor</span>
                  </li>
                </ul>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* How It Works - Visual 3-Step Flow */}
      <section className="py-12 lg:py-16 bg-slate-50">
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
                title: "Talk Naturally", 
                description: "Share symptoms, updates, or test results with Lebn - like texting a friend who really gets health",
                icon: "💬"
              },
              { 
                step: "2", 
                title: "AI Organizes Your Story", 
                description: "Builds a timeline and complete medical history automatically - no forms or complicated apps",
                icon: "📝"
              },
              { 
                step: "3", 
                title: "Generate a Summary", 
                description: "Share with your GP to save time and get faster, better care at appointments",
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

      {/* Benefits for Patients */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Benefits for You
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "No More Forgetting",
                description: "Everything is logged when it happens - build your complete health story over time",
                icon: "🧠",
                color: "blue"
              },
              {
                title: "Save Time at the GP",
                description: "Go straight to solutions instead of spending half the appointment explaining",
                icon: "⏱️",
                color: "green"
              },
              {
                title: "Your Health, Anywhere",
                description: "Works with NHS, private care, specialists - your health story travels with you",
                icon: "🌍",
                color: "purple"
              },
              {
                title: "You're in Control",
                description: "Only share what you choose, when you choose - your data stays yours",
                icon: "🔐",
                color: "orange"
              }
            ].map((benefit, index) => (
              <FadeContent key={index} delay={index * 100} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Example Scenario - Emma's Story */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Real Patient Story
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b">
                  <h3 className="font-semibold text-xl">Emma's Asthma Check-Up</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Week Before Appointment</div>
                      <p className="text-slate-600">Emma tells Lebn about increased inhaler use, nighttime symptoms, and new triggers she's noticed</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      🤖
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Lebn Organizes Everything</div>
                      <p className="text-slate-600">Creates a timeline showing symptom patterns, trigger analysis, and medication usage trends</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      👩‍⚕️
                    </div>
                    <div>
                      <div className="font-semibold mb-1">At the GP Appointment</div>
                      <p className="text-slate-600">GP instantly understands Emma's situation, adjusts treatment plan, and focuses on solutions - all in a 10-minute slot</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Your Privacy is Our Priority
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🔒",
                title: "End-to-End Encryption",
                description: "Your health data is encrypted and secure - only you can access it"
              },
              {
                icon: "👤",
                title: "You Own Your Data",
                description: "Your health information belongs to you - we never sell or share without consent"
              },
              {
                icon: "🛡️",
                title: "Share with Control",
                description: "Choose exactly what to share and with whom - you're always in charge"
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
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            What Early Users Say
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "I used to forget half my symptoms by the time I got to the GP. Now everything's there, organized and clear.",
                author: "Sarah M.",
                location: "London",
                rating: 5
              },
              {
                quote: "My doctor said it was the best prepared patient summary she'd ever seen. Saved so much appointment time!",
                author: "James T.",
                location: "Manchester",
                rating: 5
              },
              {
                quote: "As someone with chronic conditions, having my complete history ready for any specialist is life-changing.",
                author: "Priya K.",
                location: "Birmingham",
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
                    <div className="text-sm text-slate-600">{testimonial.location}</div>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Program */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand to-brand-hover text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal 
            containerClassName="text-4xl font-bold mb-6"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Be One of the First
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Take control of your health story with Lebn. Join our early access program and help shape the future of patient care.
            </p>
          </FadeContent>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Free Trial",
                description: "No cost for early access users during the trial period"
              },
              {
                title: "Shape the Product",
                description: "Your feedback directly influences new features"
              },
              {
                title: "Exclusive Updates",
                description: "First access to new features and improvements"
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
              href="/patients/register"
              className="inline-block bg-white text-brand px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Register for Early Access
            </Link>
            <p className="mt-4 text-sm opacity-75">
              No credit card required • Free during trial • Cancel anytime
            </p>
          </FadeContent>
        </div>
      </section>
    </>
  )
}