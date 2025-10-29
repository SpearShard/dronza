"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DroneSection() {
  const droneRef = useRef<HTMLImageElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!droneRef.current) return;

    // kill existing in case of HMR
    gsap.killTweensOf(droneRef.current);

    // bob up and down with GSAP
    tlRef.current = gsap.to(droneRef.current, {
      y: -18,                 // how far up
      duration: 1.6,          // speed of one half-cycle
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      gsap.killTweensOf(droneRef.current as Element);
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: framed drone */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative bg-red-600 p-10">
            <div className="bg-white p-8 w-[420px] h-[420px] flex items-center justify-center">
              <img
                ref={droneRef}
                src="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/Untitled-1.png"
                alt="Drone"
                className="w-[320px] h-auto object-contain will-change-transform"
              />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="md:w-1/2">
          <p className="text-red-600 font-semibold mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Specializing in Drone Services, and Aerial Photography
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-4 text-lg">
              <span className="text-lg">📱</span>
              <span className="font-medium">Mobile Device Supported</span>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <span className="text-lg">🎮</span>
              <span className="font-medium">Easy integrative control</span>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <span className="text-lg">⚙️</span>
              <span className="font-medium">Customized Commands</span>
            </li>
          </ul>

          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
