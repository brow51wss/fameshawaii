import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQ() {
  const faqs = [
    {
      question: "What is FAMES Hawaii?",
      answer:
        "FAMES Hawaii (Mentoring, Educating and Scholarship) is a 501(c)(3) non-profit organization dedicated to empowering students through mentorship, education, and scholarship opportunities throughout Hawaii.",
    },
    {
      question: "Who can become a member?",
      answer:
        "Membership is open to anyone who supports our mission of empowering youth through education and mentorship. We welcome professionals, educators, community leaders, and anyone passionate about making a positive impact.",
    },
    {
      question: "How do I apply for a scholarship?",
      answer:
        "Scholarship applications are typically available in early spring each year. Visit our website or contact us directly for application deadlines, eligibility requirements, and submission guidelines. Students must demonstrate academic achievement and community involvement.",
    },
    {
      question: "What types of events does FAMES host?",
      answer:
        "We host various events throughout the year including our annual scholarship gala, networking mixers, professional development workshops, mentorship programs, and community service activities. Check our upcoming events section for the latest information.",
    },
    {
      question: "How can I support FAMES Hawaii?",
      answer:
        "There are many ways to support our mission: become a member, make a donation, sponsor our events, volunteer your time, or partner with us as an organization. Every contribution helps us provide more opportunities for students.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes! FAMES Hawaii is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the fullest extent allowed by law. We will provide a receipt for your records.",
    },
    {
      question: "How do I become a sponsor?",
      answer:
        "We offer various sponsorship levels (Platinum, Gold, Silver, Bronze, and In-Kind) to fit different budgets and goals. Contact us at info@fameshi.org or call (808) 781-5905 to discuss sponsorship opportunities and benefits.",
    },
    {
      question: "Where are you located?",
      answer:
        "FAMES Hawaii serves the entire state of Hawaii with members and scholarship recipients across all islands. Our events are primarily held on Oahu, but we welcome participation from all islands.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle size={40} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions about FAMES Hawaii? Find answers to common inquiries below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-secondary/30 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-3">Still have questions?</h3>
          <p className="text-foreground/70 mb-4">We're here to help! Reach out to us for more information.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </Link>
            <a
              href="tel:8087815905"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Call (808) 781-5905
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
