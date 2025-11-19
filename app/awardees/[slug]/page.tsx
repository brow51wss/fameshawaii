"use client"

import { use } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Trophy, GraduationCap, TrendingUp, Briefcase, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Complete awardee data
const awardeesData: Record<string, any> = {
  // Hero Awardees
  "dr-lawrence-tseu": {
    type: "hero",
    name: "Dr. Lawrence K.W. Tseu",
    title: "BS, DDS, FAGD, Ph.D",
    bio: "Dr. Lawrence K.W. Tseu, BS, DDS, FAGD, Ph.D is a graduate of St. Louis School, Brigham Young University, Provo Utah, Northwestern University Dental School and the Olympian International Sport Medicine College. He served in the Hawaii Army National Guard and five years in the U.S. Air Force during the Korean War from 1951 to 1955. Dr. Tseu is a Member of the Board of Regents and a Fellow of the University of Oxford, UK England. In the year 2004, he established The Tseu Medical Research Institute in collaboration with the Oxford Healthcare System with his wife BoHing Chan. In appreciation for their many contributions, the University of Oxford named a building in their honor. In the year 2008, as a Member of the Board of Regents of Chaminade University, Dr. Tseu established the Chaminade School of Nursing and Learning Center. In appreciation he received The Silversword Hall of Fame Award. Of his children, there are two Dentists, a Medical Doctor, an Attorney, a Dental Hygienist and an Educator with a M.A. in Special Education.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "emily-baptiste": {
    type: "hero",
    name: "Emily Baptiste",
    title: "Founder of HMAA & Community Leader",
    bio: "Emily Baptiste and the Arnold Baptiste Family are the founders of HMAA, one of the largest healthcare providers in the State of Hawaii. Emily grew up in Honolulu, attended Maryknoll School (Class of 53') where she received the Noblesse Oblige Award in 2022, the University of Hawaii, and served as AAUW President. After she graduated, Emily launched her career in Marin County, CA as a journalist and educator. She received numerous awards for her community service and dedication to the Marin County Schools Program. Emily also served as President of the Association of American Business Women, and today she continues to dedicate her time and efforts to community service. Emily has continued to support FAMES for more than a decade, as both a volunteer and keynote speaker, sharing her vast life experiences from being a business owner to the bombing of Pearl Harbor in 1941. Outside of her many philanthropic endeavors, Emily continues to celebrate her life with her seven grandchildren: Cristofer, Jason, Nikki, Daniel, and Michael, Jace, Rochelle, and seven great grandchildren: Avery, Rhys, Maverick, Adrienne, Cambria, Iliya, and Miles.",
    image: "/placeholder.svg?height=600&width=600",
  },

  // Scholarship Recipients
  "micah-caldaizo": {
    type: "scholarship",
    name: "Micah Caldaizo",
    school: "Kapi'olani Community College",
    gpa: "3.5 GPA",
    major: "Nursing",
    bio: "Born and raised in the Philippines, I moved to Hawaii at 16 in pursuit of a better future. My goal is to become a compassionate and skilled nurse who serves others with empathy and professionalism.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "elijah-dominici": {
    type: "scholarship",
    name: "Elijah Dominici",
    school: "University of Hawaii at Manoa",
    gpa: "3.12 GPA",
    major: "Civil Engineering",
    bio: "Pursuing a career in structural engineering. I have a desire to give back to my community and inspire others to serve through my work in education.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "quang-loc-lam": {
    type: "scholarship",
    name: "Quang Loc Lam",
    school: "University of Hawaii",
    gpa: "3.79 GPA",
    major: "PhD in Business Administration",
    bio: "Specializing in Information Technology Management with interests in Artificial Intelligence, Environmental Economics and Communication. Instructor at Shidler College of Business.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "trachelle-layela": {
    type: "scholarship",
    name: "Trachelle Layela",
    school: "University of Hawaii",
    gpa: "4.0 GPA",
    major: "Student",
    bio: "Overcame traumatic experiences to become a dedicated student. My grandmother always believed in me and I am committed to living the life I deserve with enthusiasm.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "monica-lum": {
    type: "scholarship",
    name: "Monica Lum",
    school: "Hanalani Schools",
    gpa: "4.13 GPA",
    major: "STEM Student",
    bio: "Strong passion for STEM with participation in Science Olympiad for four years. Science Olympiad Team Captain and Junior Class Officer, aiming to combine science and technology for positive impact.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "angel-lynn-talana": {
    type: "scholarship",
    name: "Angel Lynn Talana",
    school: "University of Hawaii, John Burns School of Medicine",
    gpa: "4.0 GPA",
    major: "Medical Student",
    bio: "Second-year medical student committed to health equity and pre-medical student mentoring. Driving force for commitment to serving the next generation of healthcare professionals.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "shannia-wilber": {
    type: "scholarship",
    name: "Shannia Wilber",
    school: "Hawaii Pacific University",
    gpa: "3.30 GPA",
    major: "Nursing",
    bio: "Excited to be a nurse helping people has been a big part of my life. Through perseverance, I accomplish anything I put my mind to. Determined to make a difference in healthcare.",
    image: "/placeholder.svg?height=600&width=600",
  },

  // Entrepreneurs
  "sophia-cranz": {
    type: "entrepreneur",
    name: "Sophia Cranz",
    business: "Mavericks of Movement",
    bio: "Movement practice that combines Classical Pilates with Contemporary Modified Classical Pilates instruction. Founded to bring grit, science, and intuition together. Certified Yoga Teacher and studying Kinesiology at UH.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "uakea-egami": {
    type: "entrepreneur",
    name: "Uakea Egami",
    business: "Sports Photography",
    bio: "Professional sports photographer based in Honolulu specializing in supporting young athletes. Founder of 'Aloha Junior League' developing fundraising campaigns and corporate sponsorships for youth athletic teams.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "john-visaya-yoji-eguchi": {
    type: "entrepreneur",
    name: "John Visaya & Yoji Eguchi",
    business: "JY Builders LLC",
    bio: "Partnership between two entrepreneurs in architectural and construction industries. Company legacy from the 70's with pillars of caring, partnership and passion, serving clients one project at a time.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "jaslyn-loftin": {
    type: "entrepreneur",
    name: "Jaslyn Loftin",
    business: "Lemon Lunchbox Music Group",
    bio: "Multimedia entertainment company with brand campaigns in Development, PR/Marketing, and Music Publishing. Founded December 2023, creating fundamental skill building through year-round workshops.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "jhessa-malacas": {
    type: "entrepreneur",
    name: "Jhessa Malacas",
    business: "JHES FITTED Embroidery",
    bio: "Embroidery business started at 15 years old. After pregnancy in 2020, the business thrived while balancing motherhood and working as a manager, applying business lessons from customer service.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "shamille-pecson": {
    type: "entrepreneur",
    name: "Shamille Pecson",
    business: "Sha's Bakery",
    bio: "Owner of Sha's Bakery bringing joy through unique and flavorful desserts. Recently launched Tippr, a pop-up booth bringing cakes across O'ahu. Creating lasting sweet memories with every dessert.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "dusty-siegill": {
    type: "entrepreneur",
    name: "Dusty Siegill",
    business: "Sports Business",
    bio: "Built discipline and independence from baseball from young age. Natural leader capturing his baseball team's journey. Channels passion into unforgettable ocean experiences, reflecting creativity and commitment.",
    image: "/placeholder.svg?height=600&width=600",
  },

  // Business Leaders
  "rocky-anguay": {
    type: "leader",
    name: "Rocky A. Anguay",
    bio: "Exceptional business leader making transformative contributions to our community. With decades of experience in entrepreneurship and community service, Rocky has become a pillar of the Filipino-American business community in Hawaii.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "joy-barua": {
    type: "leader",
    name: "Joy Barua",
    bio: "Dedicated professional committed to excellence and community service. Joy's leadership has inspired countless individuals to pursue their entrepreneurial dreams while maintaining a strong connection to their cultural heritage.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "ian-brooks": {
    type: "leader",
    name: "Ian Brooks",
    bio: "Visionary leader driving innovation and growth in Hawaii's business community. Ian's strategic approach to business development has helped numerous startups and established companies achieve remarkable success.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "matthew-delany": {
    type: "leader",
    name: "Matthew Delany",
    bio: "Inspiring entrepreneur with a passion for empowering the next generation. Matthew's mentorship programs have helped hundreds of young professionals launch successful careers and businesses.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "ernesto-maria-guieb": {
    type: "leader",
    name: "Ernesto & Maria Guieb",
    bio: "Community pillars dedicated to fostering entrepreneurship and Filipino-American excellence. Together, Ernesto and Maria have built a legacy of service, mentorship, and business success that continues to inspire generations.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "kristina-lockwood": {
    type: "leader",
    name: "Kristina Lockwood",
    bio: "Dynamic business leader committed to mentorship and community development. Kristina's innovative approaches to leadership development have transformed countless organizations and empowered emerging leaders.",
    image: "/placeholder.svg?height=600&width=600",
  },
  "jessica-munoz": {
    type: "leader",
    name: "Jessica Munoz",
    bio: "Accomplished professional making lasting impact through leadership and service. Jessica's dedication to community advancement and business excellence has earned her recognition as one of Hawaii's most influential leaders.",
    image: "/placeholder.svg?height=600&width=600",
  },
}

export default function AwardeePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const awardee = awardeesData[slug]

  if (!awardee) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Awardee Not Found</h1>
          <p className="text-foreground/70 mb-8">The awardee you're looking for doesn't exist.</p>
          <Link
            href="/awardees"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Awardees
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const getIcon = () => {
    switch (awardee.type) {
      case "hero":
        return <Trophy className="w-8 h-8" />
      case "scholarship":
        return <GraduationCap className="w-8 h-8" />
      case "entrepreneur":
        return <TrendingUp className="w-8 h-8" />
      case "leader":
        return <Briefcase className="w-8 h-8" />
      default:
        return <Trophy className="w-8 h-8" />
    }
  }

  const getColor = () => {
    switch (awardee.type) {
      case "hero":
        return {
          primary: "text-amber-500",
          bg: "bg-amber-500/10",
          gradient: "from-amber-50/50 to-background",
          badge: "bg-gradient-to-br from-amber-500 to-amber-600",
          link: "text-amber-500 hover:text-amber-600",
        }
      case "scholarship":
        return {
          primary: "text-orange-600",
          bg: "bg-orange-500/10",
          gradient: "from-orange-50/50 to-background",
          badge: "bg-gradient-to-br from-orange-500 to-orange-600",
          link: "text-orange-600 hover:text-orange-700",
        }
      case "entrepreneur":
        return {
          primary: "text-blue-600",
          bg: "bg-blue-500/10",
          gradient: "from-blue-50/50 to-background",
          badge: "bg-gradient-to-br from-blue-500 to-blue-600",
          link: "text-blue-600 hover:text-blue-700",
        }
      case "leader":
        return {
          primary: "text-orange-600",
          bg: "bg-gradient-to-r from-orange-500/10 to-blue-500/10",
          gradient: "from-orange-50/50 via-blue-50/50 to-background",
          badge: "bg-gradient-to-br from-orange-600 to-blue-600",
          link: "text-orange-600 hover:text-orange-700",
        }
      default:
        return {
          primary: "text-amber-500",
          bg: "bg-amber-500/10",
          gradient: "from-amber-50/50 to-background",
          badge: "bg-gradient-to-br from-amber-500 to-amber-600",
          link: "text-amber-500 hover:text-amber-600",
        }
    }
  }

  const colors = getColor()

  const getTypeLabel = () => {
    switch (awardee.type) {
      case "hero":
        return "Hero Awardee"
      case "scholarship":
        return "Scholarship Recipient 2025"
      case "entrepreneur":
        return "Entrepreneur Award 2025"
      case "leader":
        return "Business Leader 2025"
      default:
        return "Awardee"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef as any} className={`pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b ${colors.gradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-8 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <Link
              href="/awardees"
              className={`inline-flex items-center gap-2 ${colors.link} font-semibold transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Awardees
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <div
              className={`md:col-span-2 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={awardee.image} alt={awardee.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div
                className={`inline-flex items-center gap-2 ${colors.bg} ${colors.primary} px-4 py-2 rounded-full mb-4 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                {getIcon()}
                <span className="font-semibold text-sm">{getTypeLabel()}</span>
              </div>

              <h1
                className={`text-4xl md:text-5xl font-bold text-foreground mb-3 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                {awardee.name}
              </h1>

              {awardee.title && (
                <p
                  className={`text-xl text-foreground/70 font-semibold mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "400ms" }}
                >
                  {awardee.title}
                </p>
              )}

              {awardee.school && (
                <div
                  className={`mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "500ms" }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-lg font-semibold text-foreground/80">{awardee.school}</p>
                    {awardee.gpa && (
                      <span className={`${colors.badge} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                        {awardee.gpa}
                      </span>
                    )}
                  </div>
                  {awardee.major && <p className="text-base text-foreground/60 font-medium mt-2">{awardee.major}</p>}
                </div>
              )}

              {awardee.business && (
                <p
                  className={`text-xl font-bold ${colors.primary} mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "500ms" }}
                >
                  {awardee.business}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section ref={contentRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">{awardee.bio}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`mt-12 p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} border-2 border-foreground/5 transition-all duration-700 ${contentVisible ? "scale-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Support Our Mission</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Help us continue empowering exceptional individuals like {awardee.name.split(" ")[0]} through scholarships,
              mentorship programs, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className={`${colors.badge} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center`}
              >
                Make a Donation
              </Link>
              <Link
                href="/join"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div
            className={`mt-12 text-center transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/awardees"
              className={`inline-flex items-center gap-2 ${colors.link} font-semibold transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" /> View All Awardees
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

