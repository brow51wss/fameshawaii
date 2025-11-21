"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation()

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is FAMES Hawaii?",
      answer:
        "FAMES Hawaii (Filipino-American Mentoring, Educating and Scholarship) is a 501(c)(3) non-profit organization dedicated to empowering Filipino-American students through mentorship, education, and scholarship opportunities throughout Hawaii.",
    },
    {
      question: "Who can become a member?",
      answer:
        "Membership is open to anyone who supports our mission of empowering Filipino-American youth through education and mentorship. We welcome professionals, educators, community leaders, and anyone passionate about making a positive impact.",
    },
    {
      question: "How do I apply for a scholarship?",
      answer:
        "Scholarship applications are typically available in early spring each year. Visit our website or contact us directly for application deadlines, eligibility requirements, and submission guidelines. Students must demonstrate academic achievement, community involvement, and Filipino heritage.",
    },
    {
      question: "What types of events does FAMES host?",
      answer:
        "We host various events throughout the year including our annual scholarship gala, networking mixers, professional development workshops, mentorship programs, and community service activities. Check our upcoming events section for the latest information.",
    },
    {
      question: "How can I support FAMES Hawaii?",
      answer:
        "There are many ways to support our mission: become a member, make a donation, sponsor our events, volunteer your time, or partner with us as an organization. Every contribution helps us provide more opportunities for Filipino-American students.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes! FAMES Hawaii is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the fullest extent allowed by law. We will provide a receipt for your records.",
    },
    {
      question: "How do I become a sponsor?",
      answer:
        "We offer various sponsorship levels (Platinum, Gold, Silver, Bronze, and In-Kind) to fit different budgets and goals. Contact us at info@fameshawaii.org or call (808) 555-FAMES to discuss sponsorship opportunities and benefits.",
    },
    {
      question: "Where are you located?",
      answer:
        "FAMES Hawaii serves the entire state of Hawaii with members and scholarship recipients across all islands. Our events are primarily held on Oahu, but we welcome participation from all islands.",
    },
    {
      question: "Can I upgrade my membership later?",
      answer:
        "Absolutely! You can upgrade your membership at any time. We'll prorate the difference and you'll immediately get access to all the benefits of your new tier.",
    },
    {
      question: "Is there a commitment period?",
      answer:
        "Premium and Founder Circle memberships are annual subscriptions. Standard membership is free and has no time commitment. You can cancel paid memberships with 30 days notice.",
    },
    {
      question: "Do I need to be Filipino-American to join?",
      answer:
        "While our mission focuses on supporting the Filipino-American community, we welcome all entrepreneurs who support our mission and want to be part of building an inclusive business community in Hawaii.",
    },
    {
      question: "How do I become a mentor?",
      answer:
        "We're always looking for experienced professionals to mentor our members. If you're interested in becoming a mentor, please fill out our mentor application form or contact us directly. Mentors should have at least 3 years of professional experience in their field.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            <div
              className={`flex justify-center mb-6 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              <HelpCircle size={64} className="text-primary" />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Find answers to common questions about FAMES Hawaii
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Have a question that's not answered here? Feel free to reach out to us directly and we'll be happy to
              help!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border border-border rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg ${faqVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-base text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className={`mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 border border-primary/10 transition-all duration-700 delay-400 ${faqVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-foreground/70 mb-6 text-lg max-w-2xl mx-auto">
              We're here to help! Reach out to us for more information about our programs, membership, scholarships, or
              anything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:8085555263"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call (808) 555-FAMES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Explore More
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/about"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">About Us</h3>
              <p className="text-foreground/70 leading-relaxed">
                Learn more about our mission, values, and the impact we're making in the Filipino-American community.
              </p>
            </a>

            <a
              href="/join"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">Become a Member</h3>
              <p className="text-foreground/70 leading-relaxed">
                Join our community and get access to exclusive benefits, mentorship, and networking opportunities.
              </p>
            </a>

            <a
              href="/contact"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">Contact Us</h3>
              <p className="text-foreground/70 leading-relaxed">
                Have specific questions or want to discuss partnership opportunities? Get in touch with our team.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

