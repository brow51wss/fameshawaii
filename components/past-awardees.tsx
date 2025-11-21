"use client"

import { GraduationCap, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PastAwardees() {
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

  return (
    <section id="past-awardees" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            2025 Scholarship & Innovative Entrepreneur Rising Stars
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
            Celebrating outstanding students and entrepreneurs who are making a difference in their
            communities and industries.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap size={32} className="text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Scholarship Awardees</h3>
          </div>

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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-xl">
                        <img
                          src={student.image || "/placeholder.svg"}
                          alt={student.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-foreground mb-1">{student.name}</h4>
                            <p className="text-sm text-primary font-semibold">{student.school}</p>
                          </div>
                          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
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
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrendingUp size={32} className="text-secondary" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Innovative Entrepreneur Rising Stars</h3>
          </div>

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
                  <Card className="h-full bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-xl">
                        <img
                          src={entrepreneur.image || "/placeholder.svg"}
                          alt={entrepreneur.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3">
                          <h4 className="text-xl font-bold text-foreground mb-1">{entrepreneur.name}</h4>
                          <p className="text-sm text-secondary font-semibold">{entrepreneur.business}</p>
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
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="mt-12 text-center bg-secondary/30 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-3">Want to apply for a scholarship or award?</h3>
          <p className="text-foreground/70 mb-4 max-w-2xl mx-auto">
            Applications for the 2026 scholarship and entrepreneur awards will open in Spring 2026. Check back soon or
            contact us for more information.
          </p>
          <a
            href="mailto:info@fameshawaii.org"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
