"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutQuality() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });
    }
  }, []);

  return (
    <section className="bg-black text-white py-24 px-6  md:px-12 lg:px-24 flex flex-col md:flex-row gap-[5vw] justify-center">
      {/* Left - Circular video section */}
      <div className="relative flex items-center justify-center w-[30vw] h-[30vw] ">
        {/* Orbit container with GSAP animation */}
        <div
          ref={orbitRef}
          className="absolute w-[110%] h-[110%] rounded-full border-[2px] border-gray-600"
        >
          {/* Red dots slightly outside the white ring */}
          <span className="absolute w-4 h-4 bg-[#0079C0] rounded-full top-[-10px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"></span>
          <span className="absolute w-4 h-4 bg-[#0079C0] rounded-full bottom-[-10px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"></span>
          <span className="absolute w-4 h-4 bg-[#0079C0] rounded-full top-1/2 left-[-10px] -translate-y-1/2 shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"></span>
          <span className="absolute w-4 h-4 bg-[#0079C0] rounded-full top-1/2 right-[-10px] -translate-y-1/2 shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"></span>
        </div>

        {/* Image or video inside circle */}
        <div className=" relative w-[30vw] h-[30vw]  rounded-full overflow-hidden z-10">
          <img
            src="https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/bg-9.jpg"
            alt="city"
            className="w-full h-full object-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-[#0079C0]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Text content */}
      <div className=" max-w-lg text-left flex flex-col justify-center">
        <p className="text-sm text-gray-300 uppercase tracking-wide flex items-center gap-2">
          <span className="w-8 h-[1px] bg-white"></span> About Quality
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          We’re about <span className="text-white">Quality</span> and{" "}
          <span className="text-white">Trust.</span>
        </h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly.
        </p>

        <button className="mt-8 bg-[#0079C0] hover:bg-red-700 text-white font-semibold px-6 py-3 transition-colors">
          Read More
        </button>
      </div>
    </section>
  );
}
