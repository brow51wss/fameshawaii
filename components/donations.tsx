"use client"

import { Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import DonationForm from "./donation-form"

export default function Donations() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="donate" className="py-16 md:py-24 bg-background" ref={ref as any}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className={`flex justify-center mb-4 transition-all duration-700 ${isVisible ? "scale-in" : "opacity-0"}`}
          >
            <Heart size={40} className="text-primary" />
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Support Our Mission
          </h2>
          <p
            className={`text-lg text-foreground/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Your donation directly supports mentorship programs, networking events, and resources for Hawaii's next
            generation of entrepreneurs. Every contribution makes a real impact.
          </p>
        </div>

        <div
          className={`bg-white border border-border rounded-lg p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? "scale-in" : "opacity-0"}`}
        >
          <DonationForm />
        </div>
      </div>
    </section>
  )
}
