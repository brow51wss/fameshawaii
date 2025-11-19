"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

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
              <Shield size={64} className="text-primary" />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-4 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Your privacy is important to us
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section ref={contentRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`prose prose-lg max-w-none transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-border space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  FAMES Hawaii ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or
                  interact with our services. Please read this privacy policy carefully. If you do not agree with the
                  terms of this privacy policy, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the Site
                  includes:
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Personal Data</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Personally identifiable information, such as your name, shipping address, email address, and telephone
                  number, and demographic information, such as your age, gender, hometown, and interests, that you
                  voluntarily give to us when you register with the Site, make a donation, apply for membership or
                  scholarship, or when you choose to participate in various activities related to the Site.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Derivative Data</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Information our servers automatically collect when you access the Site, such as your IP address, your
                  browser type, your operating system, your access times, and the pages you have viewed directly before
                  and after accessing the Site.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Financial Data</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Financial information, such as data related to your payment method (e.g., valid credit card number,
                  card brand, expiration date) that we may collect when you make a donation or payment. We store only
                  very limited, if any, financial information that we collect. Otherwise, all financial information is
                  stored by our payment processor, and you are encouraged to review their privacy policy and contact
                  them directly for responses to your questions.
                </p>
              </div>

              {/* Use of Your Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Use of Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and
                  customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Process donations, membership applications, and scholarship applications</li>
                  <li>Create and manage your account</li>
                  <li>Email you regarding your account or order</li>
                  <li>Send you newsletters and updates about FAMES Hawaii programs and events</li>
                  <li>Fulfill and manage donations, payments, and other transactions</li>
                  <li>Generate a personal profile about you to make future visits more personalized</li>
                  <li>Increase the efficiency and operation of the Site</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                  <li>Notify you of updates to the Site and our services</li>
                  <li>Request feedback and contact you about your use of the Site</li>
                  <li>Resolve disputes and troubleshoot problems</li>
                  <li>Respond to inquiries and offer customer service</li>
                </ul>
              </div>

              {/* Disclosure of Your Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">By Law or to Protect Rights</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If we believe the release of information about you is necessary to respond to legal process, to
                  investigate or remedy potential violations of our policies, or to protect the rights, property, and
                  safety of others, we may share your information as permitted or required by any applicable law, rule,
                  or regulation.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Third-Party Service Providers</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may share your information with third parties that perform services for us or on our behalf,
                  including payment processing, data analysis, email delivery, hosting services, customer service, and
                  marketing assistance.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Business Transfers</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We may share or transfer your information in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a portion of our organization to another
                  company.
                </p>
              </div>

              {/* Security of Your Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Security of Your Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              {/* Policy for Children */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Policy for Children</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We do not knowingly solicit information from or market to children under the age of 13. If we learn
                  that we have collected personal information from a child under age 13 without verification of parental
                  consent, we will delete that information as quickly as possible. If you become aware of any data we
                  have collected from children under age 13, please contact us using the contact information provided
                  below.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data</li>
                  <li>
                    The right to restrict processing – You have the right to request that we restrict the processing of
                    your personal data
                  </li>
                  <li>The right to data portability – You have the right to request transfer of your data</li>
                  <li>The right to object – You have the right to object to our processing of your personal data</li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help
                  customize the Site and improve your experience. When you access the Site, your personal information is
                  not collected through the use of tracking technology. Most browsers are set to accept cookies by
                  default. You can remove or reject cookies, but be aware that such action could affect the availability
                  and functionality of the Site.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
                  practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this
                  Privacy Policy.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p>
                    <strong>FAMES Hawaii</strong>
                  </p>
                  <p>Email: info@fameshawaii.org</p>
                  <p>Phone: (808) 555-FAMES</p>
                  <p>Location: Honolulu, Hawaii</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

