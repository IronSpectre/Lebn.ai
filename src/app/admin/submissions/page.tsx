import React from 'react'
import { prisma } from '@/lib/prisma'
import { ExportButtons } from '@/components/ExportButtons'

async function getSubmissions() {
  const [careHomes, patients, privateGPs, nhsGPs, contacts] = await Promise.all([
    prisma.careHomeSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.patientSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.privateGPSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.nHSGPSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })
  ])

  return { careHomes, patients, privateGPs, nhsGPs, contacts }
}

export default async function AdminSubmissionsPage() {
  const submissions = await getSubmissions()
  
  const totalSubmissions = 
    submissions.careHomes.length + 
    submissions.patients.length + 
    submissions.privateGPs.length + 
    submissions.nhsGPs.length + 
    submissions.contacts.length

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Form Submissions</h1>
            <p className="text-slate-600 mt-1">Total submissions: {totalSubmissions}</p>
          </div>
        </div>
        
        <ExportButtons />
        
        {/* Care Homes Submissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Care Homes ({submissions.careHomes.length})
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {submissions.careHomes.length === 0 ? (
              <div className="p-6 text-slate-500">No submissions yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Care Home</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Residents</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Willing to Trial</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.careHomes.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {submission.careHomeName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.contactName}<br />
                          {submission.contactEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.residentCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.willingToTrial}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Patients Submissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Patients ({submissions.patients.length})
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {submissions.patients.length === 0 ? (
              <div className="p-6 text-slate-500">No submissions yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Age Range</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Healthcare</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Willing to Test</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.patients.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {submission.contactName}<br />
                          {submission.contactEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.ageRange}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.currentHealthcare}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.willingToTest}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Private GPs Submissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Private GPs ({submissions.privateGPs.length})
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {submissions.privateGPs.length === 0 ? (
              <div className="p-6 text-slate-500">No submissions yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Practice</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Willing to Pilot</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.privateGPs.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {submission.practiceName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.contactName}<br />
                          {submission.contactEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.practiceType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.willingToPilot}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* NHS GPs Submissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            NHS GPs ({submissions.nhsGPs.length})
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {submissions.nhsGPs.length === 0 ? (
              <div className="p-6 text-slate-500">No submissions yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Practice Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Willing to Trial</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.nhsGPs.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {submission.contactName}<br />
                          {submission.contactEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.practiceSize}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.willingToTrial}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form Submissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Contact Messages ({submissions.contacts.length})
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {submissions.contacts.length === 0 ? (
              <div className="p-6 text-slate-500">No messages yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">From</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email Sent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.contacts.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {submission.name}<br />
                          <span className="text-xs text-slate-500">{submission.email}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.userType}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">
                          {submission.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {submission.emailSent ? (
                            <span className="text-green-600">✓ Sent</span>
                          ) : (
                            <span className="text-yellow-600">⚠ Saved</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <details className="cursor-pointer">
                            <summary className="text-brand hover:text-brand/80">View Message</summary>
                            <div className="mt-2 p-3 bg-slate-50 rounded max-w-md">
                              <p className="text-xs text-slate-700 whitespace-pre-wrap">{submission.message}</p>
                              {submission.company && (
                                <p className="text-xs text-slate-500 mt-2">Company: {submission.company}</p>
                              )}
                              {submission.phone && (
                                <p className="text-xs text-slate-500">Phone: {submission.phone}</p>
                              )}
                            </div>
                          </details>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}