'use client'

import { useState } from 'react'
import { GraduationCap, TrendingUp, Briefcase, Trophy } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Awards2025() {
  const scholarships = [
    {
      name: "Micah Caldaizo",
      school: "Kapi'olani Community College",
      gpa: "3.5 GPA",
      major: "Nursing",
      bio: "Born and raised in the Philippines, I moved to Hawaii at 16 in pursuit of a better future. My goal is to become a compassionate and skilled nurse who serves others with empathy and professionalism.",
      image: "/nursing-student-portrait-professional-headshot.jpg",
    },
    {
      name: "Elijah Dominici",
      school: "University of Hawaii at Manoa",
      gpa: "3.12 GPA",
      major: "Civil Engineering",
      bio: "Pursuing a career in structural engineering. I have a desire to give back to my community and inspire others to serve through my work in education.",
      image: "/engineering-student-portrait-professional-headshot.jpg",
    },
    {
      name: "Quang Loc Lam",
      school: "University of Hawaii",
      gpa: "3.79 GPA",
      major: "PhD in Business Administration",
      bio: "Specializing in Information Technology Management with interests in Artificial Intelligence, Environmental Economics and Communication. Instructor at Shidler College of Business.",
      image: "/phd-business-student-portrait-professional-headsho.jpg",
    },
    {
      name: "Trachelle Layela",
      school: "University of Hawaii",
      gpa: "4.0 GPA",
      major: "Student",
      bio: "Overcame traumatic experiences to become a dedicated student. My grandmother always believed in me and I am committed to living the life I deserve with enthusiasm.",
      image: "/college-student-portrait-professional-headshot.jpg",
    },
    {
      name: "Monica Lum",
      school: "Hanalani Schools",
      gpa: "4.13 GPA",
      major: "STEM Student",
      bio: "Strong passion for STEM with participation in Science Olympiad for four years. Science Olympiad Team Captain and Junior Class Officer, aiming to combine science and technology for positive impact.",
      image: "/stem-student-portrait-professional-headshot.jpg",
    },
    {
      name: "Angel Lynn Talana",
      school: "University of Hawaii, John Burns School of Medicine",
      gpa: "4.0 GPA",
      major: "Medical Student",
      bio: "Second-year medical student committed to health equity and pre-medical student mentoring. Driving force for commitment to serving the next generation of healthcare professionals.",
      image: "/medical-student-portrait-professional-headshot.jpg",
    },
    {
      name: "Shannia Wilber",
      school: "Hawaii Pacific University",
      gpa: "3.30 GPA",
      major: "Nursing",
      bio: "Excited to be a nurse helping people has been a big part of my life. Through perseverance, I accomplish anything I put my mind to. Determined to make a difference in healthcare.",
      image: "/nursing-student-portrait-professional-headshot-smi.jpg",
    },
  ]

  const entrepreneurs = [
    {
      name: "Sophia Cranz",
      business: "Mavericks of Movement",
      description:
        "Movement practice that combines Classical Pilates with Contemporary Modified Classical Pilates instruction. Founded to bring grit, science, and intuition together. Certified Yoga Teacher and studying Kinesiology at UH.",
      image: "/pilates-yoga-instructor-portrait-professional.jpg",
    },
    {
      name: "Uakea Egami",
      business: "Sports Photography",
      description:
        "Professional sports photographer based in Honolulu specializing in supporting young athletes. Founder of 'Aloha Junior League' developing fundraising campaigns and corporate sponsorships for youth athletic teams.",
      image: "/sports-photographer-portrait-professional.jpg",
    },
    {
      name: "John Visaya & Yoji Eguchi",
      business: "JY Builders LLC",
      description:
        "Partnership between two entrepreneurs in architectural and construction industries. Company legacy from the 70's with pillars of caring, partnership and passion, serving clients one project at a time.",
      image: "/construction-business-partners-portrait-profession.jpg",
    },
    {
      name: "Jaslyn Loftin",
      business: "Lemon Lunchbox Music Group",
      description:
        "Multimedia entertainment company with brand campaigns in Development, PR/Marketing, and Music Publishing. Founded December 2023, creating fundamental skill building through year-round workshops.",
      image: "/music-business-entrepreneur-portrait-professional.jpg",
    },
    {
      name: "Jhessa Malacas",
      business: "JHES FITTED Embroidery",
      description:
        "Embroidery business started at 15 years old. After pregnancy in 2020, the business thrived while balancing motherhood and working as a manager, applying business lessons from customer service.",
      image: "/embroidery-business-owner-portrait-professional.jpg",
    },
    {
      name: "Shamille Pecson",
      business: "Sha's Bakery",
      description:
        "Owner of Sha's Bakery bringing joy through unique and flavorful desserts. Recently launched Tippr, a pop-up booth bringing cakes across O'ahu. Creating lasting sweet memories with every dessert.",
      image: "/bakery-owner-portrait-professional-smiling.jpg",
    },
    {
      name: "Dusty Siegill",
      business: "Sports Business",
      description:
        "Built discipline and independence from baseball from young age. Natural leader capturing his baseball team's journey. Channels passion into unforgettable ocean experiences, reflecting creativity and commitment.",
      image: "/sports-business-entrepreneur-portrait-professional.jpg",
    },
  ]

  const leaders = [
    {
      name: "Rocky A. Anguay",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Joy Barua",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Ian Brooks",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Matthew Delany",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Ernesto & Maria Guieb",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Kristina Lockwood",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Jessica Munoz",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <section id="past-awardees" className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            2025 FAMES Award Recipients
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            Celebrating outstanding Filipino-Americans making a difference through scholarship, entrepreneurship, and community leadership.
          </p>
        </div>

        <Tabs defaultValue="scholarships" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 bg-gradient-to-r from-orange-100 via-white to-blue-100 border border-orange-200/50">
            <TabsTrigger value="scholarships" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Scholarships</span>
              <span className="sm:hidden">Scholar</span>
            </TabsTrigger>
            <TabsTrigger value="entrepreneurs" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Entrepreneurs</span>
              <span className="sm:hidden">Biz</span>
            </TabsTrigger>
            <TabsTrigger value="leaders" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Leaders</span>
              <span className="sm:hidden">Lead</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {scholarships.map((student, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-orange-200/50 hover:border-orange-400">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <img
                            src={student.image || "/placeholder.svg"}
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
                          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4">{student.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-orange-500 hover:bg-orange-600 text-white border-orange-600" />
              <CarouselNext className="hidden md:flex -right-12 bg-orange-500 hover:bg-orange-600 text-white border-orange-600" />
            </Carousel>
          </TabsContent>

          <TabsContent value="entrepreneurs">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {entrepreneurs.map((entrepreneur, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-200/50 hover:border-blue-400">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <img
                            src={entrepreneur.image || "/placeholder.svg"}
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
                          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5">
                            {entrepreneur.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-blue-500 hover:bg-blue-600 text-white border-blue-600" />
              <CarouselNext className="hidden md:flex -right-12 bg-blue-500 hover:bg-blue-600 text-white border-blue-600" />
            </Carousel>
          </TabsContent>

          <TabsContent value="leaders">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {leaders.map((leader, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-2 border-transparent bg-gradient-to-br from-orange-100 via-white to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-xl relative">
                          <Image
                            src={leader.image || "/placeholder.svg"}
                            alt={leader.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-orange-600" />
                            <span className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Business Leader 2025</span>
                          </div>
                          <h4 className="text-xl font-bold mb-3">{leader.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {leader.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-gradient-to-br from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white border-none" />
              <CarouselNext className="hidden md:flex -right-12 bg-gradient-to-br from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white border-none" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
