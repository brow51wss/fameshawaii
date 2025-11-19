"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Heart, TrendingUp, Users, Target, Award, Lightbulb } from "lucide-react"
import { useState } from "react"

export default function DonatePage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation()

  const [amount, setAmount] = useState("100")
  const [frequency, setFrequency] = useState("one-time")

  const presets = [25, 50, 100, 250, 500]

  const impactAreas = [
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connect emerging entrepreneurs with experienced business leaders for guidance and support",
    },
    {
      icon: Target,
      title: "Scholarship Fund",
      description: "Provide educational opportunities and resources for Filipino-American students pursuing business",
    },
    {
      icon: Award,
      title: "Recognition Events",
      description: "Celebrate and honor outstanding achievements in the Filipino-American business community",
    },
    {
      icon: Lightbulb,
      title: "Training Workshops",
      description: "Offer skill-building workshops and professional development programs for entrepreneurs",
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
            <div
              className={`flex justify-center mb-6 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              <Heart size={64} className="text-primary" />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Support Our <span className="gradient-text">Mission</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Your donation directly impacts the lives of Filipino-American entrepreneurs
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Every contribution helps us provide mentorship, resources, and opportunities to build a stronger, more
              connected business community in Hawaii.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section ref={formRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-white border border-border rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-700 ${formVisible ? "scale-in" : "opacity-0"}`}
          >
            {/* Donation Frequency Toggle */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-4">Donation Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFrequency("one-time")}
                  className={`py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    frequency === "one-time"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border text-foreground hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setFrequency("monthly")}
                  className={`py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    frequency === "monthly"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border text-foreground hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Donation Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-4">
                Select Donation Amount {frequency === "monthly" && "(per month)"}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset.toString())}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      amount === preset.toString()
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              <label className="block text-sm font-medium text-foreground mb-2">Custom Amount</label>
              <div className="flex">
                <span className="bg-muted px-4 py-3 rounded-l-lg border border-border text-foreground font-semibold">
                  $
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 px-4 py-3 border border-border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
            </div>

            {/* Impact Display */}
            <div className="space-y-4 mb-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Your Impact
              </h3>
              <div className="text-sm text-foreground/70 space-y-2">
                {amount && Number(amount) > 0 && (
                  <>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        ${amount} {frequency === "monthly" && "per month "}provides{" "}
                        {Math.floor(Number(amount) / 25) || 1} hours of mentorship for emerging entrepreneurs
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        ${amount} {frequency === "monthly" && "per month "}sponsors{" "}
                        {Math.floor(Number(amount) / 50) || 1} student{Math.floor(Number(amount) / 50) > 1 ? "s" : ""}{" "}
                        to attend our flagship events
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        ${amount} {frequency === "monthly" && "per month "}supports our community building and
                        networking initiatives
                      </span>
                    </p>
                    {frequency === "monthly" && (
                      <p className="flex items-start gap-2 mt-4 pt-4 border-t border-primary/20">
                        <span className="text-accent font-semibold">🌟</span>
                        <span className="font-semibold text-accent">
                          Your annual impact: ${Number(amount) * 12} supporting Filipino-American entrepreneurs
                        </span>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-foreground mb-4">Donor Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(808) 123-4567"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Donate ${amount} {frequency === "monthly" && "Monthly"}
            </button>

            <p className="text-center text-foreground/60 text-sm mt-6">
              🔒 Secure transaction • FAMES Hawaii is a 501(c)(3) nonprofit organization • Tax ID: XX-XXXXXXX
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section ref={impactRef as any} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${impactVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Where Your Donation Goes
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${impactVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Your contribution directly funds programs and initiatives that make a real difference in our community
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/10 ${impactVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Impact Stats */}
          <div
            className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${impactVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Entrepreneurs Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$250K+</div>
              <div className="text-foreground/70">In Scholarships Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-foreground/70">Community Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Other Ways to Give</h2>

          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">Corporate Sponsorship</h3>
              <p className="text-foreground/70 mb-3">
                Partner with FAMES Hawaii as a corporate sponsor and gain visibility while supporting our mission.
              </p>
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Learn more about sponsorship →
              </a>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">In-Kind Donations</h3>
              <p className="text-foreground/70 mb-3">
                Donate goods, services, or venue space to support our events and programs.
              </p>
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact us about in-kind donations →
              </a>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">Legacy Giving</h3>
              <p className="text-foreground/70 mb-3">
                Include FAMES Hawaii in your estate planning to create a lasting impact for future generations.
              </p>
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Learn about planned giving →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            We're happy to discuss how your contribution can make the biggest impact or explore other ways to support our
            mission.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

