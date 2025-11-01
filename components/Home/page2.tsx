"use client";
import { FaMobileAlt, FaGamepad, FaMicrochip } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#f9f9f9] text-[#0d0d0d] py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-16 gap-12">
        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Red top-left corner accent */}
          <div className="absolute -top-8 -left-8 w-[15vw] h-[15vw] bg-[#0079C0] z-0"></div>

          {/* Main Image */}
          <img
            src="https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/bg-1-1.jpg"
            alt="Drone Aerial View"
            className="relative z-10 w-full max-w-md lg:max-w-full object-cover"
          />

          {/* Bottom-right red HD 4K badge */}
          <div className="h-[7vw] w-[15vw] right-[7vw] absolute bottom-0 right-0 bg-[#0079C0] px-8 py-6 z-20">
            <h3 className="text-white text-5xl font-extrabold leading-none">
              HD 4K
            </h3>
            <p className="text-white text-xl font-semibold mt-1">
              Resolution!
            </p>

            {/* Diagonal corner cut effect */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-[#0079C0]"></div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#0079C0] uppercase tracking-wide font-semibold mb-3">
            About
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug mb-4">
            Specializing in Drone Services, and Aerial Photography
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FaMobileAlt className="text-[#0079C0] text-xl" />
              <p className="font-semibold">Mobile Device Supported</p>
            </div>

            <div className="flex items-center gap-3">
              <FaGamepad className="text-[#0079C0] text-xl" />
              <p className="font-semibold">Easy integrative control</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMicrochip className="text-[#0079C0] text-xl" />
              <p className="font-semibold">Customized Commands</p>
            </div>
          </div>

          <button className="bg-[#0079C0] text-white px-6 py-3 font-semibold hover:bg-red-700 transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
