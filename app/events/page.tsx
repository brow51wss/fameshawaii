"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const events = [
    {
      slug: "21st-annual-scholarship-gala",
      title: "21st Annual Scholarship & Fundraising Gala",
      date: "October 25, 2025",
      location: "Hilton Hawaiian Village",
      description:
        "Join us for our premier annual event celebrating Filipino-American excellence and awarding scholarships to deserving students.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      category: "Gala",
    },
    {
      slug: "20th-annual-business-workshop",
      title: "20th Annual Free Business & Leadership Workshop",
      date: "August 16, 2025",
      location: "Dave & Buster's, Ala Moana",
      description:
        "A comprehensive workshop covering essential business strategies and leadership development for entrepreneurs.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      category: "Workshop",
    },
    {
      slug: "learn-from-experts-2025",
      title: "Learn From Experts 2025: Master Your Business Communication",
      date: "May 14, 2025",
      location: "Online",
      description:
        "Master your business communication skills and learn to make the most of your communication style with industry experts.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      category: "Online Workshop",
    },
    {
      slug: "speed-networking-2025",
      title: "Business Event 2025: Speed Networking",
      date: "May 27, 2025",
      location: "Dave & Buster's, Ala Moana Center",
      description:
        "Connect with fellow entrepreneurs and business professionals in a fast-paced, engaging networking environment.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      category: "Networking",
    },
    {
      slug: "health-meets-wealth-2025",
      title: "Business Networking Event 2025: Health Meets Wealth",
      date: "January 28, 2025",
      location: "Dave & Buster's",
      description:
        "Explore the intersection of health and wealth with industry leaders while expanding your professional network.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      category: "Networking",
    },
    {
      slug: "dining-etiquette-manners",
      title: "Dining Etiquette & Manners",
      date: "September 11, 2024",
      location: "Café Julia",
      description:
        "Learn the art of professional dining etiquette and social manners to elevate your business presence.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
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
              Join us for inspiring events that bring together Filipino-American entrepreneurs, business leaders, and
              students for networking, education, and celebration.
            </p>
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

