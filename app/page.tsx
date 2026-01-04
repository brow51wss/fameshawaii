import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import UpcomingEvent from "@/components/upcoming-event"
import Impact from "@/components/impact"
import Team from "@/components/team"
import MembershipTiers from "@/components/membership-tiers"
import Donations from "@/components/donations"
import Sponsors from "@/components/sponsors"
import FAQ from "@/components/faq"
import UpcomingEvents from "@/components/upcoming-events"
import PreviousEvents from "@/components/previous-events"
import HeroAwardees from "@/components/hero-awardees"
import Awards2025 from "@/components/awards-2025"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      <UpcomingEvent />
      <Impact />
      <Team />
      <MembershipTiers />
      <Donations />
      <Sponsors />
      <FAQ />
      <UpcomingEvents />
      <PreviousEvents />
      <HeroAwardees />
      <Awards2025 />
      <FinalCTA />
      <Footer />
    </main>
  )
}
