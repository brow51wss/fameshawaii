"use client"

import { use, useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, MapPin, Users, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Event data
const eventsData = {
  "21st-annual-scholarship-gala": {
    title: "21st Annual Scholarship & Fundraising Gala",
    date: "October 25, 2025",
    time: "6:00 PM - 10:00 PM HST",
    location: "Hilton Hawaiian Village",
    address: "2005 Kalia Road, Honolulu, HI 96815",
    category: "Gala",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    description:
      "Join us for an unforgettable evening at our 21st Annual Scholarship & Fundraising Gala. This premier event brings together business leaders, community supporters, and students to celebrate Filipino-American excellence in Hawaii. The evening features a gourmet dinner, live entertainment, silent auction, and the presentation of scholarships to deserving students pursuing higher education and entrepreneurial ventures.",
    highlights: [
      "Gourmet dinner and cocktail reception",
      "Live entertainment featuring local Filipino-American artists",
      "Silent auction with exclusive items and experiences",
      "Scholarship awards presentation",
      "Networking opportunities with business leaders",
      "Recognition of community supporters and sponsors",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=800&h=600&fit=crop",
    ],
  },
  "20th-annual-business-workshop": {
    title: "20th Annual Free Business & Leadership Workshop",
    date: "August 16, 2025",
    time: "9:00 AM - 4:00 PM HST",
    location: "Dave & Buster's",
    address: "Ala Moana Center, 1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=600&fit=crop",
    description:
      "Our flagship free business workshop returns for its 20th year! This comprehensive full-day event offers entrepreneurs and business owners essential training in business strategy, leadership development, marketing, financial management, and more. Led by experienced business professionals and industry experts, this workshop provides practical tools and insights you can immediately apply to grow your business.",
    highlights: [
      "Morning keynote by successful Filipino-American entrepreneur",
      "Interactive breakout sessions on marketing, finance, and leadership",
      "Panel discussion with industry experts",
      "Networking lunch with fellow entrepreneurs",
      "Resource fair with local business service providers",
      "Complimentary workshop materials and resources",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    ],
  },
  "learn-from-experts-2025": {
    title: "Learn From Experts 2025: Master Your Business Communication",
    date: "May 14, 2025",
    time: "6:00 PM - 8:00 PM HST",
    location: "Online (Zoom)",
    address: "Virtual Event",
    category: "Online Workshop",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
    description:
      "Join us for an engaging online workshop focused on mastering business communication. In this interactive session, you'll learn to identify your communication style, understand how to adapt your approach for different audiences, and leverage effective communication strategies to build stronger business relationships. This workshop is perfect for entrepreneurs, managers, and professionals looking to enhance their communication skills.",
    highlights: [
      "Discover your primary communication style through interactive assessment",
      "Learn to recognize and adapt to different communication preferences",
      "Master techniques for difficult conversations and conflict resolution",
      "Improve written communication for emails and proposals",
      "Q&A session with communication experts",
      "Downloadable resources and templates",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    ],
  },
  "speed-networking-2025": {
    title: "Business Event 2025: Speed Networking",
    date: "May 27, 2025",
    time: "5:30 PM - 8:30 PM HST",
    location: "Dave & Buster's",
    address: "Ala Moana Center (Party & Playroom), 1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop",
    description:
      "Experience the energy of our popular Speed Networking event! This fast-paced networking format allows you to make meaningful connections with dozens of entrepreneurs and business professionals in one evening. With structured rounds of introductions, you'll have the opportunity to share your business, learn about others, and identify potential collaborations. The evening includes appetizers, drinks, and plenty of time for organic networking after the structured sessions.",
    highlights: [
      "Structured speed networking rounds (4 minutes each)",
      "Meet 20-30 entrepreneurs and business professionals",
      "Complimentary appetizers and first drink",
      "Open networking session after structured rounds",
      "Access to private party room with games and activities",
      "Digital directory of attendees for follow-up",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    ],
  },
  "health-meets-wealth-2025": {
    title: "Business Networking Event 2025: Health Meets Wealth",
    date: "January 28, 2025",
    time: "5:30 PM - 8:30 PM HST",
    location: "Dave & Buster's",
    address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=600&fit=crop",
    description:
      "Start the year strong at our Health Meets Wealth networking event! This unique gathering explores the vital connection between personal wellness and business success. Network with health and wellness professionals, financial advisors, and entrepreneurs while learning strategies to maintain your health while building wealth. The evening features expert speakers, interactive discussions, healthy refreshments, and valuable networking opportunities.",
    highlights: [
      "Expert panel on work-life balance for entrepreneurs",
      "Health and wellness vendor showcase",
      "Financial wellness mini-consultations",
      "Healthy appetizers and refreshments",
      "Networking with health, fitness, and financial professionals",
      "Complimentary wellness resources and materials",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    ],
  },
  "dining-etiquette-manners": {
    title: "Dining Etiquette & Manners",
    date: "September 11, 2024",
    time: "5:30 PM - 8:30 PM HST",
    location: "Café Julia",
    address: "Located in Honolulu, HI",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
    description:
      "Master the art of professional dining in this elegant and practical workshop. Learn essential dining etiquette that will give you confidence in any business dining situation, from casual lunches to formal dinners. This hands-on workshop includes a multi-course meal where you'll practice proper table manners, conversation skills, and business dining protocols under the guidance of etiquette experts.",
    highlights: [
      "Three-course meal at upscale restaurant",
      "Hands-on practice with proper place settings and utensils",
      "Learn business dining conversation protocols",
      "Master the art of ordering and hosting business meals",
      "Understand cultural dining differences in business settings",
      "Receive etiquette guide and reference materials",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800&h=600&fit=crop",
    ],
  },
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const event = eventsData[resolvedParams.slug as keyof typeof eventsData]

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation()
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation()
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!event) {
    notFound()
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section ref={heroRef as any} className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${event.image}')`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/events"
            className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-all duration-300 ${
              heroVisible ? "fade-in-left" : "opacity-0"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Events</span>
          </Link>

          <div className="max-w-4xl">
            <div
              className={`inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-700 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              {event.category}
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              {event.title}
            </h1>
            <div
              className={`flex flex-wrap gap-6 text-foreground/80 transition-all duration-700 delay-200 ${
                heroVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-medium">{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 md:py-24 bg-background" ref={detailsRef as any}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
              detailsVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            About This Event
          </h2>
          <div
            className={`prose prose-lg max-w-none text-foreground/80 mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              detailsVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            <p>{event.description}</p>
          </div>
          <div
            className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 transition-all duration-700 delay-200 ${
              detailsVisible ? "scale-in" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Location Details
            </h3>
            <p className="text-foreground/70 mb-2">
              <strong>{event.location}</strong>
            </p>
            <p className="text-foreground/60 text-sm">{event.address}</p>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5" ref={highlightsRef as any}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-700 ${
              highlightsVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {event.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border ${
                  highlightsVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background" ref={galleryRef as any}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-700 ${
              galleryVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Event Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {event.gallery.map((image, index) => (
              <div
                key={index}
                className={`relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  galleryVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground" ref={ctaRef as any}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              ctaVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Don&apos;t Miss Future Events
          </h2>
          <p
            className={`text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              ctaVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Join our community to stay informed about upcoming workshops, networking events, and our annual gala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className={`bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                ctaVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `200ms` }}
            >
              Become a Member
            </Link>
            <Link
              href="/events"
              className={`bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                ctaVisible ? "scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `300ms` }}
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={event.gallery[currentImageIndex]}
              alt={`Event gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {event.gallery.length}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </main>
  )
}

