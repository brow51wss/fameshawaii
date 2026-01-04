"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowLeft, Users, Download } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MembershipApplicationPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    businessAddress: "",
    mailingAddress: "",
    email: "",
    mobilePhone: "",
    workPhone: "",
    businessWebsite: "",
    sponsoredBy: "",
    volunteerHelp: "",
  })

  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [showPaymentButton, setShowPaymentButton] = useState(false)

  // Check if all required fields are filled
  useEffect(() => {
    const requiredFieldsFilled = 
      formData.name.trim() !== "" &&
      formData.businessAddress.trim() !== "" &&
      formData.mailingAddress.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.mobilePhone.trim() !== ""
    
    setShowPaymentButton(requiredFieldsFilled)
  }, [formData])

  // Handle checkbox for same as billing address
  useEffect(() => {
    if (sameAsBilling) {
      setFormData(prev => ({
        ...prev,
        mailingAddress: prev.businessAddress
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
      // If same as billing is checked and business address is being updated
      if (sameAsBilling && name === 'businessAddress') {
        newData.mailingAddress = value
      }
      return newData
    })
  }

  const handlePayment = () => {
    // Save form data to localStorage before redirecting to Stripe
    localStorage.setItem('membershipApplicationData', JSON.stringify(formData))
    
    // Redirect to Stripe payment
    window.location.href = "https://buy.stripe.com/eVq8wPdYMcf24rB95DbZe04"
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/join"
            className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition-all duration-300 hover:gap-3 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <ArrowLeft size={20} />
            Back to Membership Options
          </Link>

          <div className="text-center">
            <div
              className={`flex justify-center mb-4 transition-all duration-700 delay-100 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              <Users size={48} className="text-primary" />
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold text-foreground mb-4 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              General Membership Application
            </h1>
            <p
              className={`text-lg text-foreground/70 max-w-2xl mx-auto transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Join FAMES Hawaii's community of entrepreneurs, creatives, and business leaders
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef as any} className="py-12 md:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-white border border-border rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-700 ${formVisible ? "scale-in" : "opacity-0"}`}
          >
            {/* PDF Download Option */}
            <div className="mb-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-foreground/80 mb-3">
                Prefer to fill out the form offline?
              </p>
              <a
                href="/forms/FAMES membership application special 11-25.pdf"
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
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company
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

                {/* Position */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Position"
                  />
                </div>

                {/* Business Address (Billing) - Required */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Business Address (Billing Address) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessAddress"
                    value={formData.businessAddress}
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
                      Same as billing address
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Numbers */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Mobile Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobilePhone"
                      value={formData.mobilePhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(808) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Work Phone
                    </label>
                    <input
                      type="tel"
                      name="workPhone"
                      value={formData.workPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(808) 123-4567"
                    />
                  </div>
                </div>

                {/* Business Website */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Business Website
                  </label>
                  <input
                    type="url"
                    name="businessWebsite"
                    value={formData.businessWebsite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://www.example.com"
                  />
                </div>

                {/* Sponsored By */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Sponsored by
                  </label>
                  <input
                    type="text"
                    name="sponsoredBy"
                    value={formData.sponsoredBy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Sponsor Name"
                  />
                </div>

                {/* Volunteer Help */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    I would like to volunteer and help with
                  </label>
                  <textarea
                    name="volunteerHelp"
                    value={formData.volunteerHelp}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how you'd like to volunteer..."
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
                    Proceed to Payment
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

            <div className="mt-6 text-center">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                <ArrowLeft size={16} />
                Return to Membership Options
              </Link>
            </div>

            <p className="text-center text-foreground/60 text-sm mt-6">
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
        </div>
      </section>

      <Footer />
    </main>
  )
}

