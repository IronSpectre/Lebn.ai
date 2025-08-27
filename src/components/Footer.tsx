import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            © 2024 Lebn.ai. All rights reserved.
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}