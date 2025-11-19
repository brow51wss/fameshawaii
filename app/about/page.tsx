"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Heart, Users, Target, Lightbulb, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation()
  const { ref: whatWeDoRef, isVisible: whatWeDoVisible } = useScrollAnimation()
  const { ref: leadershipRef, isVisible: leadershipVisible } = useScrollAnimation()

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community and collective success. When one of us succeeds, we all succeed.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our programs to our events and member support.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We welcome entrepreneurs and business owners regardless of ethnicity, financial means, or economic status.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and innovative approaches to business and community development.",
    },
  ]

  const programs = [
    {
      icon: Award,
      title: "Annual Scholarship Gala",
      description:
        "Our flagship event awards scholarships to Filipino-American students pursuing higher education and entrepreneurial ventures.",
      highlight: "$2M+ awarded since inception",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description:
        "Connect with experienced business leaders and entrepreneurs who provide guidance, support, and industry insights.",
      highlight: "50+ active mentors",
    },
    {
      icon: TrendingUp,
      title: "Business Networking",
      description:
        "Regular networking events, workshops, and professional development opportunities to grow your business and connections.",
      highlight: "Monthly events",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              About <span className="gradient-text">FAMES Hawaii</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-100 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Filipino-American Mentoring, Educating & Scholarships
            </p>
            <p
              className={`text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Building bridges between generations of Filipino-American entrepreneurs, fostering excellence through
              education, and creating opportunities for the next generation of business leaders in Hawaii.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section ref={storyRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${storyVisible ? "fade-in-left" : "opacity-0"}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Founded with a vision to empower Filipino-American entrepreneurs and students, FAMES Hawaii has grown
                into a thriving community of business leaders, mentors, and aspiring professionals.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                What began as a small group of passionate individuals has evolved into a 501(c)3 non-profit organization
                that has impacted hundreds of lives through scholarships, mentorship, and networking opportunities.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Under the leadership of our Founder and CEO, Joni Redick-Yundt, FAMES Hawaii continues to break
                barriers and create pathways to success for the Filipino-American community in Hawaii and beyond.
              </p>
            </div>
            <div
              className={`w-full h-96 rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 transition-all duration-700 ${storyVisible ? "scale-in" : "opacity-0"}`}
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/jqUT4WbRP2W5XUBUkGWhb-Vknc1cBHATCovJJtwyw949c389FiYN.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section ref={valuesRef as any} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${valuesVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Our Mission & Values
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${valuesVisible ? "fade-in-up" : "opacity-0"}`}
          >
            FAMES Hawaii is committed to Mentoring, Educating, Motivating, and Leadership Development for entrepreneurs
            and business owners. We believe in sharing our skills and supporting each other to achieve collective
            success.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/10 ${valuesVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatWeDoRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${whatWeDoVisible ? "fade-in-up" : "opacity-0"}`}
          >
            What We Do
          </h2>
          <p
            className={`text-center text-foreground/70 mb-16 text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${whatWeDoVisible ? "fade-in-up" : "opacity-0"}`}
          >
            Through strategic programs and initiatives, we create tangible opportunities for growth and success
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 ${whatWeDoVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">{program.description}</p>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-primary font-semibold text-sm">{program.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Highlight Section */}
      <section ref={leadershipRef as any} className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${leadershipVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Leadership That Inspires
            </h2>
            <p
              className={`text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-100 ${leadershipVisible ? "fade-in-up" : "opacity-0"}`}
            >
              Our dedicated team of officers, directors, and executive advisors brings decades of combined experience in
              business, education, and community leadership. Together, we're committed to creating opportunities and
              fostering success for the next generation.
            </p>
            <a
              href="/#team"
              className={`inline-block bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${leadershipVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Join Our Community</h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Whether you're an established business owner, aspiring entrepreneur, or student looking for opportunities,
            FAMES Hawaii welcomes you to be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#membership"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="/#contact"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

