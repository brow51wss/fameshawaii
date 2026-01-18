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
                "url(/images/events/build-connections-that-move-you-forward/FAMES-Jan.-Thumbnail-copy.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "fade-in-right" : "opacity-0"}`}>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              UPCOMING EVENT
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Build Connections That <span className="text-[#eb6e2d]">Move You Forward</span>
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              An inspiring evening of networking, food, & expert-led conversation featuring Laura Reid, M.Ed. and Vince Abramo. Learn to speak with confidence and build meaningful connections.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <Calendar size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Tuesday, January 20th, 2026</p>
                  <p className="text-white/70">Mark your calendar</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Dave & Buster's - The Garage Meeting Room</p>
                  <p className="text-white/70">Ala Moana Center</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">6:00 PM - 8:30 PM</p>
                  <p className="text-white/70">Food included</p>
                </div>
              </div>
            </div>

            <Link
              href="/events/build-connections-that-move-you-forward"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 gradient-primary text-white hover:opacity-90"
            >
              Get Tickets
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
