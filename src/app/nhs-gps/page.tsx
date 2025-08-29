"use client"

import MarketingHero from '@/components/MarketingHero'
import ChatPreview from '@/components/ChatPreview'
import ScrollReveal from '@/components/ScrollReveal'
import FadeContent from '@/components/FadeContent'
import Link from 'next/link'

export default function NHSGPsPage() {
  const chatMessages = [
    { role: 'user' as const, content: "I've had chest pain for 3 days, worse at night" },
    { role: 'ai' as const, content: "Can you describe the pain? Sharp, dull, or burning? Any radiation to arm or jaw?" },
    { role: 'user' as const, content: "Burning sensation, stays in chest. Worse after meals" },
    { role: 'ai' as const, content: "Any shortness of breath, sweating, or nausea? Previous heart conditions?" },
    { role: 'user' as const, content: "No to all. Just the burning after eating" },
    { role: 'ai' as const, content: "I'll organize this for your GP. Likely GERD but they'll want to rule out cardiac causes." },
  ]

  return (
    <>
      <MarketingHero
        headline="Patient Histories Collected Before They Walk In"
        description="Save precious consultation time with AI-structured patient histories. Get comprehensive summaries before appointments, allowing you to focus on examination and clinical decisions rather than history-taking."
        benefits={[
          "Full patient history available before consultation",
          "Red flags and key symptoms highlighted",
          "More time for examination and decision-making",
          "Better continuity of care across appointments"
        ]}
        cta={{
          href: "/nhs-gps/register",
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
            Rushed Consultations Mean Vital Details Get Missed
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-red-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Current Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">NHS consultations often limited to 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Patients struggle to recall timelines or specific details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Red flags can be overlooked if history is incomplete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-700">Fragmented notes make continuity of care harder</span>
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
                    <span className="text-slate-700">Complete history ready before patient arrives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">AI organizes timeline with dates and severity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Red flags automatically highlighted for review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Continuous timeline for better care continuity</span>
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
                title: "Patient Chats with Lebn", 
                description: "Before appointment, at home or on mobile - patients share symptoms in their own words",
                icon: "💬"
              },
              { 
                step: "2", 
                title: "AI Structures Information", 
                description: "Formats responses in SOAP/GP-friendly layout with key points highlighted",
                icon: "🤖"
              },
              { 
                step: "3", 
                title: "Summary Delivered Securely", 
                description: "Accessible before or during consultation for immediate review",
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

      {/* Benefits for NHS GPs */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Benefits for NHS GPs
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Save Time",
                description: "More minutes for examination and decision-making",
                metric: "5+ mins saved",
                color: "blue"
              },
              {
                title: "Better Accuracy",
                description: "Full patient history available from the start",
                metric: "100% complete",
                color: "green"
              },
              {
                title: "Continuity of Care",
                description: "Ongoing timeline for chronic patients",
                metric: "Full timeline",
                color: "purple"
              },
              {
                title: "Patient Preparedness",
                description: "Fewer 'I forgot to mention...' moments",
                metric: "90% reduction",
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
                  <h3 className="font-semibold text-xl">Patient with Intermittent Chest Pain</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Without Lebn</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• 5 minutes spent gathering history</li>
                      <li>• Patient forgets trigger patterns</li>
                      <li>• Timeline unclear</li>
                      <li>• Previous test info missing</li>
                      <li>• Limited time for examination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">With Lebn</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Complete timeline ready before consultation</li>
                      <li>• All triggers documented</li>
                      <li>• Severity scores tracked</li>
                      <li>• Previous ECG results noted</li>
                      <li>• Full time for targeted examination</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 border-t">
                  <p className="text-sm text-blue-800">
                    <strong>Result:</strong> GP immediately identifies likely GERD pattern, but has time to perform cardiac examination to rule out serious causes. More efficient, safer consultation.
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Example Clinical Summary */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Example Clinical Summary
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-brand text-white p-4">
                  <h4 className="font-semibold">Lebn Pre-Consultation Summary</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-red-600 mb-1">Chief Concern</div>
                    <p className="text-slate-700">Intermittent chest pain, burning sensation, 3 days duration</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold text-blue-600 mb-1">Timeline & Pattern</div>
                    <p className="text-slate-700">Worse at night, post-prandial exacerbation, no exercise correlation</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold text-green-600 mb-1">Red Flag Screen</div>
                    <p className="text-slate-700">✓ No radiation to arm/jaw<br/>✓ No SOB or diaphoresis<br/>✓ No cardiac history</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold text-purple-600 mb-1">Clinical Impression</div>
                    <p className="text-slate-700">Likely gastroesophageal reflux. Consider cardiac workup if atypical features.</p>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Data Privacy & Security */}
      <section className="py-12 lg:py-16 bg-slate-50">
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
                title: "GDPR Compliant",
                description: "Special category health data handling with full compliance"
              },
              {
                icon: "🏥",
                title: "NHS IG Toolkit Aligned",
                description: "Meets NHS information governance standards"
              },
              {
                icon: "✅",
                title: "Patient Consent",
                description: "Explicit consent required for all shared summaries"
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

      {/* Integration & Compliance */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-3xl font-bold text-center mb-12"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Easy Integration with NHS Systems
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeContent delay={200} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-lg mb-4">Current Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">PDF export for any EMR system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">Secure web portal access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">FHIR-compatible data structure</span>
                  </li>
                </ul>
              </div>
            </FadeContent>
            <FadeContent delay={400} blur={true} duration={800}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-lg mb-4">Coming Soon</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span className="text-slate-700">EMIS Web direct integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span className="text-slate-700">SystmOne compatibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span className="text-slate-700">NHS App integration</span>
                  </li>
                </ul>
              </div>
            </FadeContent>
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
            What NHS GPs Say
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "I finally see the history upfront. It's transformed how I prepare for consultations.",
                author: "Dr. Patel",
                location: "East London Practice",
                rating: 5
              },
              {
                quote: "Helps continuity when covering for colleagues. I can see the full patient journey.",
                author: "Dr. Evans",
                location: "Cardiff Health Centre",
                rating: 5
              },
              {
                quote: "The time saved on history-taking means I can actually examine patients properly.",
                author: "Dr. MacLeod",
                location: "Edinburgh GP Practice",
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
            Join Our NHS Pilot Program
          </ScrollReveal>
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Improve efficiency and accuracy in every appointment with Lebn
            </p>
          </FadeContent>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Free 3-Month Pilot",
                description: "No cost for selected NHS practices during trial"
              },
              {
                title: "Minimal Training",
                description: "Staff trained and operational within one day"
              },
              {
                title: "Shape the Product",
                description: "Your feedback directly influences NHS features"
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
              href="/nhs-gps/register"
              className="inline-block bg-white text-brand px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Register for Pilot Program
            </Link>
            <p className="mt-4 text-sm opacity-75">
              Limited spaces available • Free during pilot • Full support included
            </p>
          </FadeContent>
        </div>
      </section>
    </>
  )
}