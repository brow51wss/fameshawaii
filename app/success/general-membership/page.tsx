"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MembershipSuccessPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const [emailSent, setEmailSent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const sendMembershipEmail = async () => {
      // Retrieve form data from localStorage
      const savedData = localStorage.getItem('membershipApplicationData')
      
      if (savedData) {
        try {
          const formData = JSON.parse(savedData)
          
          // Send email with form data
          const response = await fetch('/api/membership-application', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })

          if (response.ok) {
            setEmailSent(true)
            // Clear the saved form data after successful email
            localStorage.removeItem('membershipApplicationData')
          }
        } catch (error) {
          console.error('Error sending membership email:', error)
        }
      }
      
      setIsLoading(false)
    }

    sendMembershipEmail()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden min-h-[80vh] flex items-center"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
          >
            <CheckCircle size={80} className="text-green-500" />
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Welcome to <span className="gradient-text">FAMES Hawaii!</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-foreground/70 mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Thank you for becoming a member of our community
          </p>

          <div
            className={`bg-white rounded-xl p-8 shadow-lg border-2 border-green-200 mb-8 transition-all duration-700 delay-300 ${heroVisible ? "scale-in" : "opacity-0"}`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              🎉 Payment Successful!
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your membership payment has been processed successfully. You're now part of Hawaii's most dynamic entrepreneurial community!
            </p>
            
            {isLoading && (
              <p className="text-sm text-foreground/60">
                Sending confirmation email...
              </p>
            )}
            
            {!isLoading && emailSent && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  ✓ Confirmation email sent to our team
                </p>
                <p className="text-sm text-green-700 mt-2">
                  We'll be in touch shortly with your membership details and next steps.
                </p>
              </div>
            )}
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">What's Next?</h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">📧</div>
                <h4 className="font-bold text-foreground mb-2">Check Your Email</h4>
                <p className="text-sm text-foreground/70">
                  You'll receive a welcome email with important information about your membership.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-bold text-foreground mb-2">Upcoming Events</h4>
                <p className="text-sm text-foreground/70">
                  Browse our events calendar and register for your first networking event.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-foreground mb-2">Connect</h4>
                <p className="text-sm text-foreground/70">
                  Join our community and start connecting with fellow entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white hover:opacity-90 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Upcoming Events
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300"
            >
              Return to Homepage
            </Link>
          </div>

          <p className="text-sm text-foreground/60 mt-8">
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
      </section>

      <Footer />
    </main>
  )
}

