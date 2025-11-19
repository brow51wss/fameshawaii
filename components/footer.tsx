import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/fames-logo.png"
                alt="FAMES Hawaii Logo"
                width={120}
                height={120}
                className="h-12 w-auto"
              />
            </div>
            {/* </CHANGE> */}
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering young entrepreneurs through mentorship, networking, and opportunity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Honolulu, Hawaii</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (808) 555-FAMES
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@fameshawaii.org"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@fameshawaii.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">© 2025 FAMES Hawaii. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
