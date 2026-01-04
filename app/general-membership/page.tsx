"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check, Users, Calendar, Award, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { MEMBERSHIP_TIERS } from "@/lib/membership-config"

export default function GeneralMembershipPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  // Get General Membership data from config
  const generalMembership = MEMBERSHIP_TIERS.find(tier => tier.id === "general")

  const benefits = [
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Free ticket to the Annual FAMES Gala and discounted access to networking events throughout the year",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with experienced founders, creatives, and industry leaders who are invested in your success",
    },
    {
      icon: Award,
      title: "Leadership Opportunities",
      description: "Gain eligibility to serve as an officer or director and shape the future of FAMES Hawaii",
    },
    {
      icon: Lightbulb,
      title: "Professional Development",
      description: "Access educational programming focused on communication, leadership, and professional growth",
    },
    {
      icon: Heart,
      title: "Curated Community",
      description: "Join a network of entrepreneurs, professionals, and change-makers building Hawai'i's business ecosystem",
    },
  ]

  const impactStats = [
    { number: "500+", label: "Active Members" },
    { number: "$130", label: "Free Gala Ticket Value" },
    { number: "50+", label: "Annual Events" },
    { number: "100+", label: "Mentor Connections" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div
              className={`inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              MOST POPULAR
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Join <span className="gradient-text">FAMES Hawaii</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Connect with Hawaii's most dynamic community of entrepreneurs, creatives, and business leaders
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              General Membership provides you with exclusive access to events, mentorship opportunities, and a
              supportive network dedicated to your professional growth and success
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              <Link
                href="/join/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white hover:opacity-90 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Become a Member
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section
        id="benefits"
        ref={featuresRef as any}
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${featuresVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Membership <span className="gradient-text">Benefits</span>
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${featuresVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Everything you need to accelerate your entrepreneurial journey and make meaningful connections
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${featuresVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={benefitsRef as any} className="py-16 md:py-24 gradient-primary-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${benefitsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            What's Included
          </h2>
          <p
            className={`text-center text-foreground/70 mb-12 text-lg transition-all duration-700 delay-100 ${benefitsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Your General Membership gives you access to:
          </p>

          <div
            className={`bg-white rounded-xl p-8 md:p-12 shadow-xl border-2 border-primary/20 transition-all duration-700 delay-200 ${benefitsVisible ? "scale-in" : "opacity-0"}`}
          >
            <ul className="space-y-4">
              {generalMembership?.features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-foreground text-lg"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef as any} className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${ctaVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Ready to Join?
          </h2>
          <p
            className={`text-xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ${ctaVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Become part of Hawai'i's most supportive entrepreneurial community. Connect with founders, gain access to
            exclusive events, and accelerate your professional journey.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${ctaVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <Link
              href="/join/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white hover:opacity-90 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              Join FAMES Hawaii Today
              <ArrowRight size={20} />
            </Link>
          </div>
          <p
            className={`text-sm text-foreground/60 mt-6 transition-all duration-700 delay-300 ${ctaVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Questions? Contact us at{" "}
            <a href="mailto:info@fameshawaii.org" className="text-primary hover:underline font-semibold">
              info@fameshawaii.org
            </a>{" "}
            or call{" "}
            <a href="tel:8087815905" className="text-primary hover:underline font-semibold">
              (808) 781-5905
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

