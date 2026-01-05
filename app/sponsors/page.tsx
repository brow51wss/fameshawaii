"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Sponsor {
  name: string
  logo?: string
}

export default function SponsorsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: sponsorsRef, isVisible: sponsorsVisible } = useScrollAnimation()

  const [activeTab, setActiveTab] = useState<"platinum" | "gold" | "silver" | "bronze" | "inkind">("platinum")
  const [currentIndex, setCurrentIndex] = useState(0)

  const platinumSponsors: Sponsor[] = [
    {
      name: "HMAA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/jqUT4WbRP2W5XUBUkGWhb-Vknc1cBHATCovJJtwyw949c389FiYN.png",
    },
    {
      name: "First Hawaiian Bank",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0C62tXnK5fd4Yhh8gy26g-EY01slBDyMvwOmaDAIEd6ktDvgFiAy.png",
    },
  ]

  const goldSponsors: Sponsor[] = [
    {
      name: "HiGroup",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/ttBdyXzrX833VPwJqLN22-EbifRfwHFx7C6I26ufU2129zwNyIbG.png",
    },
    {
      name: "Westpac Wealth Partners",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Pu7ZC8gJu1v7pGkr5VUq8-d59jvwdwEpFiKuVTAlYbFNBIr7ac2d.png",
    },
    {
      name: "Rule Your Kingdom",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/L3UhMtCGaXYnHhcsrEtqQ-yU9ypnoZJ0m2hszhTd4Wu8Es04aFOA.png",
    },
  ]

  const silverSponsors: Sponsor[] = [
    {
      name: "The Joni Collection",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/FchGkwVyT5JnMbttB9ZkE-BzZeh5Z3wgRDruCpf5C851N6yJRLNB.png",
    },
    {
      name: "Pural Water Specialty Co.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/vhEWm4wWlqeZ2T8eSgnBa-4mtquEOWBcAQQQV153JAUUkzbIkPQ3.png",
    },
    {
      name: "Hair Creations by Glorey",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Y21m1HQ9h9jZfBVkKdzU9-yC4HrScz5wqIq0Weui1hL4zHNcQ0aG.png",
    },
    {
      name: "Nordic PCL Construction",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Dqi0ykui5Zyu2dJQWz82T-v52jUaxKsddv87YF0aABwpTiKf9K8E.png",
    },
    {
      name: "Finance Insurance",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/6VKeHymmwKXzjJPoJfpK7-eGla8vYgaTtpZ1cynyCWh14gh6AsVd.png",
    },
    {
      name: "Mercedes-Benz of Honolulu",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WQE4kpqK4kFFkUQy4bgZc-aMSwzMO1DY9QqbmjoVx4RyM3CkIu9c.png",
    },
    {
      name: "Margie Jose & Associates",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/ASPzMtbdBdhbIumitEdcC-6i1DmrolzrvGx7KeTwj4s6AswyWulh.png",
    },
    {
      name: "Nightingale",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0toLUUsNzGX2UOM1KxglZ-eG7BZ1gs2gEth9UEnAj1ADwk5QZwIv.png",
    },
  ]

  const bronzeSponsors: Sponsor[] = [
    {
      name: "Photo Op Hawaii",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/9eFJvONF65y7UAyzSLzkB-RmrIrE1JL7RcHZapsdiaQXSaF4Sa9n.png",
    },
    {
      name: "AGARA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/DVb699BNjjfLI9jfAXifn-ZUchwiVv5B1y7cRGAYK18ABdKuONFa.png",
    },
    {
      name: "Janet & Aaron Abaya",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tA7IjI4pQ3DQoAP67Fvcw-4LSjfEuw9QEEGWNFYaglVwtvofMPKI.png",
    },
    {
      name: "Guieb Café",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/luHe9FC6lUzvFCVedo5io-jFIB2O9uU5BP2r2fTIJ6yqXRKO54Xd.png",
    },
    {
      name: "Kloe & Lia",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/uUSHWbdYdU11hkgx5BuQQ-vvNF1SHuz4Dbo0XsMLy3gEfFIi5U59.png",
    },
    {
      name: "Core Hire Desk",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/KCZH7n13JYOKICBZNy7jY-VMDqwsoRpooHfUye8kAemXa1hbTp8X.png",
    },
    {
      name: "Mr. and Mrs. Carlos Rol",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/RLry0W9ZkYWwN9fr8OYie-wRPXXw7RYIyuGb2v5vehw1kLDojCAP.png",
    },
  ]

  const inKindDonors: Sponsor[] = [
    {
      name: "6 Pillar Marketing",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kdCSAb9VlGpl2n4IXJNhd-KjEsGYmJMDsFybiQcfJVtcoV4yoLBH.png",
    },
    {
      name: "Melinda Casem",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/oho0X9qbRKUb1SAXwLy2R-LwicsZNc95DLlFuZYjRwIWcUFElR7p.png",
    },
    {
      name: "Honolulu Broadway Babies",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/SRB6iSAaTsK91HCtyCfIz-G85SDcZ9gL7bUDWAHzHOUYw3HRdNmK.png",
    },
    {
      name: "Ko'olau Distillery",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tSk6iBo1CH7dQF5dTIP61-2cRvsuFFUbbrky2e0NDQ6XwN0pEufl.png",
    },
    {
      name: "Watanabe Floral",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0kduLyUTkf8Z8xxAoeUKt-IwhvG8m3BrvOs2l3f3ds0Yom6cFGPS.png",
    },
    {
      name: "HI Paradise Rentals",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/k3cmhnFjid9ZhhyneJaS9-McAaB9F13r2Juwv1VTIRuIlSkdbPg4.png",
    },
    {
      name: "Island Sauce Band",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/savYPltuSNW6pxAuGGMje-SWqrmG3ap58uEblcG60rm939iEr4ZF.png",
    },
    {
      name: "Essence Marketing & Design Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/w4G05Noxse4DIW547C0Hn-uu02MGcrPGIddTmjUQmnATv2CTPnW8.png",
    },
  ]

  const getCurrentSponsors = () => {
    switch (activeTab) {
      case "platinum":
        return platinumSponsors
      case "gold":
        return goldSponsors
      case "silver":
        return silverSponsors
      case "bronze":
        return bronzeSponsors
      case "inkind":
        return inKindDonors
      default:
        return []
    }
  }

  const currentSponsors = getCurrentSponsors()
  const itemsPerPage = activeTab === "platinum" ? 2 : activeTab === "gold" ? 3 : 4
  const totalPages = Math.ceil(currentSponsors.length / itemsPerPage)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab)
    setCurrentIndex(0)
  }

  const visibleSponsors = currentSponsors.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage,
  )

  const getTierStyle = () => {
    switch (activeTab) {
      case "platinum":
        return {
          bg: "from-[#E5E4E2]/10 to-[#BCC6CC]/10",
          border: "border-[#E5E4E2]/30",
          size: "w-48 h-48 md:w-56 md:h-56",
          cardBorder: "border-2 border-[#E5E4E2] hover:border-[#BCC6CC]",
          shadow: "hover:shadow-xl hover:shadow-[#E5E4E2]/30",
          arrow: "bg-gradient-to-r from-[#E5E4E2] to-[#BCC6CC] text-[#323c82]",
        }
      case "gold":
        return {
          bg: "from-[#f89820]/5 to-[#eb6e2d]/5",
          border: "border-[#f89820]/20",
          size: "w-44 h-44 md:w-52 md:h-52",
          cardBorder: "border-2 border-[#f89820]/20 hover:border-[#f89820]",
          shadow: "hover:shadow-xl hover:shadow-[#f89820]/20",
          arrow: "bg-gradient-to-r from-[#f89820] to-[#eb6e2d] text-white",
        }
      case "silver":
        return {
          bg: "from-[#C0C0C0]/5 to-[#A8A9AD]/5",
          border: "border-[#C0C0C0]/30",
          size: "w-40 h-40 md:w-48 md:h-48",
          cardBorder: "border-2 border-[#C0C0C0]/30 hover:border-[#C0C0C0]",
          shadow: "hover:shadow-lg hover:shadow-[#C0C0C0]/20",
          arrow: "bg-gradient-to-r from-[#C0C0C0] to-[#A8A9AD] text-[#323c82]",
        }
      case "bronze":
        return {
          bg: "from-[#CD7F32]/5 to-[#B87333]/5",
          border: "border-[#CD7F32]/20",
          size: "w-40 h-40 md:w-48 md:h-48",
          cardBorder: "border-2 border-[#CD7F32]/20 hover:border-[#CD7F32]",
          shadow: "hover:shadow-lg hover:shadow-[#CD7F32]/20",
          arrow: "bg-gradient-to-r from-[#CD7F32] to-[#B87333] text-white",
        }
      case "inkind":
        return {
          bg: "from-[#323c82]/5 to-[#eb6e2d]/5",
          border: "border-[#323c82]/20",
          size: "w-36 h-36 md:w-44 md:h-44",
          cardBorder: "border-2 border-[#323c82]/20 hover:border-[#323c82]",
          shadow: "hover:shadow-md hover:shadow-[#323c82]/10",
          arrow: "bg-gradient-to-r from-[#323c82] to-[#eb6e2d] text-white",
        }
    }
  }

  const tierStyle = getTierStyle()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#323c82]/5 via-background to-[#f89820]/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f89820]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#323c82]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div
              className={`flex justify-center mb-6 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              <Award size={64} className="text-primary" />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Our Valued <span className="gradient-text">Sponsors</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Thank you to our generous sponsors and partners
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              These amazing organizations and individuals make our mission possible by supporting mentorship programs,
              scholarships, and community events that empower entrepreneurs, students, and leaders across Hawaii.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-16 md:py-24 gradient-primary-soft relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Choose the sponsorship level that aligns with your goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Diamond Sponsor */}
            <div className="bg-white rounded-lg p-8 border-2 border-border hover:border-[#b9f2ff] transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">DIAMOND SPONSOR</h3>
              <div className="text-3xl font-bold text-primary mb-4">$10,000</div>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                Our highest-tier partnership, designed for brands that want maximum visibility, influence, and alignment with Hawai'i's leading business and creative community. Diamond Sponsors receive year-round recognition, top-tier placement across FAMES events and marketing, and direct access to a curated network of founders, leaders, and decision-makers. This level is for brands ready to lead, connect, and make a lasting impact.
              </p>
              <a
                href="/sponsors/apply/diamond"
                className="block w-full gradient-primary text-white hover:opacity-90 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
              >
                Become a Diamond Sponsor
              </a>
            </div>

            {/* Platinum Sponsor */}
            <div className="bg-white rounded-lg p-8 border-2 border-border hover:border-[#E5E4E2] transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">PLATINUM SPONSOR</h3>
              <div className="text-3xl font-bold text-primary mb-4">$7,500</div>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                A high-impact partnership for brands looking to elevate their presence within the FAMES community. Platinum Sponsors receive prominent visibility across select events and marketing channels, along with meaningful opportunities to connect with local founders, creatives, and business leaders. Ideal for brands that want strong exposure, credibility, and consistent engagement throughout the year.
              </p>
              <a
                href="/sponsors/apply/platinum"
                className="block w-full gradient-primary text-white hover:opacity-90 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
              >
                Become a Platinum Sponsor
              </a>
            </div>

            {/* Gold Sponsor */}
            <div className="bg-white rounded-lg p-8 border-2 border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">GOLD SPONSOR</h3>
              <div className="text-3xl font-bold text-primary mb-4">$5,000</div>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                A strategic partnership for brands that want consistent visibility and meaningful connection within the FAMES network. Gold Sponsors are recognized across select events and platforms, gaining exposure to an engaged community of entrepreneurs, creatives, and professionals. This tier is perfect for businesses looking to support the local ecosystem while growing brand awareness and relationships throughout the year.
              </p>
              <a
                href="/sponsors/apply/gold"
                className="block w-full gradient-primary text-white hover:opacity-90 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
              >
                Become a Gold Sponsor
              </a>
            </div>

            {/* Silver Sponsor */}
            <div className="bg-white rounded-lg p-8 border-2 border-border hover:border-[#C0C0C0] transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">SILVER SPONSOR</h3>
              <div className="text-3xl font-bold text-primary mb-4">$2,500</div>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                An entry-level partnership for businesses that want to support and be seen within the FAMES community. Silver Sponsors receive recognition across select events and channels, offering a simple yet effective way to align with local founders, creatives, and professionals. Ideal for brands looking to show support, build awareness, and begin meaningful connections.
              </p>
              <a
                href="/sponsors/apply/silver"
                className="block w-full gradient-primary text-white hover:opacity-90 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
              >
                Become a Silver Sponsor
              </a>
            </div>

            {/* Bronze Sponsor */}
            <div className="bg-white rounded-lg p-8 border-2 border-border hover:border-[#CD7F32] transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">BRONZE SPONSOR</h3>
              <div className="text-3xl font-bold text-primary mb-4">$600</div>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                A foundational partnership for small businesses and supporters who want to be part of the FAMES community. Bronze Sponsors receive recognition across select platforms and events, helping show support for Hawai'i's creative and business ecosystem while gaining light brand visibility throughout the year. A great way to get involved and grow alongside the community.
              </p>
              <a
                href="/sponsors/apply/bronze"
                className="block w-full gradient-primary text-white hover:opacity-90 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
              >
                Become a Bronze Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section ref={sponsorsRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Current Sponsors</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Thank you to these amazing organizations and individuals who support our mission
            </p>
          </div>
          <div
            className={`transition-all duration-700 ${sponsorsVisible ? "fade-in-up" : "opacity-0"}`}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
              <button
                onClick={() => handleTabChange("platinum")}
                className={`px-4 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "platinum"
                    ? "bg-gradient-to-r from-[#E5E4E2] to-[#BCC6CC] text-[#323c82] shadow-lg scale-105"
                    : "bg-white/50 text-foreground/70 hover:bg-white/80 border border-border"
                }`}
              >
                Platinum ({platinumSponsors.length})
              </button>
              <button
                onClick={() => handleTabChange("gold")}
                className={`px-4 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "gold"
                    ? "bg-gradient-to-r from-[#f89820] to-[#eb6e2d] text-white shadow-lg scale-105"
                    : "bg-white/50 text-foreground/70 hover:bg-white/80 border border-border"
                }`}
              >
                Gold ({goldSponsors.length})
              </button>
              <button
                onClick={() => handleTabChange("silver")}
                className={`px-4 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "silver"
                    ? "bg-gradient-to-r from-[#C0C0C0] to-[#A8A9AD] text-[#323c82] shadow-lg scale-105"
                    : "bg-white/50 text-foreground/70 hover:bg-white/80 border border-border"
                }`}
              >
                Silver ({silverSponsors.length})
              </button>
              <button
                onClick={() => handleTabChange("bronze")}
                className={`px-4 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "bronze"
                    ? "bg-gradient-to-r from-[#CD7F32] to-[#B87333] text-white shadow-lg scale-105"
                    : "bg-white/50 text-foreground/70 hover:bg-white/80 border border-border"
                }`}
              >
                Bronze ({bronzeSponsors.length})
              </button>
              <button
                onClick={() => handleTabChange("inkind")}
                className={`px-4 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "inkind"
                    ? "bg-gradient-to-r from-[#323c82] to-[#eb6e2d] text-white shadow-lg scale-105"
                    : "bg-white/50 text-foreground/70 hover:bg-white/80 border border-border"
                }`}
              >
                In-Kind ({inKindDonors.length})
              </button>
            </div>

            {/* Carousel Content */}
            <div className={`bg-gradient-to-br ${tierStyle.bg} rounded-2xl p-6 md:p-10 border ${tierStyle.border}`}>
              <div className="relative">
                {/* Navigation Arrows */}
                {totalPages > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 ${tierStyle.arrow} p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                      aria-label="Previous sponsors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNext}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 ${tierStyle.arrow} p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                      aria-label="Next sponsors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Sponsor Cards */}
                <div
                  className={`grid ${
                    itemsPerPage === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : itemsPerPage === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                  } gap-6 md:gap-8`}
                >
                  {visibleSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`bg-white ${tierStyle.cardBorder} rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-300 ${tierStyle.shadow} hover:scale-105`}
                    >
                      <div className={`${tierStyle.size} bg-white rounded-lg flex items-center justify-center mb-3`}>
                        {sponsor.logo ? (
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-muted-foreground text-sm font-medium">Logo</span>
                        )}
                      </div>
                      <p className="text-sm md:text-base font-semibold text-foreground text-center leading-tight mb-6">
                        {sponsor.name}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? activeTab === "platinum"
                              ? "bg-[#E5E4E2] w-8"
                              : activeTab === "gold"
                                ? "bg-[#f89820] w-8"
                                : activeTab === "silver"
                                  ? "bg-[#C0C0C0] w-8"
                                  : activeTab === "bronze"
                                    ? "bg-[#CD7F32] w-8"
                                    : "bg-[#323c82] w-8"
                            : "bg-foreground/20"
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#323c82]/5 to-[#f89820]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Become a Sponsor</h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Interested in becoming a sponsor and supporting Hawaii's entrepreneurial community? Partner with us to make
            a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#f89820] to-[#eb6e2d] text-white hover:from-[#eb6e2d] hover:to-[#f89820] px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us About Sponsorship
            </a>
            <a
              href="/donate"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

