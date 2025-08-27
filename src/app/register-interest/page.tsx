"use client"

import { useState } from 'react'

export default function RegisterInterestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We\'ll be in touch soon.')
    setFormData({
      name: '',
      email: '',
      role: '',
      organization: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Register Your Interest</h1>
        <p className="text-center text-slate-700 mb-12">
          Join the waitlist for early access to Lebn.ai
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              I am a... *
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="nhs-gp">NHS GP</option>
              <option value="private-gp">Private GP</option>
              <option value="care-home">Care Home Staff</option>
              <option value="other">Other Healthcare Professional</option>
            </select>
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium mb-2">
              Organization (optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Tell us about your interest in Lebn.ai..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand text-white py-3 rounded-full font-medium hover:bg-brand-hover transition-all"
          >
            Submit Registration
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-8">
          By registering, you agree to receive updates about Lebn.ai. 
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  )
}