"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Trophy, GraduationCap, TrendingUp, Briefcase, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AwardeesPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: heroAwardeesRef, isVisible: heroAwardeesVisible } = useScrollAnimation()
  const { ref: recipientsRef, isVisible: recipientsVisible } = useScrollAnimation()

  const heroes = [
    {
      slug: "dr-lawrence-tseu",
      name: "Dr. Lawrence K.W. Tseu",
      title: "BS, DDS, FAGD, Ph.D",
      excerpt:
        "Dr. Lawrence K.W. Tseu is a graduate of St. Louis School, Brigham Young University, Northwestern University Dental School and the Olympian International Sport Medicine College...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "emily-baptiste",
      name: "Emily Baptiste",
      title: "Founder of HMAA & Community Leader",
      excerpt:
        "Emily Baptiste and the Arnold Baptiste Family are the founders of HMAA, one of the largest healthcare providers in the State of Hawaii...",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const scholarships = [
    {
      slug: "micah-caldaizo",
      name: "Micah Caldaizo",
      school: "Kapi'olani Community College",
      gpa: "3.5 GPA",
      major: "Nursing",
      excerpt: "Born and raised in the Philippines, I moved to Hawaii at 16 in pursuit of a better future...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "elijah-dominici",
      name: "Elijah Dominici",
      school: "University of Hawaii at Manoa",
      gpa: "3.12 GPA",
      major: "Civil Engineering",
      excerpt: "Pursuing a career in structural engineering with a desire to give back to my community...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "quang-loc-lam",
      name: "Quang Loc Lam",
      school: "University of Hawaii",
      gpa: "3.79 GPA",
      major: "PhD in Business Administration",
      excerpt:
        "Specializing in Information Technology Management with interests in Artificial Intelligence...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "trachelle-layela",
      name: "Trachelle Layela",
      school: "University of Hawaii",
      gpa: "4.0 GPA",
      major: "Student",
      excerpt: "Overcame traumatic experiences to become a dedicated student committed to living life with enthusiasm...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "monica-lum",
      name: "Monica Lum",
      school: "Hanalani Schools",
      gpa: "4.13 GPA",
      major: "STEM Student",
      excerpt: "Strong passion for STEM with participation in Science Olympiad for four years...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "angel-lynn-talana",
      name: "Angel Lynn Talana",
      school: "University of Hawaii, John Burns School of Medicine",
      gpa: "4.0 GPA",
      major: "Medical Student",
      excerpt: "Second-year medical student committed to health equity and pre-medical student mentoring...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "shannia-wilber",
      name: "Shannia Wilber",
      school: "Hawaii Pacific University",
      gpa: "3.30 GPA",
      major: "Nursing",
      excerpt: "Excited to be a nurse, helping people has been a big part of my life...",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const entrepreneurs = [
    {
      slug: "sophia-cranz",
      name: "Sophia Cranz",
      business: "Mavericks of Movement",
      excerpt:
        "Movement practice that combines Classical Pilates with Contemporary Modified Classical Pilates instruction...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "uakea-egami",
      name: "Uakea Egami",
      business: "Sports Photography",
      excerpt:
        "Professional sports photographer based in Honolulu specializing in supporting young athletes...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "john-visaya-yoji-eguchi",
      name: "John Visaya & Yoji Eguchi",
      business: "JY Builders LLC",
      excerpt:
        "Partnership between two entrepreneurs in architectural and construction industries...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "jaslyn-loftin",
      name: "Jaslyn Loftin",
      business: "Lemon Lunchbox Music Group",
      excerpt:
        "Multimedia entertainment company with brand campaigns in Development, PR/Marketing, and Music Publishing...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "jhessa-malacas",
      name: "Jhessa Malacas",
      business: "JHES FITTED Embroidery",
      excerpt: "Embroidery business started at 15 years old, thrived while balancing motherhood and working as a manager...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "shamille-pecson",
      name: "Shamille Pecson",
      business: "Sha's Bakery",
      excerpt: "Owner of Sha's Bakery bringing joy through unique and flavorful desserts...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "dusty-siegill",
      name: "Dusty Siegill",
      business: "Sports Business",
      excerpt: "Built discipline and independence from baseball, channels passion into unforgettable ocean experiences...",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const leaders = [
    {
      slug: "rocky-anguay",
      name: "Rocky A. Anguay",
      excerpt: "Exceptional business leader making transformative contributions to our community...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "joy-barua",
      name: "Joy Barua",
      excerpt: "Dedicated professional committed to excellence and community service...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "ian-brooks",
      name: "Ian Brooks",
      excerpt: "Visionary leader driving innovation and growth in Hawaii's business community...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "matthew-delany",
      name: "Matthew Delany",
      excerpt: "Inspiring entrepreneur with a passion for empowering the next generation...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "ernesto-maria-guieb",
      name: "Ernesto & Maria Guieb",
      excerpt: "Community pillars dedicated to fostering entrepreneurship and Filipino-American excellence...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "kristina-lockwood",
      name: "Kristina Lockwood",
      excerpt: "Dynamic business leader committed to mentorship and community development...",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      slug: "jessica-munoz",
      name: "Jessica Munoz",
      excerpt: "Accomplished professional making lasting impact through leadership and service...",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-amber-50/50 via-background to-orange-50/50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div
              className={`flex justify-center mb-6 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
            >
              <Award size={64} className="text-amber-500" />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Our <span className="gradient-text">Awardees</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Honoring Excellence and Achievement
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Celebrating exceptional individuals who exemplify leadership, innovation, and dedication to the
              Filipino-American community in Hawaii.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Awardees Section */}
      <section ref={heroAwardeesRef as any} className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-4 transition-all duration-700 ${heroAwardeesVisible ? "scale-in" : "opacity-0"}`}
            >
              <Trophy className="w-8 h-8 text-amber-500" />
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-3 transition-all duration-700 delay-100 ${heroAwardeesVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Hero Awardees
            </h2>
            <p
              className={`text-lg text-foreground/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroAwardeesVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Honoring exceptional leaders who have made transformative contributions to our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {heroes.map((hero, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-2 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${heroAwardeesVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 w-full bg-muted">
                    <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-semibold text-amber-500">Hero Awardee</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{hero.name}</h3>
                    <p className="text-sm text-foreground/60 font-semibold mb-4">{hero.title}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">{hero.excerpt}</p>
                    <Link
                      href={`/awardees/${hero.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 FAMES Award Recipients Section */}
      <section
        ref={recipientsRef as any}
        className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-3 transition-all duration-700 ${recipientsVisible ? "fade-in-up" : "opacity-0"}`}
            >
              2025 FAMES Award Recipients
            </h2>
            <p
              className={`text-lg text-foreground/70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${recipientsVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Celebrating outstanding Filipino-Americans making a difference through scholarship, entrepreneurship, and
              community leadership.
            </p>
          </div>

          <div
            className={`transition-all duration-700 ${recipientsVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <Tabs defaultValue="scholarships" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 bg-gradient-to-r from-orange-100 via-white to-blue-100 border border-orange-200/50">
                <TabsTrigger
                  value="scholarships"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="hidden sm:inline">Scholarships</span>
                  <span className="sm:hidden">Scholar</span>
                </TabsTrigger>
                <TabsTrigger
                  value="entrepreneurs"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Entrepreneurs</span>
                  <span className="sm:hidden">Biz</span>
                </TabsTrigger>
                <TabsTrigger
                  value="leaders"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  <Briefcase className="w-4 h-4" />
                  <span className="hidden sm:inline">Leaders</span>
                  <span className="sm:hidden">Lead</span>
                </TabsTrigger>
              </TabsList>

              {/* Scholarships Tab */}
              <TabsContent value="scholarships">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scholarships.map((student, index) => (
                    <Card
                      key={index}
                      className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-orange-200/50 hover:border-orange-400"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-foreground mb-1">{student.name}</h4>
                              <p className="text-sm text-orange-600 font-semibold">{student.school}</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2 shadow-md">
                              {student.gpa}
                            </div>
                          </div>
                          <p className="text-sm text-foreground/60 mb-3 font-medium">{student.major}</p>
                          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">
                            {student.excerpt}
                          </p>
                          <Link
                            href={`/awardees/${student.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Entrepreneurs Tab */}
              <TabsContent value="entrepreneurs">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {entrepreneurs.map((entrepreneur, index) => (
                    <Card
                      key={index}
                      className="h-full bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-200/50 hover:border-blue-400"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <img
                            src={entrepreneur.image}
                            alt={entrepreneur.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="mb-3">
                            <h4 className="text-xl font-bold text-foreground mb-1">{entrepreneur.name}</h4>
                            <p className="text-sm bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-bold">
                              {entrepreneur.business}
                            </p>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">
                            {entrepreneur.excerpt}
                          </p>
                          <Link
                            href={`/awardees/${entrepreneur.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Leaders Tab */}
              <TabsContent value="leaders">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {leaders.map((leader, index) => (
                    <Card
                      key={index}
                      className="h-full border-2 border-transparent bg-gradient-to-br from-orange-100 via-white to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-orange-600" />
                            <span className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                              Business Leader 2025
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-3">{leader.name}</h4>
                          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">{leader.excerpt}</p>
                          <Link
                            href={`/awardees/${leader.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

