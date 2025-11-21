"use client"

import { Heart, TrendingUp } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Donations() {
  const [amount, setAmount] = useState("50")
  const { ref, isVisible } = useScrollAnimation()

  const presets = [25, 50, 100, 250, 500]

  const handleDonateClick = async () => {
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          frequency: 'one-time',
          firstName: 'Quick',
          lastName: 'Donation',
          email: 'donor@fameshawaii.org',
          phone: '',
        }),
      })

      if (response.ok) {
        alert(`Thank you for your donation interest of $${amount}! We will contact you shortly.`)
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
              {amount && (
                <>
                  <p>${amount} provides 2 hours of mentorship for 3 entrepreneurs</p>
                  <p>${amount} sponsors 1 student to attend our flagship summit</p>
                  <p>${amount} supports our community building initiatives</p>
                </>
              )}
            </div>
          </div>

          <button
            onClick={handleDonateClick}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Donate ${amount}
          </button>

          <p className="text-center text-foreground/60 text-sm mt-4">
            Secure transaction. FAMES Hawaii is a 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </section>
  )
}
