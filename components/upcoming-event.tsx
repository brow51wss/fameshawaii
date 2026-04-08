"use client"

import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export default function UpcomingEvent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="events"
      className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0056b3] to-[#003d82] relative overflow-hidden"
      ref={ref as any}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-4 text-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Next Event
        </h2>
        <p
          className={`text-center text-white/80 mb-12 text-lg transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Join us for an unforgettable experience
        </p>

        <div className={`text-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto border border-white/20">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              STAY TUNED
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Events <span className="text-[#eb6e2d]">Coming Soon</span>
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We're planning exciting new events to help you connect, learn, and grow. Check back soon or follow us on social media for announcements!
            </p>
            <Link
              href="/events"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 gradient-primary text-white hover:opacity-90"
            >
              View Past Events
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
