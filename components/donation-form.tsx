"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { DONATION_CONFIG, DonationFrequency } from "@/lib/donation-config"

interface DonationFormProps {
  className?: string
}

export default function DonationForm({ className = "" }: DonationFormProps) {
  const [amount, setAmount] = useState(DONATION_CONFIG.defaultAmount)
  const frequency = "one-time" // Fixed to one-time only

  const handleDonateClick = () => {
    const amountNum = Number(amount)
    const stripeLink = DONATION_CONFIG.stripeLinks[amountNum]
    
    if (stripeLink) {
      // Redirect to the Stripe payment link
      window.location.href = stripeLink
    } else {
      // Fallback if amount doesn't have a Stripe link
      alert(`Thank you for your interest in donating $${amount}! Please contact us to process your donation.`)
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
      {/* Donation Amount Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-foreground mb-4">
          Select Donation Amount
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
                  ${amount} provides {calculateMentorshipHours()} hours of mentorship for emerging entrepreneurs
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>
                  ${amount} sponsors {calculateStudents()} student{calculateStudents() > 1 ? "s" : ""}{" "}
                  to attend our flagship events
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>
                  ${amount} supports our community building and networking initiatives
                </span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleDonateClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Donate ${amount}
      </button>

      <p className="text-center text-foreground/60 text-sm mt-6">
        🔒 Secure transaction • FAMES Hawaii is a 501(c)(3) nonprofit organization
      </p>
    </div>
  )
}

