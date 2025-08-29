"use client"

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function PatientsRegisterPage() {
  const [formData, setFormData] = useState({
    // About You
    ageRange: '',
    currentHealthcare: '',
    chronicConditions: '',
    
    // Health Management Challenges
    biggestFrustration: '',
    forgottenDetails: '',
    appointmentPrep: '',
    
    // Interest in Lebn
    likelyToUse: '',
    mostValuedFeatures: {
      neverForget: 0,
      betterAppointments: 0,
      onePlace: 0,
      privacy: 0
    },
    concerns: '',
    monthlyPrice: '',
    
    // Early Access
    willingToTest: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRankingChange = (feature: string, rank: number) => {
    setFormData(prev => ({
      ...prev,
      mostValuedFeatures: {
        ...prev.mostValuedFeatures,
        [feature]: rank
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/submissions/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert(result.message)
        // Reset form
        setFormData({
          ageRange: '',
          currentHealthcare: '',
          chronicConditions: '',
          biggestFrustration: '',
          forgottenDetails: '',
          appointmentPrep: '',
          likelyToUse: '',
          mostValuedFeatures: {
            neverForget: 0,
            betterAppointments: 0,
            onePlace: 0,
            privacy: 0
          },
          concerns: '',
          monthlyPrice: '',
          willingToTest: '',
          contactName: '',
          contactEmail: '',
          contactPhone: ''
        })
      } else {
        alert('Error: ' + result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative py-28 md:py-36">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Join Lebn Early Access
          </ScrollReveal>
          
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Help shape the future of personal health management - be among the first to try Lebn free
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            {/* Section 1 - About You */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">1</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">About You</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your age range *
                  </label>
                  <div className="space-y-2">
                    {['18-30', '31-45', '46-60', '60+'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="ageRange"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.ageRange === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What type of healthcare do you primarily use? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'NHS GP only',
                      'Private healthcare',
                      'Mix of NHS and private',
                      'Other'
                    ].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="currentHealthcare"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.currentHealthcare === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Do you manage any chronic conditions? (Optional)
                  </label>
                  <textarea
                    name="chronicConditions"
                    value={formData.chronicConditions}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g., asthma, diabetes, anxiety, etc."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 - Health Management Challenges */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">2</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Health Management Challenges</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What's your biggest frustration with managing your health information?
                  </label>
                  <textarea
                    name="biggestFrustration"
                    value={formData.biggestFrustration}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Have you ever forgotten important health details during a GP appointment? *
                  </label>
                  <div className="space-y-2">
                    {['Yes, often', 'Sometimes', 'Rarely', 'Never'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="forgottenDetails"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.forgottenDetails === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How do you currently prepare for medical appointments?
                  </label>
                  <textarea
                    name="appointmentPrep"
                    value={formData.appointmentPrep}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g., write notes, try to remember, don't prepare"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 - Interest in Lebn */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">3</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Interest in Lebn</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How likely would you be to use a health chatbot like Lebn? *
                  </label>
                  <div className="space-y-2">
                    {['Very likely', 'Likely', 'Unsure', 'Unlikely'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="likelyToUse"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.likelyToUse === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Which features would be most valuable to you? (Rank 1-4, with 1 being most valuable)
                  </label>
                  <div className="space-y-3">
                    {[
                      { key: 'neverForget', label: 'Never forgetting symptoms or health details' },
                      { key: 'betterAppointments', label: 'Making GP appointments more productive' },
                      { key: 'onePlace', label: 'Having all health info in one secure place' },
                      { key: 'privacy', label: 'Controlling who sees my health data' }
                    ].map(feature => (
                      <div key={feature.key} className="flex items-center gap-3">
                        <select
                          value={formData.mostValuedFeatures[feature.key as keyof typeof formData.mostValuedFeatures]}
                          onChange={(e) => handleRankingChange(feature.key, parseInt(e.target.value))}
                          className="px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                        >
                          <option value={0}>-</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What concerns might you have about using Lebn?
                  </label>
                  <textarea
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="e.g., privacy, ease of use, cost"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What would you consider a fair monthly price for Lebn?
                  </label>
                  <div className="space-y-2">
                    {['Free only', '£5-10', '£10-20', '£20+'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="monthlyPrice"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.monthlyPrice === option}
                          className="text-brand"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 - Early Access */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">4</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Early Access Program</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Would you like to join our free early access program? *
                  </label>
                  <div className="space-y-2">
                    {['Yes', 'Maybe later'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="willingToTest"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.willingToTest === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.willingToTest === 'Yes' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
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
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-lg transform hover:scale-105"
              >
                Submit Application
              </button>
              <p className="mt-4 text-sm text-slate-600">
                Free during early access • No credit card required • Cancel anytime
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}