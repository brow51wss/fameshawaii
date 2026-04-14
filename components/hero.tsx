"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroImages = [
  {
    url: "/images/events/connect-learn-lead/desktop-BG.webp",
    link: "/events/connect-learn-lead",
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
          
          return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
                backgroundImage: `url('${imageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
              {/* Dark overlay for all slides */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#eb6e2d]/30" />
          </div>
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
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        {isEventSlide ? (
          // Event-specific content
          <>
            {/* Mobile only: Image behind + dark overlay - full width */}
            <div className="absolute inset-0 md:hidden flex flex-col justify-end items-center">
              <img 
                src="/images/events/connect-learn-lead/Sheldon-Summer.webp" 
                alt="Speakers: Sheldon Dunn & Summer Lee"
                className="w-full max-w-none"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 md:hidden z-[1]"></div>
            
            {/* Content container */}
            <div className="w-full h-full max-w-[1000px] mx-auto relative z-10 md:grid md:grid-cols-2">
              {/* Content column */}
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-[400px] px-4">
                  <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 fade-in-up shadow-lg">
                    UPCOMING EVENT
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 fade-in-up delay-100">
                    Connect. Learn. <span className="text-[#eb6e2d]">Lead.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-2 fade-in-up delay-200">
                    Networking & Guest Speakers featuring Shidler College of Business Faculty
                  </p>
                  <p className="text-base md:text-lg text-white/80 mb-8 fade-in-up delay-300">
                    Tuesday, May 12th, 2026<br />6:00 PM - 8:30 PM<br />Dave & Buster's - The Garage Room
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-400">
                    <Link
                      href="/events/connect-learn-lead"
                      className="px-8 py-3 gradient-primary text-white hover:opacity-90 hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              {/* Image column - only visible on tablet+ */}
              <div className="hidden md:flex flex-col justify-end items-center overflow-visible">
                <img 
                  src="/images/events/connect-learn-lead/Sheldon-Summer.webp" 
                  alt="Speakers: Sheldon Dunn & Summer Lee"
                  className="w-[150%] max-w-none"
                />
              </div>
            </div>
          </>
        ) : (
          // Default hero content
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance fade-in-up">
              Empower. Lead. Inspire.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 text-balance fade-in-up delay-100">
              FAMES Hawaii is building the next generation of entrepreneurial leaders through mentoring, networking, and
              opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-200">
              <button
                onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 gradient-primary text-white hover:opacity-90 hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Become a Member
              </button>
              <button
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-accent hover:scale-105 rounded-lg font-semibold transition-all duration-300"
              >
                Donate
              </button>
              <button
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-accent hover:scale-105 rounded-lg font-semibold transition-all duration-300"
              >
                Our Next Event
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
