"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { number: "500+", label: "Members Connected" },
    { number: "100+", label: "Mentors & Advisors" },
    { number: "$1M+", label: "Funding Facilitated" },
    { number: "300+", label: "Events Held" },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground" ref={ref as any}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Our Impact
        </h2>
        <p
          className={`text-center text-primary-foreground/80 mb-16 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Building a thriving entrepreneurial community in Hawaii
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-700 ${isVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
