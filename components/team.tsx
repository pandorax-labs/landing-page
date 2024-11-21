import Image from 'next/image'

const team = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech",
    image: "/placeholder.svg"
  },
  {
    name: "John Smith",
    role: "CTO",
    bio: "Blockchain expert and software architect",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Johnson",
    role: "Creative Director",
    bio: "Award-winning designer and UX specialist",
    image: "/placeholder.svg"
  }
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-neutral-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}