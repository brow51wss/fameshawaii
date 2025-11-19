"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Mission() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden" ref={ref as any}>
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`w-full h-96 rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 transition-all duration-700 ${
              isVisible ? "scale-in" : "opacity-0"
            }`}
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pnFhDxR5wtpmGo5J4yFoL-gt9B2wvmSBdiHaP7ZX5b8w8qnvSlfe.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className={`transition-all duration-700 ${isVisible ? "fade-in-right" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              FAMES Hawaii is a 501(c)3 non-profit organization committed to Mentoring, Educating, Motivating, and
              Leadership Development for entrepreneurs and business owners in Honolulu.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Through business networking, we share our skills and support with each other regardless of ethnicity,
              financial means, or economic status. When any one of us succeeds, we all succeed.
            </p>
            <div className="flex flex-col gap-3">
              <div className={`flex gap-3 transition-all duration-500 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Expert Mentorship Programs</span>
              </div>
              <div
                className={`flex gap-3 transition-all duration-500 delay-100 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              >
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Business Networking Events</span>
              </div>
              <div
                className={`flex gap-3 transition-all duration-500 delay-200 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              >
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Scholarship & Funding Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
