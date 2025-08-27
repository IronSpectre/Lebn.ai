"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Patients', href: '/patients' },
  { label: 'NHS GPs', href: '/nhs-gps' },
  { label: 'Private GPs', href: '/private-gps' },
  { label: 'Care Homes', href: '/care-homes' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
]

export default function PillNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const hamburgerRef = useRef<HTMLDivElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const activeIndicatorRef = useRef<HTMLDivElement>(null)
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Animate the active indicator on route change
  useLayoutEffect(() => {
    if (!navContainerRef.current || !activeIndicatorRef.current) return

    const activeIndex = navItems.findIndex(item => item.href === pathname)
    const activeElement = navItemRefs.current[activeIndex]

    if (activeElement && activeIndicatorRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect()
      const activeRect = activeElement.getBoundingClientRect()
      
      const left = activeRect.left - containerRect.left
      const width = activeRect.width

      gsap.to(activeIndicatorRef.current, {
        x: left,
        width: width,
        duration: 0.3,
        ease: "power2.inOut"
      })
    }
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Animate hamburger to X with GSAP
      if (hamburgerRef.current) {
        const lines = hamburgerRef.current.querySelectorAll('span')
        gsap.to(lines[0], { rotation: 45, y: 8, duration: 0.3, ease: "power2.inOut" })
        gsap.to(lines[1], { opacity: 0, duration: 0.2 })
        gsap.to(lines[2], { rotation: -45, y: -8, duration: 0.3, ease: "power2.inOut" })
      }
    } else {
      document.body.style.overflow = 'unset'
      // Animate hamburger back to lines
      if (hamburgerRef.current) {
        const lines = hamburgerRef.current.querySelectorAll('span')
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: "power2.inOut" })
        gsap.to(lines[1], { opacity: 1, duration: 0.2 })
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3, ease: "power2.inOut" })
      }
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Desktop Navigation with sliding indicator */}
      <div ref={navContainerRef} className="hidden md:flex items-center gap-2 flex-wrap relative">
        {/* Sliding background indicator */}
        <div 
          ref={activeIndicatorRef}
          className="absolute h-full bg-brand rounded-full pointer-events-none"
          style={{ 
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        
        {/* Navigation items */}
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => { navItemRefs.current[index] = el }}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 relative z-10
              ${pathname === item.href 
                ? 'text-white' 
                : 'text-slate-700 hover:text-slate-900'
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div ref={hamburgerRef} className="w-6 h-5 flex flex-col justify-between">
            <span className="block h-0.5 w-full bg-slate-900 origin-center" />
            <span className="block h-0.5 w-full bg-slate-900" />
            <span className="block h-0.5 w-full bg-slate-900 origin-center" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 bg-white rounded-2xl border border-slate-200 shadow-lg p-4 z-50">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${pathname === item.href 
                      ? 'bg-brand text-white' 
                      : 'text-slate-700 hover:bg-slate-50'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}