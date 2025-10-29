"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Camera,
  Map,
  Drone,
  Video,
  Package,
  Shield,
  Headphones,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Event Photography",
      desc: "Our team has decades of film and tech experience. We know how to deliver amazing results every time.",
      icon: <Camera size={48} className="text-red-600" />,
    },
    {
      title: "Aerial Survey & Inspection",
      desc: "We know how to deliver precise and safe inspection services for any terrain.",
      icon: <Map size={48} className="text-red-600" />,
    },
    {
      title: "Professional Photography",
      desc: "High-quality professional shots that capture the essence of every moment.",
      icon: <Drone size={48} className="text-red-600" />,
    },
    {
      title: "360 VR Services",
      desc: "Immersive experiences created with expert VR filming and editing.",
      icon: <Video size={48} className="text-red-600" />,
    },
    {
      title: "Delivery Services",
      desc: "Efficient, secure, and innovative drone delivery solutions for modern logistics.",
      icon: <Package size={48} className="text-red-600" />,
    },
    {
      title: "Public Safety",
      desc: "Our drones provide real-time aerial surveillance for critical operations.",
      icon: <Shield size={48} className="text-red-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-[2px] bg-red-600"></div>
            <p className="text-red-600 font-medium text-sm">
              The Best Drone Services
            </p>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Explore Our Main Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const circle = circleRef.current;
    const text = textRef.current;
    if (!card || !circle || !text) return;

    gsap.set(circle, { scale: 0, transformOrigin: "bottom left" });

    const hoverIn = () => {
      gsap.to(circle, { scale: 4, duration: 0.6, ease: "power2.out" });
      gsap.to(text, { color: "#ffffff", duration: 0.3, ease: "power1.out" });
      gsap.to(text.querySelectorAll("svg"), { color: "#ffffff", duration: 0.3 });
    };

    const hoverOut = () => {
      gsap.to(circle, { scale: 0, duration: 0.6, ease: "power2.in" });
      gsap.to(text, { color: "#000000", duration: 0.3, ease: "power1.in" });
      gsap.to(text.querySelectorAll("svg"), {
        color: "#dc2626",
        duration: 0.3,
      });
    };

    card.addEventListener("mouseenter", hoverIn);
    card.addEventListener("mouseleave", hoverOut);

    return () => {
      card.removeEventListener("mouseenter", hoverIn);
      card.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-white p-8 shadow-md border border-gray-200 overflow-hidden cursor-pointer group h-72 flex flex-col justify-between"
    >
      {/* Circle Overlay */}
      <div
        ref={circleRef}
        className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-tr-full z-0"
      ></div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 flex flex-col h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{desc}</p>
        <span className="text-red-600 font-semibold text-sm flex items-center space-x-2">
          <span>Read More</span>
          <div className="w-6 h-[2px] bg-red-600"></div>
        </span>
      </div>
    </div>
  );
}
