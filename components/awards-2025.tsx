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
      bio: "My name is Micah Cadalzo, and I am a nursing student at Kapi'olani Community College maintaining a 3.5 GPA. Born and raised in the Philippines, I moved to Hawai'i at age ten with my family in pursuit of a better future. My goal is to become a compassionate and skilled nurse who serves others with empathy and professionalism. Through my involvement with the National Student Nurses' Association and community service events like \"Make a Difference Day,\" I have learned the value of leadership and giving back. Receiving this scholarship would allow me to focus fully on my studies and clinical experiences without financial burden. I am committed to using my education to contribute positively to Hawai'i's healthcare community and inspire others to serve.",
      image: "/images/awardees/scholarships/Micah-Caldazo.webp",
    },
    {
      name: "Elijah Dominici",
      school: "University of Hawaii at Manoa",
      gpa: "3.12 GPA",
      major: "Civil Engineering",
      bio: "My name is Elijah Dominici, I am a Civil Engineering student at the University of Hawaii at Manoa. I am perusing this degree to obtain a career at aqua engineers. I have a 3.12 GPA, have completed 30+ hours of community service for ahuimanu elementary school's yearly fair, Kaneohe canoe club's lo'i patch, king intermediate's wrestling team and am currently helping out at castle high school for their wrestling team. I am very thankful to be given the opportunity to continue my education with the help of the FAMES scholarship program.",
      image: "/images/awardees/scholarships/Elijah-Dominici.webp",
    },
    {
      name: "Quang Loc Lam",
      school: "University of Hawaii",
      gpa: "3.79 GPA",
      major: "PhD in Business Administration",
      bio: "Quang Loc Lam is a PhD candidate in Business Administration (specializing in Information Technology Management) at the University of Hawaii at Manoa. His research interests include Artificial Intelligence, Environmental Economics and Online Communication. He is also an instructor at the Shidler College of Business where he teaches undergraduate students Statistical Analysis for Business Administration. He was the Director of the Kalo Grants program at the Pacific Asian Center of Entrepreneurship (PACE). He won the first prize of the UH Venture Competition in 2025.",
      image: "/images/awardees/scholarships/Quang-Loc-Lam.webp",
    },
    {
      name: "Trachelle Layola",
      school: "University of Hawaii",
      gpa: "4.0 GPA",
      major: "Student",
      bio: "As a little girl, even going through tough times, I've known my potential. I recently found a video of myself from a time where I was experiencing extremely traumatic events. In this video, I'm about five years old and I'm telling the camera to look at my new school schedule. Then I proceed to tell the camera that \"I'm a kid and I'm very smart.\" Looking at this video as an 18 year old, I wondered how I felt this way as a kid despite what I was going through. As I continued to grow up, my mental health struggled more and more. From seventh to tenth grade, I took care of my grandmother, something I really valued.. I knew I was able to heal from my trauma, but I had a hard time controlling my emotions to do this. My grandmother passing away was the catalyst for my journey to becoming the woman I've always known I could be. I like to emphasize the dedication it takes to heal rather than the unfortunate events that I'm trying to heal from. After ten months of putting in the hard work in therapy programs, I look back and feel proud of my commitment to living up to the potential I always knew I had. I'm now a month into college, continuing my journey to live the life I deserve, with enthusiasm to be able to help others the same way in the future.",
      image: "/images/awardees/scholarships/Trachelle-Layola.webp",
    },
    {
      name: "Monica Lum",
      school: "Hanalani Schools",
      gpa: "4.13 GPA",
      major: "STEM Student",
      bio: "My name is Monica Lum, and I am a junior at Hanalani Schools. I have a strong passion for STEM and have participated in the Science Olympiad for four years, winning multiple regional and state-level competitions. I currently serve as Science Olympiad Team Captain. Beyond STEM, I love music and play the violin, and am 2nd chair in my school's orchestra, with experience in viola as well. I am a hard worker who enjoys challenging myself and giving back to the community. In addition to my academic and extracurricular pursuits, I am a Junior Class Officer and am trying out for the varsity girls' tennis team this year. I hope to pursue a career in information science, where I can combine my interests in technology and problem-solving to make a positive impact in the world around me.",
      image: "/images/awardees/scholarships/Monica-Lum.webp",
    },
    {
      name: "Angel Lynn Talana",
      school: "University of Hawaii, John Burns School of Medicine",
      gpa: "4.0 GPA",
      major: "Medical Student",
      bio: "My name is Angel Lynn Talana. I am currently a second-year medical student at the University of Hawai'i John A. Burns School of Medicine. Prior to medical school, I earned my Bachelor of Science in Biology and Psychology as well as my Master's in Public Health specializing in social and behavioral health sciences with the goal of reducing health disparities. Growing up in Wahiawā, I became deeply aware of the barriers many families face in accessing health care. This became a driving force for my commitment to health equity. Beyond my studies, I am a mentor to pre-medical students, hoping to empower the next generation of healthcare professionals.",
      image: "/images/awardees/scholarships/Angel-Lynn-Talana.webp",
    },
    {
      name: "Shannia Wilber",
      school: "Hawaii Pacific University",
      gpa: "3.30 GPA",
      major: "Nursing",
      bio: "Hi my name is Shannia Wilber, I am currently a student at Hawaii Pacific University with a major in nursing. I am very excited to see where this path takes me and how much knowledge I will gain from my experience. Helping people has been a big part of my life and I want to continue doing that throughout my career. You never know what someone may be going through so a little help you offer could be a huge blessing for someone else. I know with the right support and perseverance I am able to accomplish anything I put my mind to. Nursing allows me to combine compassion with science, and that balance motivates me to keep pushing forward even on difficult days. I hope to make a difference not only through patient care but also by inspiring others to pursue kindness and empathy in their everyday lives. Every challenge I face in this journey reminds me of why I chose this field — to heal, comfort, and connect. I'm determined to grow into a nurse who truly impacts her community and represents the values of care and dedication.",
      image: "/images/awardees/scholarships/Shannia-Wilber.webp",
    },
  ]

  const entrepreneurs = [
    {
      name: "Sophia Cranz",
      business: "Mavericks of Movement",
      description:
        "Mavericks of Movement began in 2025 as a reimagining of what a movement practice can be. What started in 2024 as a Pilates class for equestrians—taught in a tack room at an equine training facility—quickly grew beyond the walls of traditional beginning studios...",
      image: "/images/awardees/entrepreneurs/Sophia-Crane.webp",
    },
    {
      name: "Uakea Egami",
      business: "Sports Photography",
      description:
        "Uakea Egami is a sports photographer based out of Honolulu, who specializes in supporting young professional athletes in training. She combines her passion for dynamic photography, entrepreneurship, and marketing to educate her athletes...",
      image: "/images/awardees/entrepreneurs/Uakea-Egam.webp",
    },
    {
      name: "John Visaya & Yoji Eguchi",
      business: "JY Builders LLC",
      description:
        "2024 marked the birth of a partnership between John Visaya and Yoji Eguchi, two eager entrepreneurs with a plethora of experience in the architectural and construction industries...",
      image: "/images/awardees/entrepreneurs/John-Visaya.webp",
      images: ["/images/awardees/entrepreneurs/John-Visaya.webp", "/images/awardees/entrepreneurs/Yoji-Eguchi.webp"],
    },
    {
      name: "Jaslyn Loftin",
      business: "Lemon Lunchbox Music Group",
      description:
        "Lemon Lunchbox Music Group is a multimedia entertainment company with short and long term campaigns in Brand Development, PR/Marketing, and Music Publishing. Founded in December 2023, Lemon Lunchbox creates, refines, and elevates...",
      image: "/images/awardees/entrepreneurs/Jaslyn-Loftin.webp",
    },
    {
      name: "Jhessa Malacas",
      business: "JHES FITTED Embroidery",
      description:
        "I'm 24 years old, a proud mom to my 1½-year-old, and the owner of JHES FITTED; my embroidery business. What started as a small hobby during quarantine turned into something I truly love and value...",
      image: "/images/awardees/entrepreneurs/Jhessa-Malacas.webp",
    },
    {
      name: "Shamille Pecson",
      business: "Sha's Bakery",
      description:
        "I'm Shamille Pecson, owner of Sha's Bakery. I moved to Hawai'i in 2016 for a better life and new opportunities. Baking has always been a passion of mine, and I turned what started as a hobby into Sha's Bakery...",
      image: "/images/awardees/entrepreneurs/Shamille-Pecson.webp",
    },
    {
      name: "Dusty Slagill",
      business: "Reel Havoc Sportfishing",
      description:
        "Dusty Slagill has always charted his own course. From an early age, he built the discipline and independence that fuel his entrepreneurial spirit. A natural leader, he captained his baseball team and thrived as a competitive bass fisherman...",
      image: "/images/awardees/entrepreneurs/Dusty-Slagil.webp",
    },
  ]

  const leaders = [
    {
      name: "Rocky A. Anguay",
      description: "Over 45 years in the financial industry. Former President of the Filipino Chamber of Commerce of Hawaii.",
      image: "/images/awardees/leaders/Rocky-A.-Anguay.webp"
    },
    {
      name: "Joy Barua",
      description: "Multidisciplinary leader with C-Suite experience spanning nearly three decades. Named among Hawaii's Most Admired Leaders.",
      image: "/images/awardees/leaders/Joy-Barua.webp"
    },
    {
      name: "Ian Brooks",
      description: "U.S. Marine Corps veteran with 23 years of service. Civil-Military Leader recognized with Purple Heart and National Geographic special.",
      image: "/images/awardees/leaders/Ian-Brooks.webp"
    },
    {
      name: "Matthew Delany",
      description: "President & CEO of The Hawaii Group. Driving positive change in Hawaii's business community for over two decades.",
      image: "/images/awardees/leaders/Matthew-Delane.webp"
    },
    {
      name: "Ernesto & Maria Guieb",
      description: "Founders of Guieb's Catering. Expanded from word-of-mouth to four successful restaurant locations.",
      image: "/images/awardees/leaders/Ernesto-_-Maria-Guieb.webp"
    },
    {
      name: "Kristina Lockwood",
      description: "VP & General Manager of Nexstar Media Group's Hawaii operations. Two-time Regional Emmy Award winner.",
      image: "/images/awardees/leaders/Kristina-Lockwood.webp"
    },
    {
      name: "Jessica Munoz",
      description: "Founder of Ho'ōla Nā Pua. Pioneering trauma-informed care and establishing Hawaii's first residential treatment campus for trafficked girls.",
      image: "/images/awardees/leaders/Jessica-Munoz.webp"
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
                              src={entrepreneur.image || "/placeholder.svg"}
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
