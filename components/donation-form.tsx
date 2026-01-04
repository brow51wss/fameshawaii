"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { DONATION_CONFIG, DonationFrequency } from "@/lib/donation-config"

interface DonationFormProps {
  className?: string
}

export default function DonationForm({ className = "" }: DonationFormProps) {
  const [amount, setAmount] = useState(DONATION_CONFIG.defaultAmount)
  const [frequency, setFrequency] = useState<DonationFrequency>(DONATION_CONFIG.defaultFrequency)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

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
        alert('Sorry, there was an error. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Sorry, there was an error. Please try again or contact us directly.')
    }
  }

  const calculateMentorshipHours = () => {
    return Math.floor(Number(amount) * DONATION_CONFIG.impact.mentorshipHoursPerDollar) || 1
  }

  const calculateStudents = () => {
    return Math.floor(Number(amount) * DONATION_CONFIG.impact.studentsPerDollar) || 1
  }

  return (
    <div className={className}>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {DONATION_CONFIG.presets.map((preset) => (
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
                  {calculateMentorshipHours()} hours of mentorship for emerging entrepreneurs
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>
                  ${amount} {frequency === "monthly" && "per month "}sponsors{" "}
                  {calculateStudents()} student{calculateStudents() > 1 ? "s" : ""}{" "}
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
                    Your annual impact: ${Number(amount) * 12} supporting entrepreneurs
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

      {/* Submit Button */}
      <button
        onClick={handleDonateClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Donate ${amount} {frequency === "monthly" && "Monthly"}
      </button>

      <p className="text-center text-foreground/60 text-sm mt-6">
        🔒 Secure transaction • FAMES Hawaii is a 501(c)(3) nonprofit organization
      </p>
    </div>
  )
}

