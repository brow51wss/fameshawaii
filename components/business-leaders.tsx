'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Briefcase } from 'lucide-react'
import Image from "next/image"

export default function BusinessLeaders() {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
            <Briefcase className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Influential Business & Community Leaders of the Year
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Recognizing outstanding leaders making a difference in our community
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {leaders.map((leader, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="p-0">
                      <div className="relative h-80 w-full bg-muted">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-semibold text-blue-500">Business Leader 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{leader.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {leader.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
