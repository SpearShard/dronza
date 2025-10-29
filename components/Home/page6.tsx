"use client";

export default function TeamSection() {
  const team = [
    {
      name: "Stephan Humbert",
      role: "Photographer",
      image: "/team1.jpg",
      socials: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
      name: "Leo Simon",
      role: "Creative Director",
      image: "/team2.jpg",
      socials: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
      name: "John Casey",
      role: "Photographer",
      image: "/team3.jpg",
      socials: ["Facebook", "Twitter", "LinkedIn"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="text-center mb-12">
        <p className="text-red-600 uppercase font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-red-600"></span>
          Arial Photography
          <span className="w-8 h-[1px] bg-red-600"></span>
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900">
          Our Dedicated Team
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-red-600 text-sm font-medium">
                {member.role}
              </p>
              <h3 className="text-lg font-extrabold text-gray-900 mt-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {member.socials.join(" — ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
