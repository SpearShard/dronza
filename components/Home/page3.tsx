"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function HowItWorks() {
  const controls = useAnimation();

  // Square animation loop
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ x: 100, y: 0, transition: { duration: 1.5 } });
        await controls.start({ x: 100, y: 100, transition: { duration: 1.5 } });
        await controls.start({ x: 0, y: 100, transition: { duration: 1.5 } });
        await controls.start({ x: 0, y: 0, transition: { duration: 1.5 } });
      }
    };
    sequence();
  }, [controls]);

  const leftPoints = [
    { title: "How To Use Controller", desc: "The majority have suffered alteration in some form, by injected humor." },
    { title: "How To Fly Drone", desc: "The majority have suffered alteration in some form, by injected humor." },
    { title: "How To Use Controller", desc: "The majority have suffered alteration in some form, by injected humor." },
  ];

  const rightPoints = [
    { title: "How To Use Battery", desc: "The majority have suffered alteration in some form, by injected humor." },
    { title: "How To Play Video", desc: "The majority have suffered alteration in some form, by injected humor." },
    { title: "How To Control Camera", desc: "The majority have suffered alteration in some form, by injected humor." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center space-x-4 text-red-600">
          <div className="w-10 h-[2px] bg-red-600"></div>
          <p className="uppercase tracking-wide font-medium">You Will Love It.</p>
          <div className="w-10 h-[2px] bg-red-600"></div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">How It Works</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8 relative">
        {/* Left Points */}
        <div className="space-y-12">
          {leftPoints.map((item, i) => (
            <div key={i} className="flex items-center justify-end text-right space-x-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
              <span className="text-gray-300 text-4xl font-bold">{`0${i + 1}`}</span>
            </div>
          ))}
        </div>

        {/* Center Drone */}
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 border-8 border-red-600 absolute rounded-sm" />
          <motion.div animate={controls} className="relative z-10">
            <Image
              src="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/d-1-1.png"
              alt="Drone"
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Right Points */}
        <div className="space-y-12">
          {rightPoints.map((item, i) => (
            <div key={i} className="flex items-center justify-start space-x-6">
              <span className="text-gray-300 text-4xl font-bold">{`0${i + 4}`}</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
