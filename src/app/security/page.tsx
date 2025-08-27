export default function SecurityPage() {
  return (
    <>
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Security & Privacy</h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">End-to-End Encryption</h2>
            <p className="text-slate-700 mb-4">
              All data is encrypted at rest and in transit using industry-standard AES-256 encryption. 
              Your health information is protected with the same security used by banks and government agencies.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">GDPR & UK Data Protection</h2>
            <p className="text-slate-700 mb-4">
              We are fully compliant with GDPR and UK data protection regulations. You have complete 
              rights over your data including access, portability, correction, and deletion.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">NHS IG Toolkit Aligned</h2>
            <p className="text-slate-700 mb-4">
              Our security practices align with NHS Information Governance Toolkit requirements, 
              ensuring appropriate safeguards for health data handling.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">No Data Selling</h2>
            <p className="text-slate-700 mb-4">
              We never sell your health data. Your information is used solely to provide you with 
              better healthcare support and is shared only with your explicit consent.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Regular Security Audits</h2>
            <p className="text-slate-700">
              We conduct regular security audits and penetration testing to ensure our systems 
              remain secure against evolving threats.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}