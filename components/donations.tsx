"use client"

import { Heart, TrendingUp } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Donations() {
  const [amount, setAmount] = useState("50")
  const [frequency, setFrequency] = useState("one-time")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const { ref, isVisible } = useScrollAnimation()

  const presets = [25, 50, 100, 250, 500]

  const handleDonateClick = async () => {
    if (!firstName || !lastName || !email) {
      alert('Please fill in all required fields (First Name, Last Name, Email)')
      return
    }

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          frequency,
          firstName,
          lastName,
          email,
          phone,
        }),
      })

      if (response.ok) {
        alert(`Thank you for your donation request of $${amount}! We will contact you shortly to process your donation.`)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
      } else {
        alert('Sorry, there was an error. Please try again or visit our full donation page.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Sorry, there was an error. Please try again or visit our full donation page.')
    }
  }

  return (
    <section id="donate" className="py-16 md:py-24 bg-background" ref={ref as any}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className={`flex justify-center mb-4 transition-all duration-700 ${isVisible ? "scale-in" : "opacity-0"}`}
          >
            <Heart size={40} className="text-primary" />
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Support Our Mission
          </h2>
          <p
            className={`text-lg text-foreground/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Your donation directly supports mentorship programs, networking events, and resources for Hawaii's next
            generation of entrepreneurs. Every contribution makes a real impact.
          </p>
        </div>

        <div
          className={`bg-white border border-border rounded-lg p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? "scale-in" : "opacity-0"}`}
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

          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-4">Select Donation Amount</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {presets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    amount === preset.toString()
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-primary"
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <label className="block text-sm font-medium text-foreground mb-2">Custom Amount</label>
            <div className="flex">
              <span className="bg-muted px-4 py-2 rounded-l-lg border border-border text-foreground">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8 p-6 bg-secondary/10 rounded-lg">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="(808) 123-4567"
              />
            </div>
          </div>

          <button
            onClick={handleDonateClick}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Donate ${amount} {frequency === "monthly" && "Monthly"}
          </button>

          <p className="text-center text-foreground/60 text-sm mt-4">
            Secure transaction. FAMES Hawaii is a 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </section>
  )
}
