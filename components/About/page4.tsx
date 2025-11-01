"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoGallery() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timelines: gsap.core.Timeline[] = [];

    cardsRef.current.forEach((card) => {
      if (!card) return;

      const tl = gsap.timeline({ paused: true });
      const lines = card.querySelectorAll(".corner-line");

      tl.to(lines, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
      });

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      timelines.push(tl);
    });

    // Cleanup function
    return () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const tl = timelines[index];
        card.removeEventListener("mouseenter", () => tl.play());
        card.removeEventListener("mouseleave", () => tl.reverse());
      });
      timelines.forEach(tl => tl.kill());
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1505739998589-00fc191ce01b?w=800",
    "https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  ];

  return (
    <section className="bg-[#038BD5] text-white py-24 px-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-8 h-[2px] bg-white"></span>
              <span className="uppercase text-sm tracking-wider font-semibold">
                video gallery
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight max-w-xl">
              Visit our best video gallery
            </h1>
          </div>
          <p className="text-sm leading-relaxed max-w-md text-[#f5caca] mt-2">
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized words which don't look even slightly.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="relative group overflow-hidden"
            >
              <img
                src={src}
                alt={`video-${i}`}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-5 left-5 w-10 h-10 bg-[#0079C0] flex items-center justify-center text-white text-lg">
                ▶
              </button>

              {/* Bottom left corner L */}
              <span className="corner-line absolute bottom-0 left-0 w-8 h-[2px] bg-white scale-x-0 origin-left opacity-0"></span>
              <span className="corner-line absolute bottom-0 left-0 w-[2px] h-8 bg-white scale-y-0 origin-bottom opacity-0"></span>

              {/* Bottom right corner L */}
              <span className="corner-line absolute bottom-0 right-0 w-8 h-[2px] bg-white scale-x-0 origin-right opacity-0"></span>
              <span className="corner-line absolute bottom-0 right-0 w-[2px] h-8 bg-white scale-y-0 origin-bottom opacity-0"></span>
            </div>
          ))}
        </div>

        {/* Page indicator */}
        <div className="text-sm mt-4 tracking-widest font-semibold">
          1 <span className="opacity-60">/ 3</span>
        </div>
      </div>
    </section>
  );
}
