"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w1.png",
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w2.png",
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w3.png",
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w4.png",
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w5.png",
  "https://gridvalley.net/wp/dronza/wp-content/uploads/2021/01/w6.png",
];

export default function PartnerLogos() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white py-10 overflow-hidden border-t border-gray-200">
      <div className="relative w-full overflow-hidden">
        <div ref={stripRef} className="flex gap-20 w-[200%]">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner logo ${i + 1}`}
              className="h-16 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
