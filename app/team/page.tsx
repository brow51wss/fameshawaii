"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote, Shield, Users, Award } from "lucide-react"

export default function TeamPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation()
  const { ref: officersRef, isVisible: officersVisible } = useScrollAnimation()
  const { ref: directorsRef, isVisible: directorsVisible } = useScrollAnimation()
  const { ref: advisorsRef, isVisible: advisorsVisible } = useScrollAnimation()

  const testimonials = [
    {
      name: "Warren D. Evans",
      role: "Argosy Education Representative",
      image: "https://www.fameshawaii.org/wp-content/uploads/2023/12/image001.webp",
      testimonial:
        "FAMES Hawaii continues to have a powerful impact in the community by making a difference in the lives of our youth and providing opportunities for business networking.",
    },
    {
      name: "Jan Kaeo",
      role: "President, Dale Carnegie Training Hawaii & Guam",
      image: "https://www.fameshawaii.org/wp-content/uploads/2023/12/jan-keos.webp",
      testimonial: "Dale Carnegie of Hawaii and Guam is proud to show our support through FAMES Hawaii.",
    },
    {
      name: "Peter Nicado",
      role: "Business Growth Strategist & International Bestselling Author",
      image: "https://www.fameshawaii.org/wp-content/uploads/2023/12/Peter-Nicado.webp",
      testimonial:
        "This non-profit organization is headed by an awesome wonder woman who has selflessly given so much of herself for the success of others.",
    },
  ]

  const officers = [
    {
      name: "Joni Redick-Yundt",
      title: "Founder/CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pullcyeMDr1mMXrGdp5lv-PIFQHE2Bi0nL5NfLPjaPTsJznS7pvT.png",
    },
    {
      name: "Margie Jose",
      title: "President",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/sOipj5rJneG9NSnOI59rU-Od9YhCXkdaXsDRvlWwSUdu09Kd2Pee.png",
    },
    {
      name: "Janet Abaya",
      title: "Vice President",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/a32clU1WKq3CvnLokGUtP-1IVBDisujTPkaWhrF5s7GVIPQb2tXF.png",
    },
    {
      name: "Donalyn Baldeviso",
      title: "Secretary",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YO9MFa4mJbuAVZpkiyCyU-UBpiVscnf7qw0L1i5qn6hrUHHvyuzJ.png",
    },
    {
      name: "Elena Santos",
      title: "Assistant Secretary",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/g9komHN8H5mEtee4UQRZe-lsSBR7C1WvN7hax1wEIvyFCk050P1C.png",
    },
    {
      name: "Joan Shodai",
      title: "Treasurer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/eMNFFVDOOYUANoiVc08ml-Z9kCBUI4P2NzEzqvCpOIYvUwYXp2Cl.png",
    },
    {
      name: "Bryan Andaya, ESQ.",
      title: "Legal Counsel",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Y9QDKQ1ab8qjqNXTbkCMQ-PQIkQeZmEW5rxQKyci7tL8cW4k18aj.png",
    },
  ]

  const directors = [
    {
      name: "Devyne Brooks",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/gKabJxIYUbNXo1iCVOg0P-vZAIxIU8Jd0xRf26TtOCRkOEIf8y16.png",
    },
    {
      name: "Lorly DeLeon",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/ndVqLJ0TJj0WErJUvA39d-7ppas409Gu2v8TAjaDW7qw9jvP4gRM.png",
    },
    {
      name: "Dunavan Hahn",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/dtnnd0vAEgfdBMfDzs1aS-TEhywRucd8uCZmKeYk243tyW1cqk3r.png",
    },
    {
      name: "Gina Klootwyk",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/s08bz6CGzvdhVhra5F9Ci-OJXnHAhioToO6o2G4WLloOwsFgGEV5.png",
    },
    {
      name: "Lyn Lejano",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/GfmSDbLxdPR8Z41gPisMM-lf7UsxhfVSBwmF3TmgSGWI5MvaImc9.png",
    },
    {
      name: "Richard Martin",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2CnTaLa27g45bfJcPs1pV-4qtXCM5ZqmlCBBrIZUZKlEUxeI0rSN.png",
    },
    {
      name: "Gina Ross",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/HoChHEbgltkByo5UUCD5Z-r538i48GAgcEEwlM4rZhVypoOmpDFc.png",
    },
    {
      name: "Donna Slagill",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/xOYKCenZtE5Xof189yRRU-dV0QmPlrhkDnzS0chUMrmoGHYMzqXe.png",
    },
    {
      name: "Cynthia Viloria",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rKqQpLEyruTORTEpajodc-SiiMJUPn4VSRtOuFog6BR61KWam0LN.png",
    },
    {
      name: "Gabriella Wilson-Rytting",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Sq7WquA3bo9vCc5GAxq3i-hG0fe7zDq3ITJH4u6QizAaZfpu3PTg.png",
    },
    {
      name: "Benjamin Tabios",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/eqvbnT9WAhc5GXIwmvcrG-HUILF5I4VnCww6GULAOHMQdzBfCUwo.png",
    },
    {
      name: "Michele Garcia",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/VhkA2hsYvO5SZZRsv9hzC-WGEnjy6ZAjNrlZ3xC8mn4rFKFMusYB.jpg",
    },
  ]

  const advisors = [
    {
      name: "Tiffany Browne",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/zuKIQ11qgQ2KvL0Wq5e45-gfKE8pKIMYHqAzfCHKx9WdcuSBA0Ln.png",
    },
    {
      name: "Rochelle Martinho",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/XtJDgp1qJ1SqFxb99JQ00-6ZtwZpD1trX3ubNIN8PftQeIfHzGzm.png",
    },
    {
      name: "Sarah Hosaka",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/DHXWtIgALwkCU24iIS9Ak-ZO66Rn7zlaXaO3MAIVOmFiQMFohGvG.png",
    },
  ]

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
              Our <span className="gradient-text">Leadership Team</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Meet the passionate leaders driving FAMES Hawaii's mission forward
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Our dedicated team of officers, directors, and executive advisors brings decades of combined experience in
              business, education, and community leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Testimonials */}
      <section ref={testimonialsRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${testimonialsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Community Leaders & Supporters
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg transition-all duration-700 delay-100 ${testimonialsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Hear from the professionals and business leaders who champion our cause
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((member, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 ${testimonialsVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-foreground/80 text-base mb-6 leading-relaxed italic">
                  &quot;{member.testimonial}&quot;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-primary/20"
                    style={{
                      backgroundImage: `url('${member.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025-2026 Leadership Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">2025-2026 Leadership</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Meet our dedicated officers, directors, and executive advisors guiding FAMES Hawaii
            </p>
          </div>

          {/* Officers Section */}
          <div ref={officersRef as any} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h3
                className={`text-3xl font-bold text-primary transition-all duration-700 ${officersVisible ? "fade-in-up" : "opacity-0"}`}
              >
                Officers
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {officers.map((officer, idx) => (
                <div
                  key={idx}
                  className={`text-center transition-all duration-700 hover:scale-105 ${officersVisible ? "scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className="w-full aspect-square rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20 overflow-hidden"
                    style={{
                      backgroundImage: `url('${officer.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <h5 className="font-bold text-foreground text-sm mb-1">{officer.name}</h5>
                  <p className="text-xs text-primary font-medium">{officer.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Directors Section */}
          <div ref={directorsRef as any} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h3
                className={`text-3xl font-bold text-primary transition-all duration-700 ${directorsVisible ? "fade-in-up" : "opacity-0"}`}
              >
                Directors
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {directors.map((director, idx) => (
                <div
                  key={idx}
                  className={`text-center transition-all duration-700 hover:scale-105 ${directorsVisible ? "scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {director.image ? (
                    <div
                      className="w-full aspect-square rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20 overflow-hidden"
                      style={{
                        backgroundImage: `url('${director.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  ) : (
                    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-primary/20">
                      <span className="text-4xl text-primary/30">👤</span>
                    </div>
                  )}
                  <h5 className="font-bold text-foreground text-sm">{director.name}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Advisors Section */}
          <div ref={advisorsRef as any}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h3
                className={`text-3xl font-bold text-primary transition-all duration-700 ${advisorsVisible ? "fade-in-up" : "opacity-0"}`}
              >
                Executive Advisors
              </h3>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {advisors.map((advisor, idx) => (
                <div
                  key={idx}
                  className={`w-40 text-center transition-all duration-700 hover:scale-105 ${advisorsVisible ? "scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {advisor.image ? (
                    <div
                      className="w-40 h-40 rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20 overflow-hidden"
                      style={{
                        backgroundImage: `url('${advisor.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-primary/20">
                      <span className="text-4xl text-primary/30">👤</span>
                    </div>
                  )}
                  <h5 className="font-bold text-foreground text-sm">{advisor.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Become part of our community and help us create opportunities for the next generation of Filipino-American
            leaders and entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#membership"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="/#contact"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

