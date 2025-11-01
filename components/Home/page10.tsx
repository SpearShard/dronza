"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TestimonialSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // background slide
    gsap.to(bgRef.current, {
      backgroundPositionX: "-1000px",
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    // drone float
    gsap.to(droneRef.current, {
      y: -30,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative bg-cover bg-center overflow-hidden text-white py-24 md:py-36"
      style={{
        backgroundImage:
          "url('https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/bg-2-scaled.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        {/* Left: Text */}
        <div className="md:w-1/2 z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-[#038BD5]"></div>
            <p className="text-[#0079C0] font-semibold text-sm">
              Client Feedback
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            What Some People Say About Us.
          </h2>
        </div>

        {/* Right: Drone + Testimonial Card */}
        <div className="md:w-1/2 relative flex flex-col items-center">
          <img
            ref={droneRef}
            src="https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/d-testimonial.png"
            alt="Drone"
            className="w-[350px] md:w-[450px] z-10"
          />

          {/* Testimonial Card */}
          <div className="absolute bottom-[-180px] md:bottom-[-200px] right-0 bg-white text-gray-800 w-[90%] md:w-[480px] shadow-lg">
            <div className="p-8 text-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#038BD5] mb-4 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 11H7l1-4H4v6h5v6h4V7H9zM19 11h-2l1-4h-4v6h5v6h4V7h-4z" />
              </svg>
              <p className="italic text-sm md:text-base leading-relaxed">
                Aliquam sit amet eleifend odio. Donec at dictum mi. Duis auctor,
                tellus a elementum pharetra, sapien magna rhoncus velit, id
                blandit mauris dolor eu turpis. Aenean aliquam nisl aliquam,
                suscipit ligula sit amet, mattis libero.
              </p>
            </div>
            <div className="bg-[#0079C0] text-white text-center py-8 relative">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="Client"
                className="w-16 h-16 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -top-8"
              />
              <h3 className="text-lg font-bold mt-6">John Casey</h3>
              <p className="text-sm opacity-80">Designer</p>
              <div className="mt-4 text-xs tracking-widest">1 / 4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
