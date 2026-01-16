"use client"

import { TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import { DONATION_CONFIG, DonationFrequency } from "@/lib/donation-config"

interface DonationFormProps {
  className?: string
}

export default function DonationForm({ className = "" }: DonationFormProps) {
  const [amount, setAmount] = useState(DONATION_CONFIG.defaultAmount)
  const frequency = "one-time" // Fixed to one-time only
  
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  
  const [showPaymentButton, setShowPaymentButton] = useState(false)

  // Check if all required fields are filled
  useEffect(() => {
    const requiredFieldsFilled = 
      donorInfo.firstName.trim() !== "" &&
      donorInfo.lastName.trim() !== "" &&
      donorInfo.email.trim() !== ""
    
    setShowPaymentButton(requiredFieldsFilled)
  }, [donorInfo])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDonateClick = () => {
    const amountNum = Number(amount)
    const stripeLink = DONATION_CONFIG.stripeLinks[amountNum]
    
    if (stripeLink) {
      // Save donor data to localStorage before redirecting to Stripe
      const donationData = {
        ...donorInfo,
        amount: amountNum,
        frequency: frequency
      }
      localStorage.setItem('donationData', JSON.stringify(donationData))
      
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

      {/* Donor Information */}
      <div className="mb-8 space-y-4">
        <label className="block text-sm font-semibold text-foreground mb-2">
          Your Information
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-foreground/70 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={donorInfo.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={donorInfo.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-foreground/70 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={donorInfo.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-foreground/70 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={donorInfo.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(808) 123-4567"
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

      {/* Submit Button - Only shows when required fields are filled */}
      {showPaymentButton ? (
        <button
          onClick={handleDonateClick}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Donate ${amount}
        </button>
      ) : (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            Please fill in your name and email to proceed to payment
          </p>
        </div>
      )}

      <p className="text-center text-foreground/60 text-sm mt-6">
        🔒 Secure transaction • FAMES Hawaii is a 501(c)(3) nonprofit organization
      </p>
    </div>
  )
}

