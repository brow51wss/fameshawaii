"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroImages = [
  {
    url: "/images/build-connection-banner-bg.webp",
    link: "/events/build-connections-that-move-you-forward",
    isEvent: true,
  },
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tPHoZHu3iiIAI1MFwloWH-ULGUZlPkcQQ1Vdks9BF6Y8cwZw35Wa.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/fuddLIfStTMTgPmDiij09-ma1GOl8drulaWf1Wjyb3eKKa3fJhNz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2xMe2Ul1qd1dxAFn50zFq-DnnvkS0hVC4G4ReRC3dpnl8P03weor.png",
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

  const getImageUrl = (img: string | { url: string; link: string; isEvent: boolean }) => {
    return typeof img === "string" ? img : img.url
  }

  const currentImage = heroImages[current]
  const isEventSlide = typeof currentImage === "object" && currentImage.isEvent

  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-foreground">
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((img, idx) => {
          const imageUrl = getImageUrl(img)
          const isClickable = typeof img === "object" && img.isEvent
          const slideContent = (
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              } ${isClickable ? "cursor-pointer" : ""}`}
              style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Only show dark overlay for non-event slides */}
              {!isClickable && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#eb6e2d]/30" />
              )}
            </div>
          )

          return isClickable && typeof img === "object" ? (
            <Link key={idx} href={img.link}>
              {slideContent}
            </Link>
          ) : (
            <div key={idx}>{slideContent}</div>
          )
        })}

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
        {isEventSlide ? (
          // Event-specific content
          <>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 fade-in-up shadow-lg">
              UPCOMING EVENT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in-up delay-100">
              Build Connections That<br />
              Move You Forward
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-2 text-balance fade-in-up delay-200">
              An inspiring evening of networking, food, & expert-led conversation
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 fade-in-up delay-300">
              Tuesday, January 20th, 2026<br />6:00 PM - 8:30 PM<br />Dave & Buster's
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-400">
              <Link
                href="/events/build-connections-that-move-you-forward"
                className="px-8 py-3 gradient-primary text-white hover:opacity-90 hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More & Register
              </Link>
            </div>
          </>
        ) : (
          // Default hero content
          <>
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
          </>
        )}
      </div>
    </section>
  )
}
