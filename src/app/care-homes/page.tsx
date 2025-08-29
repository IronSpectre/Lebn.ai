"use client"

import MarketingHero from '@/components/MarketingHero'
import ChatPreview from '@/components/ChatPreview'
import ScrollReveal from '@/components/ScrollReveal'
import FadeContent from '@/components/FadeContent'
import Link from 'next/link'

export default function CareHomesPage() {
  const chatMessages = [
    { role: 'user' as const, content: "Resident found on floor, mild bruise on right hip" },
    { role: 'ai' as const, content: "I understand. Are vital signs stable? Any pain reported?" },
    { role: 'user' as const, content: "Vital signs stable, gave paracetamol for hip pain" },
    { role: 'ai' as const, content: "Thanks. I'll prepare a summary for the GP's morning visit with complete context." },
  ]

  return (
    <>
      <MarketingHero
        headline="A Friend-Like Chatbot for Resident Health Records"
        description="Lebn lets your care staff speak or type updates in plain language. No more paperwork - just natural conversations that create organized, GP-ready health records instantly."
        benefits={[
          "Talk naturally - no complex forms",
          "Instant GP summaries for calls & visits",
          "Never lose details during shift changes",
          "More time caring, less time documenting"
        ]}
        cta={{
          href: "/care-homes/register",
          label: "Register for Pilot Program"
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
            Keeping Resident Health Records Updated is Time-Consuming & Fragmented
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-red-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Current Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Shift changes mean important details get missed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Information scattered between paper notes, spreadsheets, and GP calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Staff spend too much time filling out forms instead of caring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">GPs and hospitals lack full histories during emergencies</span>
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
                    <span className="text-slate-700">Complete handovers with nothing lost between shifts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">All information in one secure, organized timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Quick voice or text updates - no forms needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">GPs have complete context before they even arrive</span>
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
                description: "Staff update Lebn about a resident's symptoms, mood, medication changes, or incidents - just like talking to a colleague",
                icon: "💬"
              },
              { 
                step: "2", 
                title: "AI Organizes the Information", 
                description: "Adds details to the resident's profile and creates a chronological health timeline automatically",
                icon: "🤖"
              },
              { 
                step: "3", 
                title: "Share with Consent", 
                description: "Create clear, GP-ready summaries anytime - perfect for calls, visits, or hospital transfers",
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

      {/* Benefits for Care Homes */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Benefits for Your Care Home
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Time Savings",
                description: "Less paperwork means more time for direct resident care",
                metric: "40% less admin",
                color: "blue"
              },
              {
                title: "Accuracy",
                description: "No lost details during shift handovers - everything is captured",
                metric: "100% recorded",
                color: "green"
              },
              {
                title: "Preparedness",
                description: "GPs and hospitals have full histories at their fingertips",
                metric: "Instant access",
                color: "purple"
              },
              {
                title: "Compliance",
                description: "Secure, GDPR-compliant record keeping that meets CQC standards",
                metric: "Fully compliant",
                color: "orange"
              }
            ].map((benefit, index) => (
              <FadeContent key={index} delay={index * 100} blur={true} duration={800}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className={`text-${benefit.color}-600 font-bold text-2xl mb-3`}>
                    {benefit.metric}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
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
                  <h3 className="font-semibold text-xl">Night Shift Incident</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      🌙
                    </div>
                    <div>
                      <div className="font-semibold mb-1">11:30 PM - Resident falls</div>
                      <p className="text-slate-600">Resident found on floor during night rounds</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <div className="font-semibold mb-1">11:35 PM - Staff tells Lebn</div>
                      <p className="text-slate-600 italic">&ldquo;Resident found on floor, mild bruise on right hip, vital signs stable, gave paracetamol&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      ☀️
                    </div>
                    <div>
                      <div className="font-semibold mb-1">8:00 AM - GP receives summary</div>
                      <p className="text-slate-600">Complete incident report ready for GP&rsquo;s morning visit with full context and timeline</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Data Privacy & Security */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Data Privacy & Security
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🔒",
                title: "End-to-End Encryption",
                description: "All resident data is encrypted during transmission and storage"
              },
              {
                icon: "👥",
                title: "Role-Based Access",
                description: "Different permission levels for managers, senior staff, and carers"
              },
              {
                icon: "✅",
                title: "Compliance Ready",
                description: "Meets UK GDPR and Care Quality Commission (CQC) standards"
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
            Early Access Program
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be one of the first care homes to simplify resident health records with Lebn
            </p>
          </FadeContent>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Free 3-Month Pilot",
                description: "No cost during the pilot period for selected care homes"
              },
              {
                title: "Full Training Provided",
                description: "We'll train your staff and support the rollout"
              },
              {
                title: "Shape the Product",
                description: "Your feedback directly influences product development"
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
              href="/care-homes/register"
              className="inline-block bg-white text-brand px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Register for Pilot Program
            </Link>
          </FadeContent>
        </div>
      </section>
    </>
  )
}