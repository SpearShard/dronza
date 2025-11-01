"use client";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "🔒",
    title: "How To Use Battery",
    text: "The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.",
  },
  {
    icon: "🏅",
    title: "How To Use Controller",
    text: "The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.",
  },
  {
    icon: "💎",
    title: "How To Fly Drone",
    text: "The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.",
  },
];

export default function AboutQualitySection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* background */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=1600&q=80')",
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white mb-20">
          <p className="text-[#0079C0] font-semibold tracking-wide">
            About Quality
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            We're about Quality <br /> and Trust.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative bg-white shadow-lg p-10 text-center transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl text-[#0079C0] mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">{card.text}</p>
              <a
                href="#"
                className="text-[#0079C0] font-semibold hover:underline inline-flex items-center justify-center"
              >
                Read More <span className="ml-2">→</span>
              </a>

              {/* bottom-left L */}
              <div className="absolute bottom-0 left-0">
                <div className="bg-[#0079C0] w-[5px] h-[25px] absolute bottom-0 left-0"></div>
                <div className="bg-[#0079C0] w-[25px] h-[5px] absolute bottom-0 left-0"></div>
              </div>

              {/* bottom-right L */}
              <div className="absolute bottom-0 right-0">
                <div className="bg-[#0079C0] w-[5px] h-[25px] absolute bottom-0 right-0"></div>
                <div className="bg-[#0079C0] w-[25px] h-[5px] absolute bottom-0 right-0"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text + play button */}
        <div className="mt-20 text-center">
          <p className="font-semibold text-gray-800 mb-6 text-lg">
            Delivering Help And Hope To People Through Sponsorship
          </p>
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-[6px] border-[#0079C0]">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#0079C0] border-b-[10px] border-b-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
