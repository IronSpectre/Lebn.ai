"use client"

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function PrivateGPsRegisterPage() {
  const [formData, setFormData] = useState({
    // Practice Information
    practiceName: '',
    practiceType: '',
    practitionerCount: '',
    patientsPerMonth: '',
    
    // Current Challenges
    biggestChallenge: '',
    averageConsultTime: '',
    historyGatheringTime: '',
    patientPreparation: '',
    
    // Interest in Lebn
    interestedInFeatures: {
      timeEfficiency: false,
      patientSatisfaction: false,
      clinicalQuality: false,
      whiteLabel: false,
      multiLanguage: false,
      lifestyleData: false
    },
    planType: '',
    concerns: '',
    
    // Pilot Program
    willingToPilot: '',
    contactName: '',
    contactRole: '',
    contactEmail: '',
    contactPhone: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      interestedInFeatures: {
        ...prev.interestedInFeatures,
        [feature]: !prev.interestedInFeatures[feature as keyof typeof prev.interestedInFeatures]
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/submissions/private-gps', {
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
          practiceName: '',
          practiceType: '',
          practitionerCount: '',
          patientsPerMonth: '',
          biggestChallenge: '',
          averageConsultTime: '',
          historyGatheringTime: '',
          patientPreparation: '',
          interestedInFeatures: {
            timeEfficiency: false,
            patientSatisfaction: false,
            clinicalQuality: false,
            whiteLabel: false,
            multiLanguage: false,
            lifestyleData: false
          },
          planType: '',
          concerns: '',
          willingToPilot: '',
          contactName: '',
          contactRole: '',
          contactEmail: '',
          contactPhone: '',
          additionalInfo: ''
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
    <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative py-28 md:py-36 pt-28 md:pt-36">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Transform Your Private Practice with Lebn
          </ScrollReveal>
          
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Join our exclusive pilot program for private healthcare practitioners
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            {/* Section 1 - Practice Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">1</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Practice Information</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Practice/Clinic Name *
                  </label>
                  <input
                    type="text"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Type of Practice *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Solo practitioner',
                      'Small practice (2-5 practitioners)',
                      'Medium practice (6-15 practitioners)',
                      'Large practice (15+ practitioners)',
                      'Multi-specialty clinic'
                    ].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="practiceType"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.practiceType === option}
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
                    Number of practitioners *
                  </label>
                  <input
                    type="text"
                    name="practitionerCount"
                    value={formData.practitionerCount}
                    onChange={handleInputChange}
                    placeholder="e.g., 3"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Average patients per month
                  </label>
                  <input
                    type="text"
                    name="patientsPerMonth"
                    value={formData.patientsPerMonth}
                    onChange={handleInputChange}
                    placeholder="e.g., 500"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 - Current Challenges */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">2</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Current Challenges</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What&rsquo;s your biggest challenge with patient consultations?
                  </label>
                  <textarea
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="e.g., time constraints, incomplete histories, patient preparation"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Average consultation time (minutes) *
                  </label>
                  <div className="space-y-2">
                    {['15-20', '20-30', '30-45', '45-60', '60+'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="averageConsultTime"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.averageConsultTime === option}
                          className="text-brand"
                          required
                        />
                        <span>{option} minutes</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How much consultation time is spent gathering patient history? *
                  </label>
                  <div className="space-y-2">
                    {['Less than 25%', '25-50%', '50-75%', 'More than 75%'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="historyGatheringTime"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.historyGatheringTime === option}
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
                    How often do patients arrive unprepared for consultations? *
                  </label>
                  <div className="space-y-2">
                    {['Almost always', 'Often', 'Sometimes', 'Rarely'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="patientPreparation"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.patientPreparation === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Interest in Lebn */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">3</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Interest in Lebn Features</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Which features would benefit your practice? (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {[
                      { key: 'timeEfficiency', label: 'Save 15+ minutes per consultation' },
                      { key: 'patientSatisfaction', label: 'Higher patient satisfaction scores' },
                      { key: 'clinicalQuality', label: 'More comprehensive clinical histories' },
                      { key: 'whiteLabel', label: 'White-label branding for my practice' },
                      { key: 'multiLanguage', label: 'Multi-language support' },
                      { key: 'lifestyleData', label: 'Lifestyle and wellness data integration' }
                    ].map(feature => (
                      <label key={feature.key} className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.interestedInFeatures[feature.key as keyof typeof formData.interestedInFeatures]}
                          onChange={() => handleCheckboxChange(feature.key)}
                          className="mt-1 text-brand"
                        />
                        <span>{feature.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Which pricing plan would suit your practice? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Solo Practitioner (£299/month)',
                      'Group Practice (£799/month)',
                      'Enterprise (Custom pricing)',
                      'Need more information'
                    ].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="planType"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.planType === option}
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
                    Any concerns or questions about implementing Lebn?
                  </label>
                  <textarea
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="e.g., patient adoption, integration with existing systems, training requirements"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Pilot Program */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">4</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Exclusive Pilot Program</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Limited Offer:</strong> Join our pilot program and receive 3 months free, 
                  priority support, and lifetime founder pricing (30% off regular rates forever).
                </p>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Would you like to join our pilot program? *
                  </label>
                  <div className="space-y-2">
                    {['Yes, immediately', 'Yes, but need more information', 'Maybe later'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="willingToPilot"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.willingToPilot === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {(formData.willingToPilot === 'Yes, immediately' || formData.willingToPilot === 'Yes, but need more information') && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Contact Name *
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
                        Your Role *
                      </label>
                      <input
                        type="text"
                        name="contactRole"
                        value={formData.contactRole}
                        onChange={handleInputChange}
                        placeholder="e.g., Lead GP, Practice Manager"
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Any specific requirements or questions for our team?"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl p-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-lg transform hover:scale-105"
              >
                Submit Application
              </button>
              <p className="mt-4 text-sm text-slate-600">
                Priority response within 24 hours • Free pilot program • Lifetime founder pricing
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}