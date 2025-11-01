"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ServicesPage() {
  const services = [
    {
      title: "Event Photography",
      desc: "Our team has decades of film and tech experience. We know how to deliver amazing results every time.",
      img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic5-3.jpg",
    },
    {
      title: "Aerial Filming",
      desc: "We deliver cinematic visuals from unique aerial perspectives.",
      img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic5-3.jpg",
    },
    {
      title: "Drone Surveys",
      desc: "Accurate mapping and inspection using high-end drone technology.",
      img: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic5-3.jpg",
    },
  ];

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handlers: Array<{ card: HTMLDivElement; enter: () => void; leave: () => void }> = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const img = card.querySelector(".service-img");
      const content = card.querySelector(".service-content");

      if (!img || !content) return;

      gsap.set(content, { opacity: 0, scale: 0.95, y: 20 });

      const handleMouseEnter = () => {
        const tl = gsap.timeline();
        tl.to(img, {
          scale: 0.9,
          y: 60,
          duration: 0.5,
          ease: "power3.out",
        })
          .to(
            content,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "+=0.1" // delay after image animation
          );
      };

      const handleMouseLeave = () => {
        const tl = gsap.timeline();
        tl.to(content, {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration: 0.4,
          ease: "power3.inOut",
        }).to(
          img,
          {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.1"
        );
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      handlers.push({ card, enter: handleMouseEnter, leave: handleMouseLeave });
    });

    // Cleanup function
    return () => {
      handlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2px] bg-[#0079C0]"></div>
              <span className="text-[#0079C0] font-semibold text-sm tracking-wide">
                All Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Explore Our Main <br /> Services
            </h2>
          </div>
          <p className="max-w-md text-gray-700 mt-6 md:mt-0 text-base leading-relaxed">
            We provide expert inspection services for your organization’s mission-critical assets using drone technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="relative group overflow-hidden bg-white shadow-md cursor-pointer h-[320px]"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={600}
                height={400}
                className="service-img w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-8 bg-white service-content">
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.desc}
                </p>
                <button className="text-[#0079C0] font-semibold mt-4 flex items-center space-x-2">
                  <span>Read More</span>
                  <span className="w-6 h-[1.5px] bg-[#0079C0]"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
