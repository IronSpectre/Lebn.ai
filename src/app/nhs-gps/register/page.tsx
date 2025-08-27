"use client"

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function NHSGPsRegisterPage() {
  const [formData, setFormData] = useState({
    // About Your Practice
    role: '',
    roleOther: '',
    practiceSize: '',
    
    // Current Challenges
    historyTakingTime: '',
    missingInfoFrequency: '',
    
    // Interest in Lebn
    wouldImproveEfficiency: '',
    usefulFeatures: {
      redFlags: 0,
      timeline: 0,
      medicationHistory: 0,
      emrIntegration: 0
    },
    concerns: '',
    
    // Pilot Program
    willingToTrial: '',
    contactName: '',
    contactRole: '',
    contactEmail: ''
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
      usefulFeatures: {
        ...prev.usefulFeatures,
        [feature]: rank
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/submissions/nhs-gps', {
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
          role: '',
          roleOther: '',
          practiceSize: '',
          historyTakingTime: '',
          missingInfoFrequency: '',
          wouldImproveEfficiency: '',
          usefulFeatures: {
            redFlags: 0,
            timeline: 0,
            medicationHistory: 0,
            emrIntegration: 0
          },
          concerns: '',
          willingToTrial: '',
          contactName: '',
          contactRole: '',
          contactEmail: ''
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* NHS themed background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(220,38,38,0.2),transparent_50%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative min-h-screen flex items-center pt-28 md:pt-36">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Help Us Shape Lebn for NHS General Practice
          </ScrollReveal>
          
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Join our free 3-month pilot program and help improve efficiency and accuracy in NHS consultations
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            {/* Section 1 - About Your Practice */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">1</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">About Your Practice</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Role *
                  </label>
                  <div className="space-y-2">
                    {[
                      'GP Partner',
                      'Salaried GP',
                      'Locum GP',
                      'Practice Nurse',
                      'Other'
                    ].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="role"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.role === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.role === 'Other' && (
                    <input
                      type="text"
                      name="roleOther"
                      value={formData.roleOther}
                      onChange={handleInputChange}
                      placeholder="Please specify your role"
                      className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Practice size (number of registered patients) *
                  </label>
                  <div className="space-y-2">
                    {['Under 3,000', '3,000–8,000', '8,000+'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="practiceSize"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.practiceSize === option}
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

            {/* Section 2 - Current Challenges */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">2</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Current Challenges</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How much of a standard consultation is spent on history-taking? (minutes) *
                  </label>
                  <div className="space-y-2">
                    {['1-2 minutes', '3-4 minutes', '5+ minutes', 'Varies significantly'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="historyTakingTime"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.historyTakingTime === option}
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
                    How often is key information missing from the patient's recall? *
                  </label>
                  <div className="space-y-2">
                    {['Rarely', 'Occasionally', 'Frequently'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="missingInfoFrequency"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.missingInfoFrequency === option}
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">3</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Interest in Lebn</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Would a pre-consultation summary improve the efficiency of your appointments? *
                  </label>
                  <div className="space-y-2">
                    {['Yes', 'No', 'Not sure'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="wouldImproveEfficiency"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.wouldImproveEfficiency === option}
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
                    Which features would be most useful in a GP setting? (Rank 1-4, with 1 being most useful)
                  </label>
                  <div className="space-y-3">
                    {[
                      { key: 'redFlags', label: 'Highlighted red flags' },
                      { key: 'timeline', label: 'Chronological symptom timeline' },
                      { key: 'medicationHistory', label: 'Medication history tracking' },
                      { key: 'emrIntegration', label: 'Integration with EMIS/SystmOne' }
                    ].map(feature => (
                      <div key={feature.key} className="flex items-center gap-3">
                        <select
                          value={formData.usefulFeatures[feature.key as keyof typeof formData.usefulFeatures]}
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
                    What concerns would you have about patient-supplied AI summaries?
                  </label>
                  <textarea
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="e.g., clinical liability, accuracy, patient adoption, integration challenges"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Pilot Program */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">4</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">NHS Pilot Program</h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800">
                  <strong>What's Included:</strong> 3-month free trial, staff training, technical support, 
                  feedback sessions, and input into NHS-specific features. No commitment beyond the pilot period.
                </p>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Would you be willing to trial Lebn in your practice for 3 months? *
                  </label>
                  <div className="space-y-2">
                    {['Yes', 'No'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="willingToTrial"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.willingToTrial === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.willingToTrial === 'Yes' && (
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
                        Role in Practice *
                      </label>
                      <input
                        type="text"
                        name="contactRole"
                        value={formData.contactRole}
                        onChange={handleInputChange}
                        placeholder="e.g., Senior Partner, Practice Manager"
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
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-12 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-lg transform hover:scale-105"
              >
                Submit Application
              </button>
              <p className="mt-4 text-sm text-slate-600">
                Priority review • NHS team response within 48 hours • Limited pilot spaces available
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}