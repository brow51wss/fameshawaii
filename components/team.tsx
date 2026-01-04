"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote } from "lucide-react"

export default function Team() {
  const { ref, isVisible } = useScrollAnimation()

  const team = [
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
    <section id="team" className="py-16 md:py-24 bg-background" ref={ref as any}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Our Leadership & Supporters
        </h2>
        <p
          className={`text-center text-foreground/70 mb-16 text-lg transition-all duration-700 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          Hear from the dedicated professionals and community leaders who support our mission
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-foreground/80 text-base mb-6 leading-relaxed italic">"{member.testimonial}"</p>
              <div className="pt-4 border-t border-foreground/10">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-foreground/10">
          <h3
            className={`text-3xl font-bold text-foreground mb-2 text-center transition-all duration-700 delay-300 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            2025-2026 FAMES Officers & Directors
          </h3>
          <p
            className={`text-center text-foreground/70 mb-8 transition-all duration-700 delay-400 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Meet our dedicated leadership team
          </p>

          {/* Officers Section */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-primary mb-4 text-center">Officers</h4>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max px-4">
                {officers.map((officer, idx) => (
                  <div
                    key={idx}
                    className={`flex-shrink-0 w-40 text-center transition-all duration-700 hover:scale-105 ${isVisible ? "scale-in" : "opacity-0"}`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className="w-40 h-40 rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20 overflow-hidden"
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
          </div>

          {/* Directors Section */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-primary mb-4 text-center">Directors</h4>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max px-4">
                {directors.map((director, idx) => (
                  <div
                    key={idx}
                    className={`flex-shrink-0 w-40 text-center transition-all duration-700 hover:scale-105 ${isVisible ? "scale-in" : "opacity-0"}`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {director.image ? (
                      <div
                        className="w-40 h-40 rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20 overflow-hidden"
                        style={{
                          backgroundImage: `url('${director.image}')`,
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
                    <h5 className="font-bold text-foreground text-sm">{director.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Executive Advisors Section */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 text-center">Executive Advisors</h4>
            <div className="flex justify-center gap-4 flex-wrap px-4">
              {advisors.map((advisor, idx) => (
                <div
                  key={idx}
                  className={`w-40 text-center transition-all duration-700 hover:scale-105 ${isVisible ? "scale-in" : "opacity-0"}`}
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
      </div>
    </section>
  )
}
