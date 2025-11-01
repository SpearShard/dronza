"use client";
import Image from "next/image";

export default function LatestNews() {
  const news = [
    {
      date: "December 13, 2020",
      title: "How To Start A Drone Photography",
      desc: "suffered alteration in some form, by injected humor, or randomize.",
    },
    {
      date: "December 13, 2020",
      title: "How Amazon Is Integrating Drones",
      desc: "suffered alteration in some form, by injected humor, or randomize.",
    },
    {
      date: "December 13, 2020",
      title: "How Amazon Is Integrating Drones",
      desc: "suffered alteration in some form, by injected humor, or randomize.",
    },
    {
      date: "December 13, 2020",
      title: "How To Start A Drone Photography",
      desc: "suffered alteration in some form, by injected humor, or randomize.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-10 h-[2px] bg-[#038BD5]"></div>
          <p className="text-[#038BD5] font-semibold">Our Latest News</p>
          <div className="w-10 h-[2px] bg-[#038BD5]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          The latest news from drones life
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-6xl mx-auto">
        {/* Large image card */}
        <div className="relative w-full md:w-[45%] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/drone.jpg"
            alt="Drone"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-sm shadow-md w-[85%]">
            <p className="text-[#038BD5] text-sm font-semibold mb-1">
              December 13, 2020
            </p>
            <h3 className="font-extrabold text-lg text-gray-900">
              Drone Videography Price Makes You Surprises
            </h3>
          </div>
        </div>

        {/* Right side cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {news.map((item, i) => (
            <div
              key={i}
              className="group bg-white hover:bg-[#038BD5] hover:text-white transition-all duration-300 rounded-md shadow-md p-6 cursor-pointer"
            >
              <p className="text-[#038BD5] group-hover:text-white text-sm font-semibold mb-2">
                {item.date}
              </p>
              <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-white mb-4 text-sm">
                {item.desc}
              </p>
              <span className="text-[#038BD5] group-hover:text-white font-semibold text-sm flex items-center gap-2">
                Read More <span className="w-6 h-[2px] bg-[#038BD5] group-hover:bg-white inline-block"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
