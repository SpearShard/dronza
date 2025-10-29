"use client";
import Image from "next/image";
import React from "react";

type Item = {
  id: number;
  title: string;
  description?: string;
  // you can replace this with a component prop for custom icons
};

const items: Item[] = [
  { id: 1, title: "High Performance" },
  { id: 2, title: "Reliable Design" },
  { id: 3, title: "24/7 Support" },
];

export default function SplitFeature({
  imgSrc = "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/bg-1-1.jpg",
  alt = "Feature image",
  title = "Bold Black Title Goes Here",
  subtitle = "Smaller supporting paragraph that explains the title in one or two sentences. Keep it short and useful.",
  ctaText = "Read More",
}: {
  imgSrc?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="absolute h-[5vw] w-[5vw] bg-red-500 ">
            </div>
          {/* LEFT - IMAGE */}
          <div className="w-full h-72 md:h-[520px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imgSrc}
              alt={alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT - TEXT */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              {title}
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              {subtitle}
            </p>

            <div className="grid gap-4">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-start gap-4 md:gap-6"
                >
                  {/* SVG icon on the left */}
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="1.5" />
                      <path d="M8 12l2.2 2.2L16 8" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Heading + optional small description */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {it.title}
                    </h3>
                    {it.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {it.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm transition"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
