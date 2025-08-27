"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PillNav from './PillNav'

export default function Header() {
  const pathname = usePathname()
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the homepage, scroll to top
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // Otherwise, let the Link component handle navigation
  }
  
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-[1100px]">
      <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 md:px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0"
          >
            <Image 
              src="/lebn-logo.png" 
              alt="Lebn.ai" 
              width={100} 
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <PillNav />
        </div>
      </div>
    </header>
  )
}