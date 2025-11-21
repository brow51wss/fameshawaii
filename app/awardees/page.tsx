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
      image: "/images/awardees/heroes/Dr.-Lawrence-K.W.-Tseu.webp",
    },
    {
      slug: "emily-baptiste",
      name: "Emily Baptiste",
      title: "Founder of HMAA & Community Leader",
      excerpt:
        "Emily Baptiste and the Arnold Baptiste Family are the founders of HMAA, one of the largest healthcare providers in the State of Hawaii...",
      image: "/images/awardees/heroes/Emily-Baptiste.webp",
    },
  ]

  const scholarships = [
    {
      slug: "micah-caldaizo",
      name: "Micah Caldaizo",
      school: "Kapi'olani Community College",
      gpa: "3.5 GPA",
      major: "Nursing",
      excerpt: "My name is Micah Cadalzo, and I am a nursing student at Kapi'olani Community College maintaining a 3.5 GPA. Born and raised in the Philippines, I moved to Hawai'i at age ten with my family in pursuit of a better future...",
      image: "/images/awardees/scholarships/Micah-Caldazo.webp",
    },
    {
      slug: "elijah-dominici",
      name: "Elijah Dominici",
      school: "University of Hawaii at Manoa",
      gpa: "3.12 GPA",
      major: "Civil Engineering",
      excerpt: "My name is Elijah Dominici, I am a Civil Engineering student at the University of Hawaii at Manoa. I am perusing this degree to obtain a career at aqua engineers...",
      image: "/images/awardees/scholarships/Elijah-Dominici.webp",
    },
    {
      slug: "quang-loc-lam",
      name: "Quang Loc Lam",
      school: "University of Hawaii",
      gpa: "3.79 GPA",
      major: "PhD in Business Administration",
      excerpt:
        "Quang Loc Lam is a PhD candidate in Business Administration (specializing in Information Technology Management) at the University of Hawaii at Manoa...",
      image: "/images/awardees/scholarships/Quang-Loc-Lam.webp",
    },
    {
      slug: "trachelle-layola",
      name: "Trachelle Layola",
      school: "University of Hawaii",
      gpa: "4.0 GPA",
      major: "Student",
      excerpt: "As a little girl, even going through tough times, I've known my potential. I recently found a video of myself from a time where I was experiencing extremely traumatic events...",
      image: "/images/awardees/scholarships/Trachelle-Layola.webp",
    },
    {
      slug: "monica-lum",
      name: "Monica Lum",
      school: "Hanalani Schools",
      gpa: "4.13 GPA",
      major: "STEM Student",
      excerpt: "My name is Monica Lum, and I am a junior at Hanalani Schools. I have a strong passion for STEM and have participated in the Science Olympiad for four years, winning multiple regional and state-level competitions...",
      image: "/images/awardees/scholarships/Monica-Lum.webp",
    },
    {
      slug: "angel-lynn-talana",
      name: "Angel Lynn Talana",
      school: "University of Hawaii, John Burns School of Medicine",
      gpa: "4.0 GPA",
      major: "Medical Student",
      excerpt: "My name is Angel Lynn Talana. I am currently a second-year medical student at the University of Hawai'i John A. Burns School of Medicine...",
      image: "/images/awardees/scholarships/Angel-Lynn-Talana.webp",
    },
    {
      slug: "shannia-wilber",
      name: "Shannia Wilber",
      school: "Hawaii Pacific University",
      gpa: "3.30 GPA",
      major: "Nursing",
      excerpt: "Hi my name is Shannia Wilber, I am currently a student at Hawaii Pacific University with a major in nursing. I am very excited to see where this path takes me and how much knowledge I will gain from my experience...",
      image: "/images/awardees/scholarships/Shannia-Wilber.webp",
    },
  ]

  const entrepreneurs = [
    {
      slug: "sophia-cranz",
      name: "Sophia Cranz",
      business: "Mavericks of Movement",
      excerpt:
        "Mavericks of Movement began in 2025 as a reimagining of what a movement practice can be. What started in 2024 as a Pilates class for equestrians—taught in a tack room at an equine training facility...",
      image: "/images/awardees/entrepreneurs/Sophia-Crane.webp",
    },
    {
      slug: "uakea-egami",
      name: "Uakea Egami",
      business: "Sports Photography",
      excerpt:
        "Uakea Egami is a sports photographer based out of Honolulu, who specializes in supporting young professional athletes in training. She combines her passion for dynamic photography, entrepreneurship, and marketing...",
      image: "/images/awardees/entrepreneurs/Uakea-Egam.webp",
    },
    {
      slug: "john-visaya-yoji-eguchi",
      name: "John Visaya, Yoji Eguchi",
      business: "JY Builders LLC",
      excerpt:
        "2024 marked the birth of a partnership between John Visaya and Yoji Eguchi, two eager entrepreneurs with a plethora of experience in the architectural and construction industries...",
      image: "/images/awardees/entrepreneurs/John-Visaya.webp",
      images: ["/images/awardees/entrepreneurs/John-Visaya.webp", "/images/awardees/entrepreneurs/Yoji-Eguchi.webp"],
    },
    {
      slug: "jaslyn-loftin",
      name: "Jaslyn Loftin",
      business: "Lemon Lunchbox Music Group",
      excerpt:
        "Lemon Lunchbox Music Group is a multimedia entertainment company with short and long term campaigns in Brand Development, PR/Marketing, and Music Publishing...",
      image: "/images/awardees/entrepreneurs/Jaslyn-Loftin.webp",
    },
    {
      slug: "jhessa-malacas",
      name: "Jhessa Malacas",
      business: "JHES FITTED Embroidery",
      excerpt: "I'm 24 years old, a proud mom to my 1½-year-old, and the owner of JHES FITTED; my embroidery business. What started as a small hobby during quarantine turned into something I truly love...",
      image: "/images/awardees/entrepreneurs/Jhessa-Malacas.webp",
    },
    {
      slug: "shamille-pecson",
      name: "Shamille Pecson",
      business: "Sha's Bakery",
      excerpt: "I'm Shamille Pecson, owner of Sha's Bakery. I moved to Hawai'i in 2016 for a better life and new opportunities. Baking has always been a passion of mine...",
      image: "/images/awardees/entrepreneurs/Shamille-Pecson.webp",
    },
    {
      slug: "dusty-siegill",
      name: "Dusty Slagill",
      business: "Reel Havoc Sportfishing",
      excerpt: "Dusty Slagill has always charted his own course. From an early age, he built the discipline and independence that fuel his entrepreneurial spirit...",
      image: "/images/awardees/entrepreneurs/Dusty-Slagil.webp",
    },
  ]

  const leaders = [
    {
      slug: "rocky-anguay",
      name: "Rocky A. Anguay",
      excerpt: "MavRocky has over 45 years of experience in the financial industry and has served as Director, Past Vice-President, President and State Director of the Institute of Financial Education...",
      image: "/images/awardees/leaders/Rocky-A.-Anguay.webp",
    },
    {
      slug: "joy-barua",
      name: "Joy Barua",
      excerpt: "Joy Barua is a multidisciplinary leader with diverse C-Suite portfolio in non-profit, small business lending, healthcare, higher education, insurance, and economic development sectors, spanning nearly three decades...",
      image: "/images/awardees/leaders/Joy-Barua.webp",
    },
    {
      slug: "ian-brooks",
      name: "Ian Brooks",
      excerpt: "Ian, a U.S. Marine Corps veteran, served 23 years as a Marine Infantry Officer and Force Reconnaissance Officer, deploying to combat zones overseas multiple times...",
      image: "/images/awardees/leaders/Ian-Brooks.webp",
    },
    {
      slug: "matthew-delany",
      name: "Matthew Delany",
      excerpt: "LemMatthew S. Delaney is President & CEO of The Hawaii Group, leading HiAccounting, DemandHR, and HiHealthcare. For more than two decades, he has been a driving force for positive change in Hawai'i's business community...",
      image: "/images/awardees/leaders/Matthew-Delane.webp",
    },
    {
      slug: "ernesto-maria-guieb",
      name: "Ernesto & Maria Guieb",
      excerpt: "Guieb's Catering began as a passion project by Ernesto P. Guieb, Jr. and his wife, Maria driven by a love for family, food, and entrepreneurship...",
      image: "/images/awardees/leaders/Ernesto-_-Maria-Guieb.webp",
    },
    {
      slug: "kristina-lockwood",
      name: "Kristina Lockwood",
      excerpt: "Kristina Lockwood is Vice President and General Manager of Nexstar Media Group's Hawaii operations, overseeing KHON2, KHON2.com, KHII, Hawaii's CW, Nexstar Digital Hawaii, and the KHON+ app...",
      image: "/images/awardees/leaders/Kristina-Lockwood.webp",
    },
    {
      slug: "jessica-munoz",
      name: "Jessica Munoz",
      excerpt: "Jessica R. Muñoz is a nurse practitioner, social innovator, and the founder of Hoʻōla Nā Pua, an internationally recognized nonprofit dedicated to shining the light on the sexual exploitation of children and creating pathways of healing for youth...",
      image: "/images/awardees/leaders/Jessica-Munoz.webp",
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
              community in Hawaii.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Awardees Section */}
      <section ref={heroAwardeesRef as any} className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex flex-wrap justify-center gap-6">
            {heroes.map((hero, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-2 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${heroAwardeesVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-xl relative">
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
              Celebrating outstanding entrepreneurs, students, and leaders making a difference through scholarship, entrepreneurship, and
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
                        {entrepreneur.images && entrepreneur.images.length > 1 ? (
                          <div className="aspect-square overflow-hidden rounded-t-xl relative flex flex-col gap-1 bg-white p-1">
                            {entrepreneur.images.map((img: string, idx: number) => (
                              <div key={idx} className="flex-1 overflow-hidden">
                                <img
                                  src={img}
                                  alt={`${entrepreneur.name} ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                  style={idx === 0 ? { objectPosition: 'center 30%' } : undefined}
                                />
                              </div>
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                        ) : (
                          <div className="aspect-square overflow-hidden rounded-t-xl relative">
                            <img
                              src={entrepreneur.image}
                              alt={entrepreneur.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
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

