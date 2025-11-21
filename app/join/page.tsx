"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check, Users, Star, Crown } from "lucide-react"
import { useState } from "react"

export default function JoinPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: tiersRef, isVisible: tiersVisible } = useScrollAnimation()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()

  const [selectedTier, setSelectedTier] = useState("premium")

  const tiers = [
    {
      id: "standard",
      name: "Standard Member",
      icon: Users,
      price: "$0",
      period: "Free Forever",
      description: "Perfect for getting started with FAMES Hawaii",
      features: [
        "Access to monthly networking events",
        "Community forum access",
        "Monthly newsletter with updates",
        "Member directory listing",
        "Event announcements & invitations",
      ],
      cta: "Join Free",
    },
    {
      id: "premium",
      name: "Premium Member",
      icon: Star,
      price: "$99",
      period: "Per Year",
      description: "Enhanced growth opportunities for serious entrepreneurs",
      popular: true,
      features: [
        "Everything in Standard, plus:",
        "Monthly 1-on-1 mentorship sessions",
        "Priority event registration",
        "Exclusive workshops & training",
        "Business development resources",
        "Networking event discounts",
        "Featured member profile",
      ],
      cta: "Get Started",
    },
    {
      id: "founder",
      name: "Founder Circle",
      icon: Crown,
      price: "$499",
      period: "Per Year",
      description: "For established business leaders making significant impact",
      features: [
        "Everything in Premium, plus:",
        "Dedicated mentor assignment",
        "Quarterly pitch feedback sessions",
        "Fundraising strategy support",
        "Co-working space access",
        "Leadership program participation",
        "Speaking opportunities at events",
        "Advisory board consideration",
      ],
      cta: "Join Circle",
    },
  ]

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
      <section ref={tiersRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${tiersVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Membership Tiers
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg transition-all duration-700 delay-100 ${tiersVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Select the membership level that best supports your goals
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-xl p-8 transition-all duration-500 cursor-pointer relative ${
                  selectedTier === tier.id
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-xl scale-105 ring-4 ring-primary/10"
                    : "bg-white border-2 border-border hover:border-primary/50 hover:shadow-lg"
                } ${tiersVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <tier.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                </div>

                <div className="mb-4 hidden">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-foreground/60 ml-2">{tier.period}</span>
                </div>

                <p className="text-foreground/70 mb-6">{tier.description}</p>

                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold mb-6 transition-all block text-center ${
                    selectedTier === tier.id
                      ? "gradient-primary text-white hover:opacity-90 shadow-md"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {tier.cta}
                </a>

                <div className="border-t border-border pt-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <Check
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            feature.endsWith(":") ? "text-foreground/40" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            feature.endsWith(":") ? "text-foreground font-semibold" : "text-foreground/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

