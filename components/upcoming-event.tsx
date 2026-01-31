"use client"

import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`h-96 rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-700 ${isVisible ? "scale-in" : "opacity-0"}`}
            style={{
              backgroundImage:
                "url(/images/events/pole-power-purpose/6.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "fade-in-right" : "opacity-0"}`}>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              UPCOMING EVENT
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pole, Power, <span className="text-[#eb6e2d]">Purpose</span>
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Galentine's Pole Classes Fundraiser — Celebrate Galentine's with your girls and make it a night to remember. All levels welcome, no experience needed. Proceeds benefit FAMES scholarships.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <Calendar size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Saturday, February 28, 2026</p>
                  <p className="text-white/70">Mark your calendar</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Fit For a Goddess Studio</p>
                  <p className="text-white/70">320 Ward Ave #202, Honolulu</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">4:00 PM - 6:00 PM</p>
                  <p className="text-white/70">Limited to 25 spots</p>
                </div>
              </div>
            </div>

            <Link
              href="/events/pole-power-purpose"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 gradient-primary text-white hover:opacity-90"
            >
              View Details
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
