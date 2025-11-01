"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VideoGallery() {
  return (
    <section
      className="relative bg-black text-white py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Header Section */}
        <div className="md:flex md:items-start md:justify-between mb-12">
          <div className="max-w-lg">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
              — Video Gallery
            </p>
            <h2 className="text-5xl font-extrabold leading-tight">
              Visit our best video <br /> gallery
            </h2>
          </div>

          <p className="max-w-md text-gray-300 mt-6 md:mt-0 md:text-right">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized words which don’t look even slightly.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative flex flex-col items-center md:items-start">
          {/* Red bracket on the left */}
          <div className="absolute -left-6 top-0 bottom-0 w-0 border-l-8 border-[#0079C0] rounded-sm"></div>
          <div className="absolute -left-6 top-0 w-24 h-0 border-t-8 border-[#0079C0] rounded-sm"></div>
          <div className="absolute -left-6 bottom-0 w-24 h-0 border-b-8 border-[#0079C0] rounded-sm"></div>

          {/* Main Video Thumbnail */}
          <motion.div
            className="relative overflow-hidden rounded-md shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1508612761958-e931e1a1a7e2?auto=format&fit=crop&w=1200&q=80"
              alt="Drone video"
              width={800}
              height={450}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 flex items-center space-x-4">
              <button className="bg-[#0079C0] p-2 rounded text-white hover:bg-red-700 transition">
                <i className="fa fa-play"></i>
              </button>
              <button className="bg-[#0079C0] p-2 rounded text-white hover:bg-red-700 transition">
                <i className="fa fa-link"></i>
              </button>
              <h3 className="text-lg font-semibold ml-2">
                How to Fly a Quadcopter
              </h3>
            </div>
          </motion.div>

          {/* Thumbnail Previews */}
          <div className="flex space-x-3 mt-4">
            {[
              "https://images.unsplash.com/photo-1508612761958-e931e1a1a7e2?auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1492176861288-6b486b1d4f5a?auto=format&fit=crop&w=300&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Preview ${i + 1}`}
                  width={150}
                  height={80}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
