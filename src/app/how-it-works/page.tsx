export default function HowItWorksPage() {
  return (
    <>
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">How Lebn.ai Works</h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Simple, Natural Conversations</h2>
            <p className="text-slate-700 mb-4">
              Lebn.ai uses advanced AI to understand health concerns expressed in natural language. 
              No complex forms or medical jargon required - just chat as you would with a friend.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Intelligent Clarification</h2>
            <p className="text-slate-700 mb-4">
              Our AI asks targeted follow-up questions to ensure nothing important is missed, 
              creating comprehensive health summaries that help healthcare providers deliver better care.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">GP-Ready Documentation</h2>
            <p className="text-slate-700 mb-4">
              All conversations are automatically structured into clinical formats that GPs understand, 
              saving consultation time while ensuring thorough documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Your Data, Your Control</h2>
            <p className="text-slate-700">
              Everything is encrypted and stored securely. You maintain full control over your health data 
              with the ability to export, share, or delete at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}