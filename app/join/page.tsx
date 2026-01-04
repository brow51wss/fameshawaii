"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check } from "lucide-react"
import MembershipTiers from "@/components/membership-tiers"

export default function JoinPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()

  const benefits = [
    {
      title: "Mentorship Network",
      description: "Connect with experienced business leaders who have walked the path before you",
    },
    {
      title: "Professional Development",
      description: "Access to workshops, seminars, and training programs designed for entrepreneurs",
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of like-minded individuals building businesses in Hawaii",
    },
    {
      title: "Scholarship Opportunities",
      description: "Eligible for FAMES Hawaii scholarship programs for continuing education",
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
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Join <span className="gradient-text">FAMES Hawaii</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Choose the membership that fits your entrepreneurial journey
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Whether you're just starting out or leading an established business, we have a membership level that meets
              you where you are and helps you get where you want to go.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <MembershipTiers className="bg-background" />

      {/* Benefits Section */}
      <section ref={benefitsRef as any} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${benefitsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Why Become a Member?
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${benefitsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            FAMES Hawaii membership opens doors to a world of opportunities, connections, and resources designed to help
            you succeed
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/10 ${benefitsVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-400 ${benefitsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Have questions about membership? We're here to help you find the perfect fit for your entrepreneurial
              journey.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">Can I upgrade my membership later?</h3>
              <p className="text-foreground/70">
                Absolutely! You can upgrade your membership at any time. We'll prorate the difference and you'll
                immediately get access to all the benefits of your new tier.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">Is there a commitment period?</h3>
              <p className="text-foreground/70">
                Premium and Founder Circle memberships are annual subscriptions. Standard membership is free and has no
                time commitment. You can cancel paid memberships with 30 days notice.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">Do I need to be Filipino-American to join?</h3>
              <p className="text-foreground/70">
                While our mission focuses on supporting the Filipino-American community, we welcome all entrepreneurs who
                support our mission and want to be part of building an inclusive business community in Hawaii.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

