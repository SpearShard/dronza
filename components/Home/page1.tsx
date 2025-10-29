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
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/d-1-1.png",
  },
  {
    id: 2,
    titleWhite: "Precision Control",
    titleRed: "Built for Performance",
    desc: "Experience total stability and control in every flight.",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/d-2-1.png",
  },
  {
    id: 3,
    titleWhite: "Aerial Vision",
    titleRed: "Beyond Boundaries",
    desc: "Discover the power of perspective with high-definition vision.",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/slide1-1.jpg",
    drone: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/d-3.png",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slidesEl = containerRef.current?.querySelectorAll(".slide");
    if (!slidesEl) return;

    // Continuous orbit animation for all drones
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
            autoRotate: false,
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
    <section className="relative w-full h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-[100%] h-full transition-transform duration-700"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide relative w-full h-full flex-shrink-0 bg-cover bg-center flex items-center justify-between px-24"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Text */}
            <div className="text-block text-white max-w-lg">
              <h2 className="text-2xl font-light">{slide.titleWhite}</h2>
              <h1 className="text-6xl font-bold text-red-500 mt-2">
                {slide.titleRed}
              </h1>
              <p className="mt-4 text-lg text-gray-200">{slide.desc}</p>
              <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                Ask For Price
              </button>
            </div>

            {/* Drone + rectangle */}
            <div className="relative  h-64 flex items-center justify-center ">
              <div className="rectangle absolute w-48 h-32 bg-white/20 backdrop-blur-md rounded-md"></div>
              <div className=" drone relative h-[27vw]  w-[37vw]">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-16 h-1 bg-white/40 ${
              i === 0 ? "bg-white" : ""
            } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
}
