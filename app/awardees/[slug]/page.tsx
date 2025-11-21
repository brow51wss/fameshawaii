"use client"

import { use } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Trophy, GraduationCap, TrendingUp, Briefcase, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Complete awardee data
const awardeesData: Record<string, any> = {
  // Hero Awardees
  "dr-lawrence-tseu": {
    type: "hero",
    name: "Dr. Lawrence K.W. Tseu",
    title: "BS, DDS, FAGD, Ph.D",
    bio: "Dr. Lawrence K.W. Tseu, BS, DDS, FAGD, Ph.D is a graduate of St. Louis School, Brigham Young University, Provo Utah, Northwestern University Dental School and the Olympian International Sport Medicine College. He served in the Hawaii Army National Guard and five years in the U.S. Air Force during the Korean War from 1951 to 1955. Dr. Tseu is a Member of the Board of Regents and a Fellow of the University of Oxford, UK England. In the year 2004, he established The Tseu Medical Research Institute in collaboration with the Oxford Healthcare System with his wife BoHing Chan. In appreciation for their many contributions, the University of Oxford named a building in their honor. In the year 2008, as a Member of the Board of Regents of Chaminade University, Dr. Tseu established the Chaminade School of Nursing and Learning Center. In appreciation he received The Silversword Hall of Fame Award. Of his children, there are two Dentists, a Medical Doctor, an Attorney, a Dental Hygienist and an Educator with a M.A. in Special Education.",
    image: "/images/awardees/heroes/Dr.-Lawrence-K.W.-Tseu.webp",
  },
  "emily-baptiste": {
    type: "hero",
    name: "Emily Baptiste",
    title: "Founder of HMAA & Community Leader",
    bio: "Emily Baptiste and the Arnold Baptiste Family are the founders of HMAA, one of the largest healthcare providers in the State of Hawaii. Emily grew up in Honolulu, attended Maryknoll School (Class of 53') where she received the Noblesse Oblige Award in 2022, the University of Hawaii, and served as AAUW President. After she graduated, Emily launched her career in Marin County, CA as a journalist and educator. She received numerous awards for her community service and dedication to the Marin County Schools Program. Emily also served as President of the Association of American Business Women, and today she continues to dedicate her time and efforts to community service. Emily has continued to support FAMES for more than a decade, as both a volunteer and keynote speaker, sharing her vast life experiences from being a business owner to the bombing of Pearl Harbor in 1941. Outside of her many philanthropic endeavors, Emily continues to celebrate her life with her seven grandchildren: Cristofer, Jason, Nikki, Daniel, and Michael, Jace, Rochelle, and seven great grandchildren: Avery, Rhys, Maverick, Adrienne, Cambria, Iliya, and Miles.",
    image: "/images/awardees/heroes/Emily-Baptiste.webp",
  },

  // Scholarship Recipients
  "micah-caldaizo": {
    type: "scholarship",
    name: "Micah Caldaizo",
    school: "Kapi'olani Community College",
    gpa: "3.5 GPA",
    major: "Nursing",
    bio: "My name is Micah Cadalzo, and I am a nursing student at Kapi'olani Community College maintaining a 3.5 GPA. Born and raised in the Philippines, I moved to Hawai'i at age ten with my family in pursuit of a better future. My goal is to become a compassionate and skilled nurse who serves others with empathy and professionalism. Through my involvement with the National Student Nurses' Association and community service events like \\\"Make a Difference Day,\\\" I have learned the value of leadership and giving back. Receiving this scholarship would allow me to focus fully on my studies and clinical experiences without financial burden. I am committed to using my education to contribute positively to Hawai'i's healthcare community and inspire others to serve.",
    image: "/images/awardees/scholarships/Micah-Caldazo.webp",
  },
  "elijah-dominici": {
    type: "scholarship",
    name: "Elijah Dominici",
    school: "University of Hawaii at Manoa",
    gpa: "3.12 GPA",
    major: "Civil Engineering",
    bio: "My name is Elijah Dominici, I am a Civil Engineering student at the University of Hawaii at Manoa. I am perusing this degree to obtain a career at aqua engineers. I have a 3.12 GPA, have completed 30+ hours of community service for ahuimanu elementary school's yearly fair, Kaneohe canoe club's lo'i patch, king intermediate's wrestling team and am currently helping out at castle high school for their wrestling team. I am very thankful to be given the opportunity to continue my education with the help of the FAMES scholarship program.",
    image: "/images/awardees/scholarships/Elijah-Dominici.webp",
  },
  "quang-loc-lam": {
    type: "scholarship",
    name: "Quang Loc Lam",
    school: "University of Hawaii",
    gpa: "3.79 GPA",
    major: "PhD in Business Administration",
    bio: "Quang Loc Lam is a PhD candidate in Business Administration (specializing in Information Technology Management) at the University of Hawaii at Manoa. His research interests include Artificial Intelligence, Environmental Economics and Online Communication. He is also an instructor at the Shidler College of Business where he teaches undergraduate students Statistical Analysis for Business Administration. He was the Director of the Kalo Grants program at the Pacific Asian Center of Entrepreneurship (PACE). He won the first prize of the UH Venture Competition in 2025.",
    image: "/images/awardees/scholarships/Quang-Loc-Lam.webp",
  },
  "trachelle-layola": {
    type: "scholarship",
    name: "Trachelle Layola",
    school: "University of Hawaii",
    gpa: "4.0 GPA",
    major: "Student",
    bio: "As a little girl, even going through tough times, I've known my potential. I recently found a video of myself from a time where I was experiencing extremely traumatic events. In this video, I'm about five years old and I'm telling the camera to look at my new school schedule. Then I proceed to tell the camera that \"I'm a kid and I'm very smart.\" Looking at this video as an 18 year old, I wondered how I felt this way as a kid despite what I was going through. As I continued to grow up, my mental health struggled more and more. From seventh to tenth grade, I took care of my grandmother, something I really valued.. I knew I was able to heal from my trauma, but I had a hard time controlling my emotions to do this. My grandmother passing away was the catalyst for my journey to becoming the woman I've always known I could be. I like to emphasize the dedication it takes to heal rather than the unfortunate events that I'm trying to heal from. After ten months of putting in the hard work in therapy programs, I look back and feel proud of my commitment to living up to the potential I always knew I had. I'm now a month into college, continuing my journey to live the life I deserve, with enthusiasm to be able to help others the same way in the future.",
    image: "/images/awardees/scholarships/Trachelle-Layola.webp",
  },
  "monica-lum": {
    type: "scholarship",
    name: "Monica Lum",
    school: "Hanalani Schools",
    gpa: "4.13 GPA",
    major: "STEM Student",
    bio: "My name is Monica Lum, and I am a junior at Hanalani Schools. I have a strong passion for STEM and have participated in the Science Olympiad for four years, winning multiple regional and state-level competitions. I currently serve as Science Olympiad Team Captain. Beyond STEM, I love music and play the violin, and am 2nd chair in my school's orchestra, with experience in viola as well. I am a hard worker who enjoys challenging myself and giving back to the community. In addition to my academic and extracurricular pursuits, I am a Junior Class Officer and am trying out for the varsity girls' tennis team this year. I hope to pursue a career in information science, where I can combine my interests in technology and problem-solving to make a positive impact in the world around me.",
    image: "/images/awardees/scholarships/Monica-Lum.webp",
  },
  "angel-lynn-talana": {
    type: "scholarship",
    name: "Angel Lynn Talana",
    school: "University of Hawaii, John Burns School of Medicine",
    gpa: "4.0 GPA",
    major: "Medical Student",
    bio: "My name is Angel Lynn Talana. I am currently a second-year medical student at the University of Hawai'i John A. Burns School of Medicine. Prior to medical school, I earned my Bachelor of Science in Biology and Psychology as well as my Master's in Public Health specializing in social and behavioral health sciences with the goal of reducing health disparities. Growing up in Wahiawā, I became deeply aware of the barriers many families face in accessing health care. This became a driving force for my commitment to health equity. Beyond my studies, I am a mentor to pre-medical students, hoping to empower the next generation of healthcare professionals.",
    image: "/images/awardees/scholarships/Angel-Lynn-Talana.webp",
  },
  "shannia-wilber": {
    type: "scholarship",
    name: "Shannia Wilber",
    school: "Hawaii Pacific University",
    gpa: "3.30 GPA",
    major: "Nursing",
    bio: "Hi my name is Shannia Wilber, I am currently a student at Hawaii Pacific University with a major in nursing. I am very excited to see where this path takes me and how much knowledge I will gain from my experience. Helping people has been a big part of my life and I want to continue doing that throughout my career. You never know what someone may be going through so a little help you offer could be a huge blessing for someone else. I know with the right support and perseverance I am able to accomplish anything I put my mind to. Nursing allows me to combine compassion with science, and that balance motivates me to keep pushing forward even on difficult days. I hope to make a difference not only through patient care but also by inspiring others to pursue kindness and empathy in their everyday lives. Every challenge I face in this journey reminds me of why I chose this field — to heal, comfort, and connect. I'm determined to grow into a nurse who truly impacts her community and represents the values of care and dedication.",
    image: "/images/awardees/scholarships/Shannia-Wilber.webp",
  },

  // Entrepreneurs
  "sophia-cranz": {
    type: "entrepreneur",
    name: "Sophia Cranz",
    business: "Mavericks of Movement",
    bio: "Mavericks of Movement began in 2025 as a reimagining of what a movement practice can be. What started in 2024 as a Pilates class for equestrians—taught in a tack room at an equine training facility—quickly grew beyond the walls of traditional beginning studios. Mavericks of Movement exists where grit meets grace, science meets intuition, and movement becomes transformation. Founder Sophia Crane is a comprehensively certified Classical Pilates instructor and 200-Hour Registered Yoga Teacher. Raised in Marin County, California, she pursued professional dance training with Ballet Austin, Alonzo King LINES Ballet, and DART Dance Berlin. Currently studying Kinesiology at the University of Hawaii at Mānoa, Sophia aims to earn her CSCS certification after graduation. Mavericks of Movement reflects her lifelong devotion to movement as art, discipline, and healing.",
    image: "/images/awardees/entrepreneurs/Sophia-Crane.webp",
  },
  "uakea-egami": {
    type: "entrepreneur",
    name: "Uakea Egami",
    business: "Sports Photography",
    bio: "Uakea Egami is a sports photographer based out of Honolulu, who specializes in supporting young professional athletes in training. She combines her passion for dynamic photography, entrepreneurship, and marketing to educate her athletes on positioning their unique qualities in the crowded sports world. Developing the professional and life skills that truly advance our local and native Hawaiian youth is an important mission for Uakea, and something she has done in her previous endeavors as a teacher. In August of 2024, Uakea took up photography and multimedia while her daughter began developing her professional volleyball career. Through her organization \"Aloha Junior League\" otherwise known as Uakea Media, she loves developing fundraiser campaigns and corporate sponsorships for youth athletic teams so they gain the skills and knowledge of communication, sales, and marketing in the process.",
    image: "/images/awardees/entrepreneurs/Uakea-Egam.webp",
  },
  "john-visaya-yoji-eguchi": {
    type: "entrepreneur",
    name: "John Visaya, Yoji Eguchi",
    business: "JY Builders LLC",
    bio: "2024 marked the birth of a partnership between John Visaya and Yoji Eguchi, two eager entrepreneurs with a plethora of experience in the architectural and construction industries. With their dreams set on real estate development, both University of Southern California alumni started their journey in architecture and electronic engineering. John found his ground in Hawaii in a large drywall company advancing its technological presence inside and out. While Yoji paved a sturdy trifecta of architectural design, general contracting, and development management at some of Hawaii's largest reputable companies. With a mutual passion for music, the two naturally blended their skills to form CCV Builders LLC, a company whose legacy spawned from the 70's. Today its pillars are caring for each other, no matter who you are, and doing things the right way. With their second hire around the corner, the tiny but mighty team is servicing its clients passionately one project at a time. \\\"We owe our success to those that have shared their wisdom along our journey; now is our time to give that wisdom back and grow this young family!\\\"",
    image: "/images/awardees/entrepreneurs/John-Visaya.webp",
    images: ["/images/awardees/entrepreneurs/John-Visaya.webp", "/images/awardees/entrepreneurs/Yoji-Eguchi.webp"],
  },
  "jaslyn-loftin": {
    type: "entrepreneur",
    name: "Jaslyn Loftin",
    business: "Lemon Lunchbox Music Group",
    bio: "Lemon Lunchbox Music Group is a multimedia entertainment company with short and long term campaigns in Brand Development, PR/Marketing, and Music Publishing. Founded in December 2023, Lemon Lunchbox creates, refines, and elevates the entire authentic story and messaging through brand manifestation, &artist training, and fundamental skill building through year-round educational workshops. CEO Jaslyn Loftin has dedicated 10+ years to learning every aspect about the entertainment industry: from working deeply in PR/MarCom with Poi Planet for the past several years, to partnering with companies like Maui Songwriter Rounds, TikTok, the Recording Academy, and many other organizations that build community connection. Lemon lunchbox has become a breakthrough resource for both local and international brands that are looking to share their platform with like-minded people.",
    image: "/images/awardees/entrepreneurs/Jaslyn-Loftin.webp",
  },
  "jhessa-malacas": {
    type: "entrepreneur",
    name: "Jhessa Malacas",
    business: "JHES FITTED Embroidery",
    bio: "I'm 24 years old, a proud mom to my 1½-year-old, and the owner of JHES FITTED; my embroidery business. What started as a small hobby during quarantine turned into something I truly love and value. After my pregnancy in 2024, I began doing more pop-ups, and since then, JHES FITTED has been growing and reaching more people than I ever imagined. Alongside running my business, I also work as a manager at Tapioca Bar, where I've been since graduating high school. Working there has taught me so much about leadership, consistency, and customer service, and I've been able to apply those lessons to my own brand. Balancing motherhood, my job, and my small business hasn't always been easy, but it's been the most rewarding journey and continues to motivate me every day. Winning one out of the 7 Young Entrepreneurs Business award is such an honor, and it's a reminder that hard work, passion, and the support of family and customers make every dream possible.",
    image: "/images/awardees/entrepreneurs/Jhessa-Malacas.webp",
  },
  "shamille-pecson": {
    type: "entrepreneur",
    name: "Shamille Pecson",
    business: "Sha's Bakery",
    bio: "I'm Shamille Pecson, owner of Sha's Bakery. I moved to Hawai'i in 2016 for a better life and new opportunities. Baking has always been a passion of mine, and I turned what started as a hobby into Sha's Bakery, where I pour creativity, heart, and flavor into every cake and dessert I make, bringing something truly special to every celebration. Recently, I also launched Toppr, a pop-up booth that brings our cakes to people all across O'ahu and introduces Hawai'i's only frozen chocolate banana shop. I absolutely love connecting with the community through my creations and sharing treats that bring joy. Every cake and dessert is an opportunity to celebrate life, spread happiness, and create lasting sweet memories. Sha's Bakery and Toppr continue to grow, and I look forward to delighting even more people with our unique desserts.",
    image: "/images/awardees/entrepreneurs/Shamille-Pecson.webp",
  },
  "dusty-siegill": {
    type: "entrepreneur",
    name: "Dusty Slagill",
    business: "Reel Havoc Sportfishing",
    bio: "Dusty Slagill has always charted his own course. From an early age, he built the discipline and independence that fuel his entrepreneurial spirit. A natural leader, he captained his baseball team and thrived as a competitive bass fisherman in Florida before setting his sights on bigger waters. Dusty's adventurous path has taken him from Disney sets and Hollywood productions to the depths of the Pacific as an Assistant Scuba Instructor and Divemaster. For the past eight years, he has fished commercially in Hawai'i, a demanding profession that sharpened his resilience and skill. Now, as founder of Reel Havoc Sportfishing in Kona, Hawaii, Dusty channels his passion into unforgettable ocean experiences for his guests. His journey reflects creativity, courage, and commitment—transforming his love of the ocean into a thriving business built on leadership and vision.",
    image: "/images/awardees/entrepreneurs/Dusty-Slagil.webp",
  },

  // Business Leaders
  "rocky-anguay": {
    type: "leader",
    name: "Rocky A. Anguay",
    bio: "MavRocky has over 45 years of experience in the financial industry and has served as Director, Past Vice-President, President and State Director of the Institute of Financial Education. He is a former Assistant Vice-President of Pioneer Federal Savings Bank and was in charge of their Training Department. He was the Branch Manager of First Hawaiian Bank's Wai'anae Branch for 5 years, Branch Manager of the Kapolei Branch for 3 years and now the Branch Manager of the Pearl City Branch. Rocky has been a member of the Filipino Chamber of Commerce of Hawaii for 24 years and has been a board of director, officer and most recently the President of the Filipino Chamber of Commerce of Hawaii during 2022-2023. He is also a board member of the Philippine Celebrations Coordinating Committee of Hawaii (PCCCH).",
    image: "/images/awardees/leaders/Rocky-A.-Anguay.webp",
  },
  "joy-barua": {
    type: "leader",
    name: "Joy Barua",
    bio: "Joy Barua is a multidisciplinary leader with diverse C-Suite portfolio in non-profit, small business lending, healthcare, higher education, insurance, and economic development sectors, spanning nearly three decades. He served in various executive roles including CEO, CFO and CMO. Presently, he serves as the President at Finance Insurance Ltd., and as lecturer for Hawaii Pacific University's College of Business for over 17 years. Joy holds an MBA in management and MA in organizational change. He also completed executive leadership programs at Harvard University's Business School, Law School and Kennedy School of Government. Recently, Joy was named among \\\"Hawaii's Most Admired Leaders\\\" by Pacific Business News, which also recognized him as \\\"Business Leader of the Year\\\" in 2020. He was first from Hawaii to be recognized nationally among \\\"Top 100 under 50 Emerging Leaders\\\" by Diversity MBA magazine. Locally, Hawaii Business magazine named him among \\\"20 for the Next 20 - People to Watch\\\". Joy is both an Omidyar Fellow and Pacific Century Fellow. His civic and professional engagements include over 30 initiatives and causes.",
    image: "/images/awardees/leaders/Joy-Barua.webp",
  },
  "ian-brooks": {
    type: "leader",
    name: "Ian Brooks",
    bio: "Ian, a U.S. Marine Corps veteran, served 23 years as a Marine Infantry Officer and Force Reconnaissance Officer, deploying to combat zones overseas multiple times. During a 2007 deployment as the Fox Company Commander for 2nd Battalion, 5th Marines, he was designated a U.S. Civil-Military Leader of Rhamadi, Iraq during the \\\"Awakening\\\" where the U.S. military partnered with local leaders to turn the tide against Al Qaeda in Iraq. He was awarded the Purple Heart and his efforts during the deployment were captured in an award-winning National Geographic special. He even has a street named after him in Rhamadi. Ian has a passion for sweet bourbons with a single large cube of ice. He is the perfect host to the many visitors of Ko'olau Distillery, loves the company of friends and shares his whiskey with anyone.",
    image: "/images/awardees/leaders/Ian-Brooks.webp",
  },
  "matthew-delany": {
    type: "leader",
    name: "Matthew Delany",
    bio: "LemMatthew S. Delaney is President & CEO of The Hawaii Group, leading HiAccounting, DemandHR, and HiHealthcare. For more than two decades, he has been a driving force for positive change in Hawai'i's business community, blending local insight with global experience to reshape the state's outsourcing landscape. Under his leadership, The Hawaii Group companies have repeatedly earned recognition for outstanding client service, business performance, and employee satisfaction. Earning his career, Matt held senior leadership roles in hospitality, real estate, and business process outsourcing, helping guide over 20 mergers and acquisitions and overseeing major resort developments in Hawai'i and abroad. Passionate about giving back, he served on the boards of Special Olympics Hawai'i, AccesSurf, Queen's Health Systems, Queen Emma Land Company, Waikiki Improvement Association, Hawaii Hotel Foundation, and the Hawai'i Hotel & Lodging Association, among others.",
    image: "/images/awardees/leaders/Matthew-Delane.webp",
  },
  "ernesto-maria-guieb": {
    type: "leader",
    name: "Ernesto & Maria Guieb",
    bio: "Guieb's Catering began as a passion project by Ernesto P. Guieb, Jr. and his wife, Maria driven by a love for family, food, and entrepreneurship. What started with word-of-mouth evolved into a catering business, leading to their first restaurant opening in 2020 amidst a global pandemic. Their dedication fueled growth, expanding to four successful locations: three in Oahu, Hawaii, and one in Las Vegas, Nevada. Ernesto's legacy embodies family, culinary passion, and entrepreneurial spirit, reflected in every dish and event. Maria, Ernesto's wife, a former legal secretary, joined him in 2019, showcasing their unwavering determination and vision. Their inspiring story is built on shared dreams, community, and a commitment to amazing food.",
    image: "/images/awardees/leaders/Ernesto-_-Maria-Guieb.webp",
  },
  "kristina-lockwood": {
    type: "leader",
    name: "Kristina Lockwood",
    bio: "Kristina Lockwood is Vice President and General Manager of Nexstar Media Group's Hawaii operations, overseeing KHON2, KHON2.com, KHII, Hawaii's CW, Nexstar Digital Hawaii, and the KHON+ app. Since 2013, she has led KHON's expansion into a multi-platform media company. She launched programs including KHON2 News at 9, Take 2, and Living808, and added KHII Channel 5 in 2019. She received the American Advertising Federation District 13 Silver Medal Award in 2025 and two Regional Emmy Awards in 2024. She previously worked at MidWeek, KGMB, KITV, and Cox Media California. She graduated from Kaiser High School and Hawaii Pacific University and serves on the board of 'Ahahui Koa Ānuenue.",
    image: "/images/awardees/leaders/Kristina-Lockwood.webp",
  },
  "jessica-munoz": {
    type: "leader",
    name: "Jessica Munoz",
    bio: "Jessica R. Muñoz is a nurse practitioner, social innovator, and the founder of Hoʻōla Nā Pua, an internationally recognized nonprofit dedicated to shining the light on the sexual exploitation of children and creating pathways of healing for youth. With more than 19 years in emergency and trauma care, Jessica has pioneered new approaches to justice and care—raising millions to expand services, cultivating national partnerships, and establishing Pearl Haven, Hawaiʻi's first residential treatment campus for trafficked girls. Her leadership extends globally, where she trains and advises on trauma-informed care and collaborates across sectors to strengthen solutions for vulnerable populations. Honored as a thought leader and humanitarian, Jessica embodies courage, vision, and aloha, inspiring systemic change, empowering communities, and advancing a future where every child can live safe, free, and full of hope.",
    image: "/images/awardees/leaders/Jessica-Munoz.webp",
  },
}

export default function AwardeePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const awardee = awardeesData[slug]

  if (!awardee) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Awardee Not Found</h1>
          <p className="text-foreground/70 mb-8">The awardee you're looking for doesn't exist.</p>
          <Link
            href="/awardees"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Awardees
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const getIcon = () => {
    switch (awardee.type) {
      case "hero":
        return <Trophy className="w-8 h-8" />
      case "scholarship":
        return <GraduationCap className="w-8 h-8" />
      case "entrepreneur":
        return <TrendingUp className="w-8 h-8" />
      case "leader":
        return <Briefcase className="w-8 h-8" />
      default:
        return <Trophy className="w-8 h-8" />
    }
  }

  const getColor = () => {
    switch (awardee.type) {
      case "hero":
        return {
          primary: "text-amber-500",
          bg: "bg-amber-500/10",
          gradient: "from-amber-50/50 to-background",
          badge: "bg-gradient-to-br from-amber-500 to-amber-600",
          link: "text-amber-500 hover:text-amber-600",
        }
      case "scholarship":
        return {
          primary: "text-orange-600",
          bg: "bg-orange-500/10",
          gradient: "from-orange-50/50 to-background",
          badge: "bg-gradient-to-br from-orange-500 to-orange-600",
          link: "text-orange-600 hover:text-orange-700",
        }
      case "entrepreneur":
        return {
          primary: "text-blue-600",
          bg: "bg-blue-500/10",
          gradient: "from-blue-50/50 to-background",
          badge: "bg-gradient-to-br from-blue-500 to-blue-600",
          link: "text-blue-600 hover:text-blue-700",
        }
      case "leader":
        return {
          primary: "text-orange-600",
          bg: "bg-gradient-to-r from-orange-500/10 to-blue-500/10",
          gradient: "from-orange-50/50 via-blue-50/50 to-background",
          badge: "bg-gradient-to-br from-orange-600 to-blue-600",
          link: "text-orange-600 hover:text-orange-700",
        }
      default:
        return {
          primary: "text-amber-500",
          bg: "bg-amber-500/10",
          gradient: "from-amber-50/50 to-background",
          badge: "bg-gradient-to-br from-amber-500 to-amber-600",
          link: "text-amber-500 hover:text-amber-600",
        }
    }
  }

  const colors = getColor()

  const getTypeLabel = () => {
    switch (awardee.type) {
      case "hero":
        return "Hero Awardee"
      case "scholarship":
        return "Scholarship Recipient 2025"
      case "entrepreneur":
        return "Entrepreneur Award 2025"
      case "leader":
        return "Business Leader 2025"
      default:
        return "Awardee"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef as any} className={`pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b ${colors.gradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-8 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <Link
              href="/awardees"
              className={`inline-flex items-center gap-2 ${colors.link} font-semibold transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Awardees
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <div
              className={`md:col-span-2 transition-all duration-700 ${heroVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              {awardee.images && awardee.images.length > 1 ? (
                <div className="grid grid-cols-2 gap-4">
                  {awardee.images.map((img: string, idx: number) => (
                    <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src={img} alt={`${awardee.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src={awardee.image} alt={awardee.name} className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div
                className={`inline-flex items-center gap-2 ${colors.bg} ${colors.primary} px-4 py-2 rounded-full mb-4 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                {getIcon()}
                <span className="font-semibold text-sm">{getTypeLabel()}</span>
              </div>

              <h1
                className={`text-4xl md:text-5xl font-bold text-foreground mb-3 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                {awardee.name}
              </h1>

              {awardee.title && (
                <p
                  className={`text-xl text-foreground/70 font-semibold mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "400ms" }}
                >
                  {awardee.title}
                </p>
              )}

              {awardee.school && (
                <div
                  className={`mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "500ms" }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-lg font-semibold text-foreground/80">{awardee.school}</p>
                    {awardee.gpa && (
                      <span className={`${colors.badge} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                        {awardee.gpa}
                      </span>
                    )}
                  </div>
                  {awardee.major && <p className="text-base text-foreground/60 font-medium mt-2">{awardee.major}</p>}
                </div>
              )}

              {awardee.business && (
                <p
                  className={`text-xl font-bold ${colors.primary} mb-6 transition-all duration-700 ${heroVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "500ms" }}
                >
                  {awardee.business}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section ref={contentRef as any} className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">{awardee.bio}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`mt-12 p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} border-2 border-foreground/5 transition-all duration-700 ${contentVisible ? "scale-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Support Our Mission</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Help us continue empowering exceptional individuals like {awardee.name.split(" ")[0]} through scholarships,
              mentorship programs, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className={`${colors.badge} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center`}
              >
                Make a Donation
              </Link>
              <Link
                href="/join"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div
            className={`mt-12 text-center transition-all duration-700 ${contentVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/awardees"
              className={`inline-flex items-center gap-2 ${colors.link} font-semibold transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" /> View All Awardees
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

