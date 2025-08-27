'use client'

import { Download } from 'lucide-react'

export function ExportButtons() {
  const handleExport = async (type: string) => {
    try {
      const response = await fetch(`/api/export/${type}`)
      
      if (!response.ok) {
        throw new Error('Export failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      
      // Get filename from Content-Disposition header or use default
      const contentDisposition = response.headers.get('Content-Disposition')
      const filenameMatch = contentDisposition?.match(/filename="(.+)"/)
      const filename = filenameMatch ? filenameMatch[1] : `${type}-export.csv`
      
      a.download = filename
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      // Show success message
      const message = document.createElement('div')
      message.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50'
      message.textContent = `Exported ${type} data successfully!`
      document.body.appendChild(message)
      
      setTimeout(() => {
        document.body.removeChild(message)
      }, 3000)
      
    } catch (error) {
      console.error('Export error:', error)
      
      // Show error message
      const message = document.createElement('div')
      message.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50'
      message.textContent = 'Export failed. Please try again.'
      document.body.appendChild(message)
      
      setTimeout(() => {
        document.body.removeChild(message)
      }, 3000)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => handleExport('all')}
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Download className="w-4 h-4 mr-2" />
        Export All Data
      </button>
      
      <button
        onClick={() => handleExport('care-homes')}
        className="inline-flex items-center px-3 py-1.5 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors"
      >
        <Download className="w-3 h-3 mr-1.5" />
        Care Homes
      </button>
      
      <button
        onClick={() => handleExport('patients')}
        className="inline-flex items-center px-3 py-1.5 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors"
      >
        <Download className="w-3 h-3 mr-1.5" />
        Patients
      </button>
      
      <button
        onClick={() => handleExport('private-gps')}
        className="inline-flex items-center px-3 py-1.5 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors"
      >
        <Download className="w-3 h-3 mr-1.5" />
        Private GPs
      </button>
      
      <button
        onClick={() => handleExport('nhs-gps')}
        className="inline-flex items-center px-3 py-1.5 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors"
      >
        <Download className="w-3 h-3 mr-1.5" />
        NHS GPs
      </button>
      
      <button
        onClick={() => handleExport('contact')}
        className="inline-flex items-center px-3 py-1.5 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors"
      >
        <Download className="w-3 h-3 mr-1.5" />
        Contacts
      </button>
    </div>
  )
}