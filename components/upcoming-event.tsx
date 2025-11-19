"use client"

import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function UpcomingEvent() {
  const [isRegistered, setIsRegistered] = useState(false)
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
                "url(https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "fade-in-right" : "opacity-0"}`}>
            <div className="inline-block bg-secondary/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Coming Soon
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Networking Event</h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Join us for an exclusive networking event where you'll connect with entrepreneurs, business leaders, and
              mentors. Learn from experts, discover new opportunities, and expand your professional network in Hawaii's
              thriving business community.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <Calendar size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Check Calendar for Upcoming Events</p>
                  <p className="text-white/70">Monthly networking and training sessions</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Honolulu, Hawaii</p>
                  <p className="text-white/70">Various locations</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">6:00 PM - 8:30 PM</p>
                  <p className="text-white/70">Networking & Learning Sessions</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsRegistered(!isRegistered)}
              className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 ${
                isRegistered
                  ? "bg-white/20 text-white border border-white backdrop-blur-sm"
                  : "gradient-primary text-white hover:opacity-90"
              }`}
            >
              {isRegistered ? "Registered ✓" : "Register Now"}
              {!isRegistered && <ArrowRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
