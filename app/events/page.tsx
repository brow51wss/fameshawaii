"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: upcomingRef, isVisible: upcomingVisible } = useScrollAnimation()
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const upcomingEvents = [
    {
      slug: "build-connections-that-move-you-forward",
      title: "Build Connections That Move You Forward",
      date: "Tuesday, January 20th, 2026",
      location: "Dave & Buster's - The Garage Meeting Room",
      description:
        "An inspiring evening of networking, food, & expert-led conversation featuring Laura Reid, M.Ed. and Vince Abramo. Learn to speak with confidence and build meaningful connections. Food included. Students $25, Members $38, Non-Members $45, At Door $50.",
      image: "/images/events/build-connections-that-move-you-forward/FAMES-Jan.-Thumbnail-copy.webp",
      category: "Networking",
    },
  ]

  const events = [
    {
      slug: "21st-annual-scholarship-gala",
      title: "21st Annual Scholarship & Fundraising Gala",
      date: "Saturday, October 25, 2025",
      location: "Hilton Hawaiian Village - Coral Ballroom 4 & 5",
      description:
        "Welcome to the Lucky 21 Extravaganza! Join us for a spectacular Las Vegas-themed celebration featuring dinner, entertainment, dancing, and scholarship awards. Formal attire. Tickets $130.",
      image: "/images/events/21st-annual-scholarship-gala/Screenshot-2025-10-01-at-7.26-768x928.webp",
      category: "Gala",
    },
    {
      slug: "20th-annual-business-workshop",
      title: "20th Annual Free Business & Leadership Workshop",
      date: "Saturday, August 16, 2025",
      location: "Dave & Buster's at Ala Moana Center (Party and Play Room)",
      description:
        "Free workshop featuring keynote by Chuck Siegel (Rule Your Kingdom), expert speakers, business panel, and buffet lunch. 8:30AM-1:30PM. Must register - limited seating.",
      image: "/images/events/20th-annual-business-workshop/IMG_0914.webp",
      category: "Workshop",
    },
    {
      slug: "learn-from-experts-2025",
      title: "Learn from the Experts: Business Success Workshop Series 2025",
      date: "Wednesday, May 14, 2025",
      location: "Online",
      description:
        "Master your business communication with Arliss Dudley-Cash, MA, MBA. Learn how the brain processes communication to foster trust, enhance teamwork, and drive innovation. 9:00AM - 10:00AM HST.",
      image: "/images/events/learn-from-experts-2025/FAMES_event-768x652.webp",
      category: "Online Workshop",
    },
    {
      slug: "speed-networking-2025",
      title: "Business Event 2025: Speed Networking",
      date: "Tuesday, May 27th, 2025",
      location: "Dave & Buster's at Ala Moana Center (Party & Playroom)",
      description:
        "Bring your business cards to win a chance to promote your business! Engage with visionary community leaders, accelerate business opportunities, and expand your network. Dinner included. 6:00PM-8:30PM.",
      image: "/images/events/speed-networking-2025/FAMES-NETWORKING-EVENT-JUNE-_3_.webp",
      category: "Networking",
    },
    {
      slug: "health-meets-wealth-2025",
      title: "Business Networking Event 2025: Health Meets Wealth",
      date: "Tuesday, January 28, 2025",
      location: "Dave & Buster's Pa'ina Hale Showroom",
      description:
        "Thriving Physically and Financially in 2025! Featured speakers: Jedd Ramos (KaiZen FITNESS) and Dunavan Hahn (Wealth Management). Dinner included. 6:00PM-8:30PM.",
      image: "/images/events/health-meets-wealth-2025/IMG_6051-768x728.webp",
      category: "Networking",
    },
    {
      slug: "dining-etiquette-manners",
      title: "Dining Etiquette & Manners",
      date: "Wednesday, September 11, 2024",
      location: "Café Julia",
      description:
        "Learn from restaurant industry expert Emmerson Ribao (30+ years experience). Master professional dining etiquette with a 5-course dinner at Café Julia. $62.00 per person. 5:30 PM.",
      image: "/images/events/dining-etiquette-manners/educating.jpg",
      category: "Workshop",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Our <span className="gradient-text">Events</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-100 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Connect, Learn, and Grow with FAMES Hawaii
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Join us for inspiring events that bring together entrepreneurs, business leaders, and
              students for networking, education, and celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5" ref={upcomingRef as any}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${
              upcomingVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Upcoming Events
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              upcomingVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Join us for our next exciting events and be part of our growing community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className={`group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/20 ring-2 ring-primary/10 ${
                  upcomingVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${event.image}')`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      UPCOMING
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-16 md:py-24 bg-background" ref={eventsRef as any}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${
              eventsVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Past Events
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              eventsVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Explore our recent events and see how we&apos;re making a difference in the community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className={`group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border ${
                  eventsVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${event.image}')`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5" ref={ctaRef as any}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
              ctaVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Stay Updated on Upcoming Events
          </h2>
          <p
            className={`text-xl text-foreground/70 mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              ctaVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Join our community to receive notifications about upcoming workshops, networking events, and our annual gala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className={`bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                ctaVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `200ms` }}
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                ctaVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `300ms` }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

