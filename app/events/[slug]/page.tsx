"use client"

import { use, useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Event data
const eventsData = {
  "21st-annual-scholarship-gala": {
    title: "21st Annual Scholarship & Fundraising Gala",
    date: "Saturday, October 25, 2025",
    time: "6:00 PM HST",
    location: "Hilton Hawaiian Village - Coral Ballroom 4 & 5",
    address: "2005 Kalia Road, Honolulu, HI 96815",
    category: "Gala",
    image: "/images/events/21st-annual-scholarship-gala/Screenshot-2025-10-01-at-7.26-768x928.webp",
    description:
      "Welcome to the Lucky 21 Extravaganza! Join us for an unforgettable evening at our 21st Annual Scholarship & Fundraising Gala featuring a spectacular Las Vegas-themed celebration. This premier event brings together business leaders, community supporters, and students to celebrate excellence in Hawaii. The evening features dinner, live entertainment, dancing, and the presentation of scholarships to deserving students. Formal attire required. Tickets are $130 per person. RSVP by October 15. For reservations, contact Joni B. Redick-Yundt at (808) 781-5905 or Tiffany Browne at (808) 436-4886.",
    highlights: [
      "Lucky 21 Extravaganza - Las Vegas casino theme",
      "Gourmet dinner and cocktail reception",
      "Live entertainment and dancing",
      "Scholarship awards presentation",
      "Formal attire event",
      "Networking opportunities with business leaders and community supporters",
    ],
    gallery: [],
  },
  "20th-annual-business-workshop": {
    title: "FAMES Hawaii 20th Annual Free Business & Leadership Workshop",
    date: "Saturday, August 16, 2025",
    time: "8:30 AM - 1:30 PM HST",
    location: "Dave & Buster's at Ala Moana Center",
    address: "Party and Play Room, Ala Moana Center, 1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Workshop",
    image: "/images/events/20th-annual-business-workshop/IMG_0914.webp",
    description:
      "Join us for our landmark 20th Annual Free Business & Leadership Workshop! This comprehensive event features keynote speaker Chuck Siegel, Founder & CEO of Rule Your Kingdom (event sponsor), sharing his entrepreneurial journey from high school dropout to building multimillion-dollar enterprises. Learn from expert speakers including Chenise S. Kanemoto, ESQ. (Hawaii-based attorney, entrepreneur, and mindset coach with 20+ years experience), Dennis Kwak (District Director, U.S. Small Business Administration - Hawaii District Office), and Kristina Lockwood (Vice President and General Manager of Nexstar Media Group's Hawaii operations). Participate in a panel discussion with successful business owners including Debbie Thompson (Owner, Debbie Thompson Wellness), Lincoln Jacobe (Founder & CEO, 6 Pillars Marketing & Public Relations), and Margie Jose (Realtor, Margie Jose & Associates of Keller Williams Honolulu), moderated by Paul Alimbuyao, VP of First Hawaiian Bank. Must register to attend - limited seating. Buffet lunch included. Contact CEO/Founder Joni B. Redick-Yundt at 808.781.5905 or President Tiffany Browne at 801.436.4886 to RSVP.",
    highlights: [
      "Keynote: Chuck Siegel, Founder & CEO of Rule Your Kingdom",
      "Expert speakers: Chenise S. Kanemoto ESQ., Dennis Kwak (SBA), Kristina Lockwood (Nexstar Media)",
      "Business owners panel moderated by Paul Alimbuyao (First Hawaiian Bank VP)",
      "Buffet lunch included",
      "Limited seating - must register to attend",
      "Free admission - supported by event sponsor Rule Your Kingdom",
    ],
    gallery: [
      "/images/events/20th-annual-business-workshop/gallery/FAMES-_1_-1-2048x1583.webp",
      "/images/events/20th-annual-business-workshop/gallery/download.jpg",
      "/images/events/20th-annual-business-workshop/gallery/download.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-1.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-2.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-3.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-4.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-5.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-6.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-7.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-8.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-9.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-10.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-11.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-12.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-13.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-14.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-15.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-16.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-17.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-18.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-19.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-20.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-21.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-22.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-23.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-24.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-25.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-26.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-27.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-28.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-29.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-30.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-31.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-32.webp",
      "/images/events/20th-annual-business-workshop/gallery/download-33.webp",
    ],
  },
  "learn-from-experts-2025": {
    title: "Learn from the Experts: Business Success Workshop Series 2025",
    date: "Wednesday, May 14, 2025",
    time: "9:00 AM - 10:00 AM HST",
    location: "Online",
    address: "Virtual Event - Link Provided Upon Registration",
    category: "Online Workshop",
    image: "/images/events/learn-from-experts-2025/FAMES_event-768x652.webp",
    description:
      "Join us for the first session of our Business Success Workshop Series 2025! This dynamic online workshop, 'Master Your Business Communication: Making the Most of Your Communication Style,' features Arliss Dudley-Cash, MA, MBA, a seasoned expert in communication and business leadership. Arliss takes a deep dive into how our brain processes communication and how understanding this can foster trust, enhance teamwork, and drive innovation across industries. Learn clear and concise communication essential for articulating goals, resolving conflicts, and building lasting relationships with clients and stakeholders. Through a neuroscience lens, Arliss explores the skills needed to break through communication barriers and engage diverse audiences in today's globalized world. Whether you're leading a team, managing client relationships, or just want to sharpen your professional skills, this session will equip you with practical insights and strategies to propel your business forward.",
    highlights: [
      "Understand how the brain processes communication for better business relationships",
      "Foster trust, enhance teamwork, and drive innovation through effective communication",
      "Master clear and concise communication for articulating goals and resolving conflicts",
      "Learn to break through communication barriers and engage diverse audiences",
      "Gain practical insights from seasoned expert Arliss Dudley-Cash, MA, MBA",
      "Perfect for team leaders, client relationship managers, and business professionals",
    ],
    gallery: [
      "/images/events/learn-from-experts-2025/gallery/FAMES_event.webp",
    ],
  },
  "speed-networking-2025": {
    title: "Business Event 2025: Speed Networking",
    date: "Tuesday, May 27th, 2025",
    time: "6:00 PM - 8:30 PM HST",
    location: "Dave & Buster's at Ala Moana Center",
    address: "Party & Playroom, 1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Networking",
    image: "/images/events/speed-networking-2025/FAMES-NETWORKING-EVENT-JUNE-_3_.webp",
    description:
      "Bring your business cards to win a chance to promote your business! Experience the energy of our popular Speed Networking event at Dave & Buster's Party & Playroom. This dynamic evening brings together visionary community leaders, entrepreneurs, and business professionals for meaningful connections and collaboration opportunities. Engage with community leaders, accelerate your business opportunities, master effective engagement with business owners, and expand and strengthen your professional network. Dinner is included with admission. Admission: Members $38, Non-Members $50, Students $25, Day of Event $50. Register in advance to secure your spot. Contact Joni B. Redick-Yundt at (808) 781-5905 or Tiffany Browne at (808) 436-4886 for more information.",
    highlights: [
      "Engage with Visionary Community Leaders",
      "Accelerate Your Business Opportunities",
      "Master Effective Engagement with Business Owners",
      "Expand and Strengthen Your Professional Network",
      "Bring your business cards to win a chance to promote your business",
      "Dinner included with admission",
    ],
    gallery: [
      "/images/events/speed-networking-2025/gallery/FAMES-NETWORKING-EVENT-JUNE-_3_.webp",
    ],
  },
  "health-meets-wealth-2025": {
    title: "Business Networking Event 2025: Health Meets Wealth",
    date: "Tuesday, January 28, 2025",
    time: "6:00 PM - 8:30 PM HST",
    location: "Dave & Buster's Pa'ina Hale Showroom",
    address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
    category: "Networking",
    image: "/images/events/health-meets-wealth-2025/IMG_6051-768x728.webp",
    description:
      "Thriving Physically and Financially in 2025! Join us for this dynamic networking event featuring two exceptional speakers. Jedd Ramos, Owner of KaiZen FITNESS, is Hawaii's Holistic Wellness Specialist who specializes in life-changing fitness that creates limitless transformations. With over 14 years of high-quality experience, Jedd has helped change the lives of many clients between the ages of 4 to 100 years old. With a formal background in higher education, he utilizes scientific, evidence-based methods to create personalized programs and customized coaching for each client. His methodology fuses modern exercise science with ancestral wisdom to holistically serve each client in mind, body, spirit, heart and soul. The KaiZen FITNESS Podcast has been featured in Feedspot's 10 Best Hawaii Health Podcasts. Dunavan Hahn creates success by bringing value to others, striving every day to help clients make informed financial decisions. Growing up in Hawaii, he witnessed the impact of poor financial choices firsthand, which drives his passion for education. A proud graduate of the Shidler College of Business, Dunavan combines his education and personal experiences to help clients focus on what they can control. Dunavan loves exploring the world, playing basketball, and staying active. He is also passionate about modeling and acting, having appeared in magazines, TV shows, Hollywood films, and local commercials. Dinner included with registration. Admission: Members $38, Non-Members $45, Students $25, Day of Event $50. Contact Joni B. Redick-Yundt at 808.781.5905 or Tiffany Browne at 801.436.4886. Visit info@FamesHawaii.org to register.",
    highlights: [
      "Featured Speaker: Jedd Ramos, Owner of KaiZen FITNESS (14+ years holistic wellness experience)",
      "Featured Speaker: Dunavan Hahn, Wealth Management Advisor (Shidler College of Business graduate)",
      "Learn to thrive physically and financially in 2025",
      "Evidence-based wellness methods and financial strategies",
      "Dinner included with registration",
      "Network with health, fitness, and financial professionals",
    ],
    gallery: [
      "/images/events/health-meets-wealth-2025/gallery/FAMES-1-28-25-final-event-flyer.webp",
    ],
  },
  "dining-etiquette-manners": {
    title: "Dining Etiquette & Manners",
    date: "Wednesday, September 11, 2024",
    time: "5:30 PM HST",
    location: "Café Julia",
    address: "1040 Richards St. Honolulu, HI 96813 (Parking at the Ali'i Tower or street parking)",
    category: "Workshop",
    image: "/images/events/dining-etiquette-manners/educating.jpg",
    description:
      "Learn all you need to know from a real pro and owner, Emmerson Ribao, who has been in the restaurant industry for over 30 years. Master the art of professional dining in this elegant and practical workshop at Café Julia. This hands-on experience includes a 5-course dinner where you'll learn essential dining etiquette that will give you confidence in any business dining situation, from casual lunches to formal dinners. Practice proper table manners, conversation skills, and business dining protocols under expert guidance. $62.00 per person for the complete 5-course dinner experience. For reservations, contact CEO/Founder Joni B. Redick-Yundt at (808) 781-5905, President Rochelle Martinho at (808) 777-8855, or Chairperson Tiffany Browne at (801) 436-4886.",
    highlights: [
      "5-course dinner at Café Julia - $62.00 per person",
      "Learn from expert Emmerson Ribao (30+ years restaurant industry experience)",
      "Hands-on practice with proper place settings and utensils",
      "Master business dining conversation protocols and etiquette",
      "Perfect for professionals wanting confidence in dining situations",
      "Elegant upscale restaurant setting for authentic learning experience",
    ],
    gallery: [
      "/images/events/dining-etiquette-manners/gallery/FAMES-Dining-Etiquette-_-Manners-_2_-1-1536x1187.webp",
      "/images/events/dining-etiquette-manners/gallery/IMG_9517-scaled.webp",
      "/images/events/dining-etiquette-manners/gallery/download.webp",
      "/images/events/dining-etiquette-manners/gallery/download-1.webp",
      "/images/events/dining-etiquette-manners/gallery/download-2.webp",
      "/images/events/dining-etiquette-manners/gallery/download-3.webp",
      "/images/events/dining-etiquette-manners/gallery/download-4.webp",
      "/images/events/dining-etiquette-manners/gallery/download-5.webp",
      "/images/events/dining-etiquette-manners/gallery/download-6.webp",
      "/images/events/dining-etiquette-manners/gallery/download-7.webp",
      "/images/events/dining-etiquette-manners/gallery/download-8.webp",
      "/images/events/dining-etiquette-manners/gallery/download-9.webp",
      "/images/events/dining-etiquette-manners/gallery/download-10.webp",
      "/images/events/dining-etiquette-manners/gallery/download-11.webp",
      "/images/events/dining-etiquette-manners/gallery/download-12.webp",
    ],
  },
  "build-connections-that-move-you-forward": {
    title: "Build Connections That Move You Forward",
    date: "Tuesday, January 20th, 2026",
    time: "6:00 PM - 8:30 PM HST",
    location: "Dave & Buster's",
    address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
    mapLink: "https://maps.app.goo.gl/hu5gmszVtzZTPY7M8",
    category: "Networking",
    image: "/images/build-connection-banner-bg.webp",
    description:
      "An inspiring evening of networking, food, & expert-led conversation. Join us for an unforgettable networking event featuring two exceptional speakers who will empower you to communicate with confidence and foster meaningful connections. Whether you're looking to overcome speaking fears, improve your communication skills, or build lasting professional relationships, this event will provide you with practical insights and strategies. Dinner included with registration.",
    pricing: [
      {
        title: "Students",
        price: "$25",
        description: "Valid student ID required",
        featured: false,
      },
      {
        title: "Members",
        price: "$38",
        description: "Active FAMES Hawaii members",
        featured: true,
      },
      {
        title: "Non-Members",
        price: "$45",
        description: "General admission",
        featured: false,
      },
      {
        title: "At Door",
        price: "$50",
        description: "Day of event pricing",
        featured: false,
      },
    ],
    speakers: [
      {
        name: "Laura Reid, M.Ed.",
        image: "/images/events/build-connections-that-move-you-forward/Laura-Reid.jpg",
        bio: "Laura Reid, M.Ed., is a multi-bestselling author, award-winning international speaker, and thought-after coach. Once a shy child with a severe stutter and paralyzing fear of speaking, she now empowers others to find their voice, own their story, and step onto their dream stages. Through her company, Speech Slayer, Laura helps professionals speak with confidence, deliver unforgettable presentations, and transform big ideas into powerful, published books. Her debut book, The Public Speaking Horror Show: 7 Secrets to Kill It as a Speaker, became an instant bestseller and resonated with readers worldwide. Originally from New York, Laura now resides on the Big Island of Hawai'i.",
      },
      {
        name: "Vince Abramo",
        image: "/images/events/build-connections-that-move-you-forward/Vince-Abramo.jpg",
        bio: "Vince Abramo holds a master's degree in Public Administration and a bachelor's degree in Intercommunication and Public Relations from the University of Hawai'i. She is certified in conflict resolution, nonprofit management, and volunteer management, and is a certified coach and trainer through the John Maxwell Team, Amen University's Brain Health Coaching program, Neuroencoding, and the International Coaching Federation (ICF). Specializing in leadership and personal development, Vince is dedicated to fostering harmony within small businesses through effective internal and interpersonal communication.",
      },
    ],
    highlights: [
      "Expert-led conversation on building meaningful connections",
      "Learn to speak with confidence and deliver unforgettable presentations",
      "Master effective internal and interpersonal communication",
      "Transform big ideas into powerful, published books",
      "Foster harmony within small businesses",
      "Dinner included with registration",
    ],
    gallery: [
      "/images/events/build-connections-that-move-you-forward/content.png",
      "/images/events/build-connections-that-move-you-forward/Laura-Reid.jpg",
      "/images/events/build-connections-that-move-you-forward/Vince-Abramo.jpg",
    ],
  },
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const event = eventsData[resolvedParams.slug as keyof typeof eventsData]

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation()
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation()
  const { ref: speakersRef, isVisible: speakersVisible } = useScrollAnimation()
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
            <p className="text-foreground/60 text-sm mb-4">{event.address}</p>
            <a
              href={"mapLink" in event ? event.mapLink : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {"pricing" in event && event.pricing && event.pricing.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5" ref={pricingRef as any}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${
                pricingVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Registration & Pricing
            </h2>
            <p
              className={`text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                pricingVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Choose your ticket tier and secure your spot today
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {"pricing" in event && event.pricing.map((tier: any, index: number) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-6 shadow-lg border-2 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                    tier.featured
                      ? "border-primary ring-4 ring-primary/20 relative"
                      : "border-border"
                  } ${pricingVisible ? "scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        BEST VALUE
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {tier.title}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60 mb-6 min-h-[2.5rem]">
                      {tier.description}
                    </p>
                    <Link
                      href="/contact"
                      className={`block w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md ${
                        tier.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {resolvedParams.slug === "build-connections-that-move-you-forward" ? "Get my Ticket(s)" : "Register Now"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p
              className={`text-center text-foreground/60 mt-8 text-sm transition-all duration-700 delay-300 ${
                pricingVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              All tickets include dinner and access to expert-led conversations. Registration required.
            </p>
          </div>
        </section>
      )}

      {/* Featured Speakers Section */}
      {"speakers" in event && event.speakers && event.speakers.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5" ref={speakersRef as any}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-700 ${
                speakersVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Featured Speakers
            </h2>
            <div className="space-y-12">
              {"speakers" in event && event.speakers.map((speaker: any, index: number) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl overflow-hidden shadow-lg border border-border transition-all duration-700 ${
                    speakersVisible ? "scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${speaker.image}')`,
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {speaker.name}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed text-base">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Highlights Section */}
      <section className="py-16 md:py-24 bg-background" ref={highlightsRef as any}>
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
      {event.gallery && event.gallery.length > 0 && (
        <section className="py-16 md:py-24 bg-background" ref={galleryRef as any}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-700 ${
                galleryVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              Event Gallery
            </h2>
            <div className={`grid gap-6 ${event.gallery.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
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
      )}

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

