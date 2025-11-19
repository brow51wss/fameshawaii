'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function HeroAwardees() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const heroes = [
    {
      name: "Dr. Lawrence K.W. Tseu",
      title: "BS, DDS, FAGD, Ph.D",
      bio: "Dr. Lawrence K.W. Tseu, BS, DDS, FAGD, Ph.D is a graduate of St. Louis School, Brigham Young University, Provo Utah, Northwestern University Dental School and the Olympian International Sport Medicine College. He served in the Hawaii Army National Guard and five years in the U.S. Air Force during the Korean War from 1951 to 1955. Dr. Tseu is a Member of the Board of Regents and a Fellow of the University of Oxford, UK England. In the year 2004, he established The Tseu Medical Research Institute in collaboration with the Oxford Healthcare System with his wife BoHing Chan. In appreciation for their many contributions, the University of Oxford named a building in their honor. In the year 2008, as a Member of the Board of Regents of Chaminade University, Dr. Tseu established the Chaminade School of Nursing and Learning Center. In appreciation he received The Silversword Hall of Fame Award. Of his children, there are two Dentists, a Medical Doctor, an Attorney, a Dental Hygienist and an Educator with a M.A. in Special Education.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Emily Baptiste",
      title: "Founder of HMAA & Community Leader",
      bio: "Emily Baptiste and the Arnold Baptiste Family are the founders of HMAA, one of the largest healthcare providers in the State of Hawaii. Emily grew up in Honolulu, attended Maryknoll School (Class of 53') where she received the Noblesse Oblige Award in 2022, the University of Hawaii, and served as AAUW President. After she graduated, Emily launched her career in Marin County, CA as a journalist and educator. She received numerous awards for her community service and dedication to the Marin County Schools Program. Emily also served as President of the Association of American Business Women, and today she continues to dedicate her time and efforts to community service. Emily has continued to support FAMES for more than a decade, as both a volunteer and keynote speaker, sharing her vast life experiences from being a business owner to the bombing of Pearl Harbor in 1941. Outside of her many philanthropic endeavors, Emily continues to celebrate her life with her seven grandchildren: Cristofer, Jason, Nikki, Daniel, and Michael, Jace, Rochelle, and seven great grandchildren: Avery, Rhys, Maverick, Adrienne, Cambria, Iliya, and Miles.",
      image: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-4">
            <Trophy className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-3">
            Hero Awardees
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Honoring exceptional leaders who have made transformative contributions to our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {heroes.map((hero, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 hover:border-amber-500/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-64 w-full bg-muted">
                  <Image
                    src={hero.image || "/placeholder.svg"}
                    alt={hero.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold text-amber-500">Hero Awardee</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{hero.name}</h3>
                  <p className="text-sm text-muted-foreground font-semibold mb-4">{hero.title}</p>
                  <div>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                      {hero.bio}
                    </p>
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-600 mt-3 transition-colors"
                    >
                      {expandedIndex === index ? (
                        <>
                          Show Less <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
