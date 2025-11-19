"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tPHoZHu3iiIAI1MFwloWH-ULGUZlPkcQQ1Vdks9BF6Y8cwZw35Wa.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/fuddLIfStTMTgPmDiij09-ma1GOl8drulaWf1Wjyb3eKKa3fJhNz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2xMe2Ul1qd1dxAFn50zFq-DnnvkS0hVC4G4ReRC3dpnl8P03weor.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/lPv9jhwkFxtk5y6JnAvUE-DRQMzm50S6HBjR73Ku2DUllh8WwWY4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/1EgDlCm1YF5IKoruw4M3R-b2rjAPmtl845k4ZnWT2F1bL5Ir6pnu.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tPHoZHu3iiIAI1MFwloWH-ULGUZlPkcQQ1Vdks9BF6Y8cwZw35Wa.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/fuddLIfStTMTgPmDiij09-ma1GOl8drulaWf1Wjyb3eKKa3fJhNz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2xMe2Ul1qd1dxAFn50zFq-DnnvkS0hVC4G4ReRC3dpnl8P03weor.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/lPv9jhwkFxtk5y6JnAvUE-DRQMzm50S6HBjR73Ku2DUllh8WwWY4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/1EgDlCm1YF5IKoruw4M3R-b2rjAPmtl845k4ZnWT2F1bL5Ir6pnu.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pnFhDxR5wtpmGo5J4yFoL-gt9B2wvmSBdiHaP7ZX5b8w8qnvSlfe.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/m8Pp80HvVqfEJIs5YRTyF-OlckumnkqdNa8KfkS0onBPcKd78eiY.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/sWS9mFlYoANX0Jv0lyAa2-zqEljDsylxIiNSkt7oPQ7FgvI5SFQK.png",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % heroImages.length)
  const prev = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-foreground">
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#eb6e2d]/30" />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-primary hover:scale-110 backdrop-blur-sm rounded-full p-2 transition-all duration-300 md:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-primary hover:scale-110 backdrop-blur-sm rounded-full p-2 transition-all duration-300 md:right-8"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${idx === current ? "gradient-primary w-8" : "bg-white/50 w-2"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance fade-in-up">
          Empower. Lead. Inspire.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 text-balance fade-in-up delay-100">
          FAMES Hawaii is building the next generation of entrepreneurial leaders through mentoring, networking, and
          opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200">
          <a
            href="#membership"
            className="px-8 py-3 gradient-primary text-white hover:opacity-90 hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Become a Member
          </a>
          <a
            href="#donate"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-accent hover:scale-105 rounded-lg font-semibold transition-all duration-300"
          >
            Donate
          </a>
          <a
            href="#events"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-accent hover:scale-105 rounded-lg font-semibold transition-all duration-300"
          >
            Our Next Event
          </a>
        </div>
      </div>
    </section>
  )
}
