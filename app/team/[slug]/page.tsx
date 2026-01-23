"use client"

import { use } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Users, Award, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

// Complete team member data
const teamData: Record<string, any> = {
  // Officers
  "joni-redick-yundt": {
    type: "officer",
    name: "Joni B. Redick-Yundt",
    title: "Founder & CEO",
    bio: `🌺 Founder & CEO Bio – Joni B. Redick-Yundt

Joni B. Redick-Yundt is the Founder & CEO of FAMES Hawaii, a 501(c)3 non-profit organization dedicated to mentoring, educating, motivating, and developing leaders, entrepreneurs, and visionaries. For over two decades, she has built FAMES Hawaii into a transformative force that uplifts individuals regardless of ethnicity, financial means, or background—because she firmly believes that "When anyone succeeds, we all succeed."

🌟 The Heart Behind the Mission

People often ask Joni how FAMES Hawaii began.
The truth is simple: service changed her life, and she wanted to give that gift to others.

Before founding FAMES Hawaii, Joni spent years volunteering with numerous nonprofits—continuing today with Make-A-Wish Foundation, Domestic Violence organizations, and Ho'ola Nā Pua/Pearl Haven for human trafficking youth ages 11–17. She discovered the profound reward of lifting others, and witnessed how a single act of kindness could restore hope.

Because of the work she does in the community, people constantly sought her out for mentorship, guidance, business resources, confidence-building, personal development, and professional connections. She loved helping — often hosting networking events, business gatherings, and galas — but she felt called to something greater.

Even though she was discouraged, criticized, and told that FAMES Hawaii "wouldn't last," she pressed forward with faith, passion, and purpose.
Today, FAMES Hawaii recently celebrated its 21st Annual Scholarship & Fundraising Gala (Oct 25, 2025) and awarded another $14,000 in scholarships, recognizing influential business and community leaders who make Hawaii stronger.

What began as a vision has now provided over $600,000 in scholarships and empowered countless individuals through leadership workshops, mentorship, and community programs. She's grateful & blessed with a few of her friends, officers, directors & executive advisors who stood by her & believe in her vision as well as business & community leaders who supported & donated to FAMES Hawaii financially.

🌺 From Humble Beginnings to Global Impact

Joni's journey began in the rice fields of the Philippines. Growing up without running water or electricity, she remembers talking to the scarecrow, sharing her hopes and dreams with the sky as her witness. She dreamed of a future where she could flip a switch and see light, where she wouldn't have to walk miles into the forest to gather firewood for cooking.

At 14, her family migrated to Hawaii. She spoke little English, was bullied, and struggled to adjust—but she persevered, focusing on her studies and graduating with honors from Aiea High School at 16 years old, skipping the 11th grade.

Her early journey built the resilience, compassion, and unstoppable attitude that would later define her leadership.

💼 A Trailblazer in Business & Leadership

From nearly 20 years in nursing, Joni transitioned into entrepreneurship. As a Mary Kay Beauty Consultant, she broke Hawaii's record as the fastest to become Top Sales Director—achieving in one month what usually takes 4–6 months, earning several red and pink cars and discovering her confidence.

A heartbreaking family experience pushed her into the financial industry, where she excelled immediately—earning Rookie of the Year, Million Dollar Round Table, Leaders Club, Centurion Club, and the Presidential Citation for outstanding field management.

She went on to build the Million Dollar Chapter of BNI, becoming Hawaii's fastest record-breaking chapter and one of the top five international chapters among 5,000 chapters in 37 countries.

🏆 Worldwide Recognition

Joni has been recognized globally for her leadership, philanthropy, and community work, including:
• Featured in FORBES Magazine, Who's Who of Millennium Magazine, National Digest, Top Industry Professionals, Hawaii Business Magazine, Pacific Business News (PBN), Pacific Edge Magazine, Midweek Cover, United Hemisphere Magazine and Fil Am Newspaper, also featured on different televisions.
• Top 20 Outstanding Filipino Abroad (TOFA), recognized in Washington DC
• Volunteer Woman of the Year – Pacific Business News
• US SBA Business Champion of the Year
• US SBA Business Woman Advocate of the Year
• Featured on Times Square Billboard, Planet Hollywood Las Vegas Billboard, and Nasdaq Billboard NYC
• Empowered Woman of the Year by International Association of Top Professionals (IAOTP)
• Who's Who in America & Who's Who of American Women
• Remarkable Woman of Hawaii – KHON2
• Honored as a Top Influential Business & Community Leader, Plaza Hotel, NYC
• Hall of FAME & Fearless Leader, Plaza Hotel NYC

🎓 FAMES Hawaii – Impact & Legacy

For over 20 years, FAMES Hawaii has:
• Provided over $600,000 in scholarships
• Hosted 21 Annual Scholarship & Fundraising Galas
• Celebrated 20 Annual FREE Business & Leadership Workshops
• Partnered with DECA, a global organization for High Schools & Colleges… inspiring students through mentorship and scholarships
• Uplifted entrepreneurs & leaders across Hawaii through community events and networking

Her favorite message to youth and adults alike:
"Believe & Achieve.
Positive Attitude + Positive Action = Positive Result."

📚 Author • Speaker • Designer • Producer

Joni is a multi-passionate creator:

Books
• Million Dollar Attitude – International best-selling book
• It's All About Attitude… Still Sexy at Sixty & Beyond
• Who Stole My Attitude? Positive vs Negative (coming soon)
• Co-Authored other 2 Best Selling books

Fashion & Design
• International luxury handbag designer, handcrafted in Italy
• Launched signature fine-jewelry collection with Kolohe/Rose Wong
www.thejonicollection.com

Media & Entrepreneurship
• Executive TV Producer & Host of The Joni Show for over 10 years
• Former owner of Joni's Paradise Limousine Service
• Former Co-owner of Surfvivor Sunscreen
• Owner & Executive Director of Miss Paradise Hawaii, Miss Oahu & Miss Waikiki Scholarship Pageant
• Mrs. Hawaii United States 2002

💗 A Survivor with a Purpose

Joni is also a cancer survivor who chose to decline chemotherapy. With unwavering faith, a healthy lifestyle, and the love and support of her husband Thomas, she has been in remission for 14 years. Her life is a testament to courage, faith, and the power of attitude.

🌈 Faith, Family & Gratitude

Joni is happily married to Thomas C. Yundt, an International Senior Aviation Engineer. She is blessed with two children—Jason (master in psychology)and Jessica (business owner of her Spa in Colorado) and three grandchildren: Olive, Luna & Legend.

Her life motto remains:
"With God's blessings, anything is possible with the right mindset."`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pullcyeMDr1mMXrGdp5lv-PIFQHE2Bi0nL5NfLPjaPTsJznS7pvT.png",
    website: "www.thejonicollection.com",
  },
  "margie-jose": {
    type: "officer",
    name: "Margie Jose",
    title: "President",
    bio: "Margie Jose is more than just a real estate professional; she's a beacon of empathy and sincerity in the industry. With a genuine desire to help others, Margie approaches each client's interaction with warmth, compassion, and a deep understanding of their needs. Her journey in real estate began with a simple goal: to make a positive difference in people's lives. Through her unwavering dedication and commitment to service, Margie has built a reputation as someone who goes above and beyond to support her clients every step of the way.\n\nBut Margie's impact extends far beyond the realm of real estate transactions. She believes in the power of community and actively seeks opportunities to give back and uplift those around her. Whether it's volunteering at local shelters, organizing charity events, or simply lending a listening ear to those in need, Margie's empathy knows no bounds.\n\nIn a world where sincerity can sometimes feel scarce, Margie Jose shines brightly as a beacon of hope and compassion. With her genuine heart and unwavering commitment to helping others, she continues to make a meaningful difference in the lives of those she encounters.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/sOipj5rJneG9NSnOI59rU-Od9YhCXkdaXsDRvlWwSUdu09Kd2Pee.png",
    website: "https://www.oahuhomelistings.net/",
  },
  "donalyn-baldeviso": {
    type: "officer",
    name: "Donalyn Baldeviso",
    title: "FAMES Secretary",
    bio: "Raised on Lanai, Donalyn is a Certified Nurse Case Manager with a Bachelor of Science in Nursing from Hawaii Pacific University. A nurse for over 20 years, she currently works for the Queens Health System as a Case Manager in the Transitional Case Management Program. She is actively involved and a member of the Queens Neuroscience/Stroke Team. She was also the recipient of the Queens Employee of the Month Award in December 2012. She is currently the Vice President of the Filipino Nurses Organization of Hawaii. She is the recipient of the 2016 FNOH Excellence in Nursing Leadership Award and the 2017 FNOH Excellence in Nursing Education Award. She is also a member of the National Association of Professional Women, Academy of Case Management and Sigma Theta Tau National Nursing Honor Society. She recently won the Ms. Maria Clara 2025 and Ms. Gatsby 2025. She has been a long time supporter of FAMES Hawaii. Donalyn is married to Dean, a Firecaptain for the Honolulu Fire Department and they have 3 children – Dylan, Devyn, and Danika.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YO9MFa4mJbuAVZpkiyCyU-UBpiVscnf7qw0L1i5qn6hrUHHvyuzJ.png",
  },
  "elena-santos": {
    type: "officer",
    name: "Elena Santos",
    title: "Assistant Secretary",
    bio: "A dedicated Senior Personal Banker of First Hawaiian Bank (www. fhb..com) Elena has spent years helping families secure their futures while nurturing her own as a loving mother of four. A committed Rotarian, a trusted Notary Public and active community leader. Elena lives a life rooted in service and faith. A University of Iloilo grad-Bachelor of Science in Commerce, Major in Accounting Recently crowned as Ginang Filipinas America Hawai'i World 2025.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/g9komHN8H5mEtee4UQRZe-lsSBR7C1WvN7hax1wEIvyFCk050P1C.png",
  },

  // Directors
  "devyne-brooks": {
    type: "director",
    name: "Devyne Brooks",
    title: "Director",
    bio: "My name is Dev, short for Devyne and I work with auntie Joni at Westpac Wealth Partners. I specialize in helping people make smart financial decisions so that they can achieve their goals and dreams. My Non-Profit organization is called 'Hi YOU Matter' where we encourage personal development, connect people with life coaches and mentors, and teach financial literacy so people can do what they love and learn how to make money doing it.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/gKabJxIYUbNXo1iCVOg0P-vZAIxIU8Jd0xRf26TtOCRkOEIf8y16.png",
    website: "https://hiyoumatter.com/",
  },
  "dunavan-hahn": {
    type: "director",
    name: "Dunavan Hahn",
    title: "Director",
    bio: "I measure success by the impact I have on others, and I'm committed to helping clients make confident, well-informed financial decisions. Growing up in Hawaii shaped my perspective early; I saw how the right financial guidance can change a family's future, and that experience continues to drive my passion for education and long-term financial planning. My focus is helping people understand how today's decisions influence tomorrow's outcomes.\n\nAs a graduate of the Shidler College of Business, I use both my education and real-world experience to help clients concentrate on what they can control and build toward their goals. Outside of work, I prioritize a healthy, active lifestyle. I enjoy traveling, going to the gym, playing basketball, and discovering new places to eat. I also serve on nonprofit boards and stay involved in community initiatives, which allow me to give back to the place that shaped me. Hawaii is home, and I'm grateful for the opportunity to support its people and values.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/dtnnd0vAEgfdBMfDzs1aS-TEhywRucd8uCZmKeYk243tyW1cqk3r.png",
  },
  "gina-klootwyk": {
    type: "director",
    name: "Gina Klootwyk",
    title: "Director",
    bio: "Gina is an accomplished banking professional with 19+ years in treasury management, merchant services, lending, investments, and relationship banking. Known for building strong, trust-based relationships and delivering a consultative approach that prioritizes the client's best interests. She currently serves as a Sales Officer in First Hawaiian Bank's Business Services Division, dedicated to uplifting the bank's business customers. She brings a warm, family-centered spirit to her work and community. She is a proud mother to Ramon and wife to Benjamin Klootwyk.\n\nBorn in the Philippines and shaped by experiences across Southeast Asia, Washington State, and Arizona, she proudly calls Hawai'i home and embraces the Aloha spirit in every interaction. She loves exploring the Hawaiian outdoors and enriching her perspective through world travel and cultural exchange.\n\nWith a Social Work foundation, Gina champions giving back and lifting others. She believes in authentic collaboration, gracious hospitality, and service with integrity to ensure neighbors and local businesses flourish in paradise. As a nonprofit director, she leads with compassionate, visionary stewardship, empowering communities and delivering meaningful, hopeful impact for all those she serves.",
    image: "/images/team/gina-klootwyk-2026.webp",
  },
  "richard-martin": {
    type: "director",
    name: "Richard Martin",
    title: "Director",
    bio: "As Controller at Pural Water Specialty Co., Inc., I focus on strengthening financial strategy and ensuring rigorous financial governance. Leveraging a strong foundation in technical accounting, I transitioned from leading budgeting, reporting, and regulatory functions at Central Pacific Bank to advancing Pural Water's financial operations. My expertise in financial systems enhances accuracy, efficiency, and informed decision-making across the organization.\n\nAs a Certified Public Accountant, I pair hands-on accounting experience with a deep interest in macroeconomic analysis and decision science, providing data-driven insights to senior leadership and key stakeholders. My core competencies span US GAAP, financial reporting, bookkeeping, individual taxation, internal audit, business intelligence, and data analytics. I hold a master's degree in accounting from the University of Hawaii at Manoa.\n\nMy mission is to drive growth by delivering high-quality financial information, strategic analysis, and operational clarity that empower both the organization and its stakeholders.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2CnTaLa27g45bfJcPs1pV-4qtXCM5ZqmlCBBrIZUZKlEUxeI0rSN.png",
  },
  "donna-slagill": {
    type: "director",
    name: "Donna Slagill",
    title: "Director",
    bio: "Donna is a dynamic multi-industry leader whose work spans digital strategy for businesses, real estate, and community recreation. As the Hawaii Director of Rule Your Kingdom, she drives high-performance Technical SEO and digital marketing strategies for businesses across Hawai'i and worldwide—helping brands grow with data-driven technical strategy, strong online visibility, and sustainable long-term results, digital marketing and brand recognition.\n\nIn addition to her digital marketing leadership, Donna is a licensed Hawai'i real estate agent with The Surrealty Group, where she guides clients through one of the most competitive real-estate markets in the world. Her approach blends market intelligence, sharp negotiation skills, and a deep understanding of island communities, ensuring clients feel supported, informed, and confident with every decision. Her close ties to the military community serve our active duty and veterans with housing, rentals and investment housing needs.\n\nDonna is also the founder and owner of Hawaiian Style Pickleball, a fast-growing recreation brand committed to bringing people together on and off the court. Through tournaments, community events, youth programs, and veterans' fundraisers, she has built one of the most inclusive and energetic pickleball communities in the state. Her leadership reflects her belief that recreation and connection strengthen local families, neighborhoods and community.\n\nAcross all her roles, Donna is known for two things, active leadership and lifting up others. Whether she's directing digital strategies, helping families find a home, or creating athletic programs that bring people together, her mission stays the same—serve her community, grow strong local businesses, and make a lasting positive impact across Hawai'i.\n\nwww.Thesurrealtygroup.com\nwww.RuleYourKingdom.com/Honolulu-hawaii-seo-company/\nwww.HawaiianStylePickleball.com",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/xOYKCenZtE5Xof189yRRU-dV0QmPlrhkDnzS0chUMrmoGHYMzqXe.png",
  },
  "gabriella-wilson-rytting": {
    type: "director",
    name: "Gabriella Wilson-Rytting",
    title: "Director",
    bio: "I'm the Founder and Creative Director of Essence Marketing & Design and VaraKit, two brands built from my love for creativity, connection, and helping businesses grow with purpose.\n\nI grew up on Kaua'i and now call O'ahu home, so everything I create is inspired by that island mix of heart, community, and innovation. My background in design and strategy helps me bring ideas to life in ways that feel real. Whether that's shaping a brand identity, building an online presence, or using new tools like AI to make business a little easier.\n\nAt Essence, we help businesses tell their story through thoughtful design and marketing that actually connects with people. With VaraKit, we're creating ways for entrepreneurs to build and grow online with less stress and more creativity.\n\nAt the end of the day, my passion is simple: helping people and businesses show up beautifully, authentically, and grow in ways that feel true to who they are.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Sq7WquA3bo9vCc5GAxq3i-hG0fe7zDq3ITJH4u6QizAaZfpu3PTg.png",
    website: "https://www.essence-marketing.design/",
  },
}

export default function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const member = teamData[slug]

  if (!member) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Team Member Not Found</h1>
          <p className="text-foreground/70 mb-8">The team member you're looking for doesn't exist.</p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const getIcon = () => {
    switch (member.type) {
      case "officer":
        return <Shield className="w-8 h-8" />
      case "director":
        return <Users className="w-8 h-8" />
      case "advisor":
        return <Award className="w-8 h-8" />
      default:
        return <Shield className="w-8 h-8" />
    }
  }

  const getTypeLabel = () => {
    switch (member.type) {
      case "officer":
        return "Officer"
      case "director":
        return "Director"
      case "advisor":
        return "Executive Advisor"
      default:
        return "Team Member"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-8 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Team
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <div
              className={`md:col-span-2 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div
                className={`flex items-center gap-2 mb-4 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">{getIcon()}</div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">{getTypeLabel()}</span>
              </div>

              <h1
                className={`text-4xl md:text-5xl font-bold text-foreground mb-3 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                {member.name}
              </h1>

              <p
                className={`text-xl text-primary font-semibold mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "400ms" }}
              >
                {member.title}
              </p>

              {member.website && (
                <div
                  className={`mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "500ms" }}
                >
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section ref={contentRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`prose prose-lg max-w-none transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
          >
            {member.bio.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Team CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet the Rest of Our Team</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Discover more dedicated leaders driving FAMES Hawaii's mission forward
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 gradient-primary text-white hover:opacity-90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

