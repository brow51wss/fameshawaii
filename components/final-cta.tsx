import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users } from 'lucide-react'
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Join Us in Empowering the Next Generation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Whether you're interested in becoming a member, making a donation, or partnering with us as a sponsor, 
            your support helps us continue our mission of mentoring, educating, and motivating Filipino-American youth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#membership" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#donations" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Make a Donation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at{" "}
              <a href="mailto:info@fameshi.org" className="text-primary hover:underline font-semibold">
                info@fameshi.org
              </a>{" "}
              or call{" "}
              <a href="tel:808-781-5905" className="text-primary hover:underline font-semibold">
                (808) 781-5905
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
