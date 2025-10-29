"use client";

export default function StatsSection() {
  const stats = [
    { value: "50", label: "Satisfied Clients" },
    { value: "2160", label: "4K Resolution" },
    { value: "45", label: "Flight Time" },
    { value: "10", label: "Project Done" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative border border-gray-200 py-10 transition-transform duration-300 hover:scale-105"
          >
            {/* Red corner brackets */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></span>
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"></span>
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"></span>
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></span>

            <h2 className="text-5xl font-extrabold text-black">{stat.value}</h2>
            <p className="text-red-600 font-medium mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
