"use client"

import { Check } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { MEMBERSHIP_TIERS } from "@/lib/membership-config"

interface MembershipTiersProps {
  showTitle?: boolean
  className?: string
}

export default function MembershipTiers({ showTitle = true, className = "" }: MembershipTiersProps) {
  const [selectedTier, setSelectedTier] = useState(MEMBERSHIP_TIERS[0].id)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="membership" 
      className={`py-16 md:py-24 gradient-primary-soft relative overflow-hidden ${className}`} 
      ref={ref as any}
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <>
            <h2
              className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Join Our Community
            </h2>
            <p
              className={`text-center text-foreground/70 mb-16 text-lg transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Choose how you want to support and engage with FAMES Hawaii
            </p>
          </>
        )}

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier, idx) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`rounded-lg p-8 transition-all duration-500 cursor-pointer bg-white hover:scale-105 relative ${
                selectedTier === tier.id
                  ? "border-2 border-primary shadow-xl scale-105 ring-4 ring-primary/10"
                  : "border-2 border-border hover:border-primary/50 hover:shadow-lg"
              } ${isVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-foreground/60 mb-6">{tier.description}</p>

              <Link
                href={tier.ctaLink}
                className={`block w-full py-3 px-4 rounded-lg font-semibold mb-6 text-center transition-all ${
                  selectedTier === tier.id
                    ? "gradient-primary text-white hover:opacity-90 shadow-md"
                    : "border border-primary text-primary hover:bg-primary/5"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span 
                      className="text-foreground/80 text-sm"
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

