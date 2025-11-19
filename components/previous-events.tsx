import { Calendar, Users, Award, Heart } from "lucide-react"

export default function PreviousEvents() {
  const events = [
    {
      title: "2024 Annual Scholarship Gala",
      date: "October 25, 2024",
      location: "Honolulu Convention Center",
      description:
        "Our most successful gala to date, celebrating outstanding Filipino-American students with over $50,000 in scholarships awarded.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tPHoZHu3iiIAI1MFwloWH-ULGUZlPkcQQ1Vdks9BF6Y8cwZw35Wa.png",
      attendees: "250+",
      scholarships: "$50,000",
    },
    {
      title: "Professional Networking Mixer",
      date: "September 15, 2024",
      location: "Hilton Hawaiian Village",
      description:
        "An evening of networking and mentorship connecting young professionals with established business leaders in the Filipino-American community.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/fuddLIfStTMTgPmDiij09-ma1GOl8drulaWf1Wjyb3eKKa3fJhNz.png",
      attendees: "150+",
      connections: "200+",
    },
    {
      title: "Leadership Development Workshop",
      date: "August 10, 2024",
      location: "University of Hawaii at Manoa",
      description:
        "A full-day workshop focused on developing leadership skills, cultural identity, and professional excellence for Filipino-American students.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2xMe2Ul1qd1dxAFn50zFq-DnnvkS0hVC4G4ReRC3dpnl8P03weor.png",
      attendees: "100+",
      workshops: "5",
    },
    {
      title: "Community Service Day",
      date: "June 20, 2024",
      location: "Kalihi Community Center",
      description:
        "Members and scholarship recipients came together for a day of community service, giving back to the neighborhoods that support our mission.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pnFhDxR5wtpmGo5J4yFoL-gt9B2wvmSBdiHaP7ZX5b8w8qnvSlfe.png",
      attendees: "80+",
      hours: "300+",
    },
  ]

  return (
    <section id="previous-events" className="py-16 md:py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar size={40} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Previous Events</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Celebrating our community through impactful events and memorable moments throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-foreground/60 mb-4 flex items-center gap-2">
                  <Calendar size={16} />
                  {event.location}
                </p>
                <p className="text-base text-foreground/80 leading-relaxed mb-6">{event.description}</p>
                <div className="flex flex-wrap gap-4">
                  {event.attendees && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={18} className="text-primary" />
                      <span className="font-semibold">{event.attendees}</span>
                      <span className="text-foreground/60">Attendees</span>
                    </div>
                  )}
                  {event.scholarships && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={18} className="text-primary" />
                      <span className="font-semibold">{event.scholarships}</span>
                      <span className="text-foreground/60">Awarded</span>
                    </div>
                  )}
                  {event.connections && (
                    <div className="flex items-center gap-2 text-sm">
                      <Heart size={18} className="text-primary" />
                      <span className="font-semibold">{event.connections}</span>
                      <span className="text-foreground/60">Connections</span>
                    </div>
                  )}
                  {event.workshops && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={18} className="text-primary" />
                      <span className="font-semibold">{event.workshops}</span>
                      <span className="text-foreground/60">Workshops</span>
                    </div>
                  )}
                  {event.hours && (
                    <div className="flex items-center gap-2 text-sm">
                      <Heart size={18} className="text-primary" />
                      <span className="font-semibold">{event.hours}</span>
                      <span className="text-foreground/60">Service Hours</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
