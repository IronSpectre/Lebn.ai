import Link from 'next/link'
import { ReactNode } from 'react'
import FadeContent from './FadeContent'
import DarkVeilBackground from './DarkVeilBackground'

interface MarketingHeroProps {
  headline: string
  description: string
  benefits: string[]
  cta: {
    href: string
    label: string
  }
  rightSlot?: ReactNode
}

export default function MarketingHero({ 
  headline, 
  description, 
  benefits, 
  cta, 
  rightSlot 
}: MarketingHeroProps) {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden -mt-28 md:-mt-36">
      <DarkVeilBackground 
        hueShift={14}
        speed={0.5}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1}
      />
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 pt-24 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-6">
          <FadeContent delay={100} blur={true} duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {headline}
            </h1>
          </FadeContent>
          
          <FadeContent delay={200} blur={true} duration={800}>
            <p className="text-lg text-white/90 drop-shadow-md">
              {description}
            </p>
          </FadeContent>
          
          {/* Benefits List */}
          <FadeContent delay={300} blur={true} duration={800}>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-white/90 drop-shadow-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeContent>

          {/* CTA Button */}
          <FadeContent delay={400} blur={true} duration={800}>
            <Link
              href={cta.href}
              className="inline-block bg-brand text-white px-6 py-3 rounded-full font-medium hover:bg-brand-hover transition-all hover:-translate-y-px"
            >
              {cta.label}
            </Link>
          </FadeContent>
        </div>

        {/* Right Slot */}
        {rightSlot && (
          <FadeContent delay={300} blur={true} duration={1000}>
            <div className="order-first md:order-last">
              {rightSlot}
            </div>
          </FadeContent>
        )}
      </div>
      </div>
    </section>
  )
}