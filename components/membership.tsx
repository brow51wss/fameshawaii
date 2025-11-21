"use client"

import { Check } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState("standard")
  const { ref, isVisible } = useScrollAnimation()

  const tiers = [
    {
      id: "standard",
      name: "Standard Member",
      price: "$0.00",
      description: "Perfect for getting started",
      features: [
        "Access to monthly networking events",
        "Community forum access",
        "Monthly newsletter",
        "Member directory",
      ],
    },
    {
      id: "premium",
      name: "Premium Member",
      price: "$99.00",
      description: "Enhanced growth opportunities",
      features: [
        "Everything in Standard, plus:",
        "Monthly 1-on-1 mentorship sessions",
        "Priority event registration",
        "Exclusive workshops & training",
        "Business development resources",
      ],
    },
    {
      id: "founder",
      name: "Founder Circle",
      price: "$499.00",
      description: "For serious entrepreneurs",
      features: [
        "Everything in Premium, plus:",
        "Dedicated mentor assignment",
        "Pitch feedback sessions",
        "Fundraising support",
        "Co-working space access",
        "Leadership program participation",
      ],
    },
  ]

  return (
    <section id="membership" className="py-16 md:py-24 gradient-primary-soft relative overflow-hidden" ref={ref as any}>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Join Our Community
        </h2>
        <p
          className={`text-center text-foreground/70 mb-16 text-lg transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Choose the membership that fits your journey
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`rounded-lg p-8 transition-all duration-500 cursor-pointer bg-white hover:scale-105 ${
                selectedTier === tier.id
                  ? "border-2 border-primary shadow-xl scale-105 ring-4 ring-primary/10"
                  : "border-2 border-border hover:border-primary/50 hover:shadow-lg"
              } ${isVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <span className="text-3xl font-bold text-primary mb-2 block hidden">{tier.price}</span>
              <p className="text-foreground/60 mb-6">{tier.description}</p>

              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold mb-6 transition-all ${
                  selectedTier === tier.id
                    ? "gradient-primary text-white hover:opacity-90 shadow-md"
                    : "border border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Select Tier
              </button>

              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 gradient-primary text-white hover:opacity-90 hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}
