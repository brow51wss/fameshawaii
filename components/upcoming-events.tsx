"use client"

import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export default function UpcomingEvents() {
  const { ref, isVisible } = useScrollAnimation()

  const upcomingEvents = [
    {
      slug: "pole-power-purpose",
      title: "Pole, Power, Purpose",
      date: "Saturday, February 28, 2026",
      time: "4:00 PM - 6:00 PM",
      location: "Fit For a Goddess Studio",
      description:
        "Galentine's Pole Classes Fundraiser — Celebrate Galentine's with your girls! All levels welcome, no experience needed. Proceeds benefit FAMES scholarships. Limited to 40 spots.",
      image: "/images/events/pole-power-purpose/6.webp",
      category: "Fundraiser",
      pricing: "$50 per person",
    },
  ]

  return (
    <section
      id="upcoming-events"
      className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden"
      ref={ref as any}
    >
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          Upcoming <span className="gradient-text">Events</span>
        </h2>
        <p
          className={`text-center text-foreground/70 mb-12 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          Don't miss our next exciting events - register now to secure your spot!
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className={`group bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 ring-2 ring-primary/10 ${
                isVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${event.image}')`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    UPCOMING
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-card to-primary/5">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="bg-primary/10 rounded-lg p-3 mb-4 border border-primary/20">
                  <p className="text-sm font-semibold text-foreground text-center">
                    {event.pricing}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-base group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

