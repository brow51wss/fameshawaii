"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowLeft, Award, Download } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PlatinumSponsorApplicationPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    address: "",
    mailingAddress: "",
    email: "",
    phone: "",
    website: "",
  })

  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [showPaymentButton, setShowPaymentButton] = useState(false)

  const sponsorTier = "Platinum"
  const sponsorAmount = "$7,500"
  const stripeLink = "https://buy.stripe.com/fZeg005c8gmeeahcN945Ze08"

  // Check if all required fields are filled
  useEffect(() => {
    const requiredFieldsFilled = 
      formData.name.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.mailingAddress.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== ""
    
    setShowPaymentButton(requiredFieldsFilled)
  }, [formData])

  // Handle checkbox for same as billing address
  useEffect(() => {
    if (sameAsBilling) {
      setFormData(prev => ({
        ...prev,
        mailingAddress: prev.address
      }))
    }
  }, [sameAsBilling])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      }
      // If same as billing is checked and address is being updated
      if (sameAsBilling && name === 'address') {
        newData.mailingAddress = value
      }
      return newData
    })
  }

  const handlePayment = () => {
    // Save form data to localStorage before redirecting to Stripe
    const sponsorData = {
      ...formData,
      tier: sponsorTier,
      amount: sponsorAmount
    }
    localStorage.setItem('sponsorApplicationData', JSON.stringify(sponsorData))
    
    // Redirect to Stripe payment
    window.location.href = stripeLink
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-all duration-300 hover:gap-3"
          >
            <ArrowLeft size={20} />
            Back to Sponsorship Options
          </Link>

          <div
            className={`text-center mb-12 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="gradient-text">{sponsorTier}</span> Sponsor Application
            </h1>
            <p className="text-xl text-foreground/70 mb-2">
              Investment: <span className="text-primary font-bold text-2xl">{sponsorAmount}</span>
            </p>
            <p className="text-foreground/60">
              Join Hawaii's premier business community as a {sponsorTier} Sponsor
            </p>
          </div>

          <div
            ref={formRef as any}
            className={`bg-white border border-border rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-700 ${formVisible ? "scale-in" : "opacity-0"}`}
          >
            {/* PDF Download Option */}
            <div className="mb-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-foreground/80 mb-3">
                Prefer to fill out the form offline?
              </p>
              <a
                href="/forms/FAMES Sponsorship-2025-2026.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Download size={20} />
                Download PDF Application
              </a>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                {/* Name - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Full Name"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Company Name"
                  />
                </div>

                {/* Address (Business) - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>

                {/* Mailing Address - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mailing Address <span className="text-red-500">*</span>
                  </label>
                  <div className="mb-3">
                    <label className="flex items-center gap-2 text-sm text-foreground/70 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sameAsBilling}
                        onChange={(e) => setSameAsBilling(e.target.checked)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                      />
                      Same as address above
                    </label>
                  </div>
                  <input
                    type="text"
                    name="mailingAddress"
                    value={formData.mailingAddress}
                    onChange={handleChange}
                    disabled={sameAsBilling}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>

                {/* Email - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Phone - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(808) 123-4567"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://www.example.com"
                  />
                </div>
              </div>

              {/* Payment Button - Only shows when all required fields are filled */}
              {showPaymentButton && (
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handlePayment}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Proceed to Payment ({sponsorAmount})
                  </button>
                  <p className="text-center text-sm text-foreground/60 mt-3">
                    You will be redirected to Stripe for secure payment processing
                  </p>
                </div>
              )}

              {!showPaymentButton && (
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    Please fill in all required fields (*) to proceed to payment
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Back to Sponsorship Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

