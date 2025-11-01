"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const slides = [
  {
    id: 1,
    titleWhite: "Innovative Drones",
    titleRed: "Redefining Flight",
    desc: "Cutting-edge drone technology for aerial excellence.",
    img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/d-1-1.png",
  },
  {
    id: 2,
    titleWhite: "Precision Control",
    titleRed: "Built for Performance",
    desc: "Experience total stability and control in every flight.",
    img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/d-2-1.png",
  },
  {
    id: 3,
    titleWhite: "Aerial Vision",
    titleRed: "Beyond Boundaries",
    desc: "Discover the power of perspective with high-definition vision.",
    img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/d-3.png",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slidesEl = containerRef.current?.querySelectorAll(".slide");
    if (!slidesEl) return;

    // Drone orbit animation
    slidesEl.forEach((slide, i) => {
      const droneEl = slide.querySelector(".drone img, rectangle");
      if (droneEl) {
        gsap.to(droneEl, {
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: 60, y: -60 },
              { x: 0, y: -120 },
              { x: -60, y: -60 },
              { x: 0, y: 0 },
            ],
            curviness: 1.5,
          },
          duration: 6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
        });
      }
    });

    // Slide transitions
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    slidesEl.forEach((slide, i) => {
      tl.to(containerRef.current, {
        xPercent: -100 * i,
        duration: 1,
        ease: "power2.inOut",
      })
        .fromTo(
          slide.querySelector(".text-block"),
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .to({}, { duration: 2 });
    });
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-full h-full transition-transform duration-700"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide relative w-full h-full flex-shrink-0 bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Text Section */}
            <div className="text-block text-white max-w-lg text-center md:text-left mb-10 md:mb-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light">
                {slide.titleWhite}
              </h2>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#038BD5] mt-2">
                {slide.titleRed}
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                {slide.desc}
              </p>
              <button className="mt-6 px-6 py-3 bg-[#038BD5] text-white font-semibold rounded-md hover:bg-[#0079C0] transition-colors text-sm sm:text-base">
                Ask For Price
              </button>
            </div>

            {/* Drone Image + Rectangle */}
            <div className="relative flex items-center justify-center h-[40vw] sm:h-[30vw] md:h-[25vw] w-full md:w-1/2">
              <div className="rectangle absolute w-40 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 bg-white/20 backdrop-blur-md rounded-md"></div>
              <div className="drone relative h-full w-full max-w-[400px] md:max-w-[500px]">
                <Image
                  src={slide.drone}
                  alt="Drone"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-8 sm:w-12 md:w-16 h-1 bg-white/40 ${
              i === 0 ? "bg-white" : ""
            } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
}
