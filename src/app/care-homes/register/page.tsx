"use client"

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function CareHomesRegisterPage() {
  const [formData, setFormData] = useState({
    // About Your Care Home
    residentCount: '',
    recordingMethod: '',
    recordingMethodOther: '',
    
    // Current Challenges
    biggestChallenge: '',
    detailsLostFrequency: '',
    timePerShift: '',
    
    // Interest in Lebn
    wouldFindEasier: '',
    featureRanking: {
      instantSummaries: 0,
      centralHistory: 0,
      shiftCommunication: 0,
      reducedAdmin: 0
    },
    concerns: '',
    
    // Pilot Program
    willingToTrial: '',
    contactName: '',
    contactRole: '',
    contactEmail: '',
    carHomeName: '',
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
      featureRanking: {
        ...prev.featureRanking,
        [feature]: rank
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/submissions/care-homes', {
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
          residentCount: '',
          recordingMethod: '',
          recordingMethodOther: '',
          biggestChallenge: '',
          detailsLostFrequency: '',
          timePerShift: '',
          wouldFindEasier: '',
          featureRanking: {
            instantSummaries: 0,
            centralHistory: 0,
            shiftCommunication: 0,
            reducedAdmin: 0
          },
          concerns: '',
          willingToTrial: '',
          contactName: '',
          contactRole: '',
          contactEmail: '',
          carHomeName: '',
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
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative py-28 md:py-36">
        <div className="container mx-auto px-4">
          <ScrollReveal 
            containerClassName="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={25}
          >
            Help Us Shape Lebn for Care Homes
          </ScrollReveal>
          
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Register for our free 3-month pilot program and help us build the perfect solution for your care home
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            {/* Section 1 - About Your Care Home */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">1</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">About Your Care Home</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Care Home Name *
                  </label>
                  <input
                    type="text"
                    name="carHomeName"
                    value={formData.carHomeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How many residents do you currently care for? *
                  </label>
                  <div className="space-y-2">
                    {['Under 20', '20-50', '50+'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="residentCount"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.residentCount === option}
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
                    How do you currently record resident health updates? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Paper records',
                      'Digital care management system',
                      'Combination',
                      'Other'
                    ].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="recordingMethod"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.recordingMethod === option}
                          className="text-brand"
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.recordingMethod === 'Other' && (
                    <input
                      type="text"
                      name="recordingMethodOther"
                      value={formData.recordingMethodOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Section 2 - Current Challenges */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">2</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Current Challenges</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What&rsquo;s the biggest challenge in keeping resident records up to date?
                  </label>
                  <textarea
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How often do important details get lost between staff shift changes? *
                  </label>
                  <div className="space-y-2">
                    {['Rarely', 'Occasionally', 'Frequently'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="detailsLostFrequency"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.detailsLostFrequency === option}
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
                    How much time per shift is spent on health record updates?
                  </label>
                  <input
                    type="text"
                    name="timePerShift"
                    value={formData.timePerShift}
                    onChange={handleInputChange}
                    placeholder="e.g., 30 minutes, 2 hours"
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
                    Would your staff find it easier to update records by simply speaking to or typing into a chatbot? *
                  </label>
                  <div className="space-y-2">
                    {['Yes', 'No', 'Not sure'].map(option => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="wouldFindEasier"
                          value={option}
                          onChange={handleInputChange}
                          checked={formData.wouldFindEasier === option}
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
                    Which of these features would be most valuable? (Rank 1-4, with 1 being most valuable)
                  </label>
                  <div className="space-y-3">
                    {[
                      { key: 'instantSummaries', label: 'Instant summaries for GPs/hospitals' },
                      { key: 'centralHistory', label: 'Secure central history for each resident' },
                      { key: 'shiftCommunication', label: 'Easy shift-to-shift communication' },
                      { key: 'reducedAdmin', label: 'Reduced admin time' }
                    ].map(feature => (
                      <div key={feature.key} className="flex items-center gap-3">
                        <select
                          value={formData.featureRanking[feature.key as keyof typeof formData.featureRanking]}
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
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Pilot Program */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">4</div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Pilot Program</h2>
              </div>
                
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Would you be willing to trial Lebn for 3 months in your care home? *
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
                        Role/Position *
                      </label>
                      <input
                        type="text"
                        name="contactRole"
                        value={formData.contactRole}
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
                        Phone Number
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
            <div className="text-center bg-gradient-to-r from-brand/10 to-purple-600/10 rounded-2xl p-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-brand to-purple-600 text-white px-12 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-lg transform hover:scale-105"
              >
                Submit Registration
              </button>
              <p className="mt-4 text-sm text-slate-600">
                We&rsquo;ll review your application and contact you within 2 business days
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}