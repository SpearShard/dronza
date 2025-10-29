"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type Category = "All" | "Nature" | "Urbanistic" | "Landscape";

interface GalleryItem {
  img: string;
  category: Category;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg", category: "Nature" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic5-3.jpg", category: "Urbanistic" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic6-2.jpg", category: "Landscape" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic3-4.jpg", category: "Nature" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic4-4.jpg", category: "Urbanistic" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic1-8.jpg", category: "Landscape" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic2-4.jpg", category: "Nature" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic5-1.jpg", category: "Urbanistic" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic3-3.jpg", category: "Landscape" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic4-2.jpg", category: "Nature" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic6-3.jpg", category: "Urbanistic" },
    { img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic1-6.jpg", category: "Landscape" },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
      );
    }
  }, [activeCategory]);

  const categories: Category[] = ["All", "Nature", "Urbanistic", "Landscape"];

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Explore Our Gallery
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item overflow-hidden relative rounded-lg cursor-pointer group bg-white"
            >
              <Image
                src={item.img}
                alt={`Gallery ${i + 1}`}
                width={500}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex justify-center items-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
