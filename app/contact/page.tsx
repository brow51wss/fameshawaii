"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.')
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        alert('Sorry, there was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              We'd love to hear from you
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Whether you have questions about our programs, want to get involved, or just want to say hello, reach out
              to us. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef as any}>
              <div
                className={`transition-all duration-700 ${formVisible ? "fade-in-left" : "opacity-0"}`}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-foreground/70 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(808) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Information</option>
                      <option value="scholarship">Scholarship Application</option>
                      <option value="sponsorship">Sponsorship Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef as any}>
              <div
                className={`transition-all duration-700 ${infoVisible ? "fade-in-right" : "opacity-0"}`}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-foreground/70 mb-8">
                  Reach out to us through any of these channels. We're always happy to connect!
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Location</h3>
                      <p className="text-foreground/70">
                        Honolulu, Hawaii
                        <br />
                        Serving all Hawaiian Islands
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:8085555263"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        (808) 555-FAMES
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">Mon-Fri, 9AM-5PM HST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:info@fameshawaii.org,joan@fameshawaii.org,joni@fameshawaii.org"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        info@fameshawaii.org
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Social Media</h3>
                      <p className="text-foreground/70 mb-2">Connect with us on social media</p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="text-foreground/60 hover:text-primary transition-colors"
                        >
                          Facebook
                        </a>
                        <span className="text-foreground/30">•</span>
                        <a
                          href="#"
                          className="text-foreground/60 hover:text-primary transition-colors"
                        >
                          Instagram
                        </a>
                        <span className="text-foreground/30">•</span>
                        <a
                          href="#"
                          className="text-foreground/60 hover:text-primary transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-bold text-foreground mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join our community and be part of something bigger. Together, we're building a stronger future for
            Filipino-American entrepreneurs in Hawaii.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="/donate"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

