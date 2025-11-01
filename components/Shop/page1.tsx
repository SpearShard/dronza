"use client";
import Image from "next/image";

export default function AboutPage1() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center text-white">
      {/* Background Image with Red Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/1-2.jpg"
          alt="Mountains Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0079C0] mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold bg-black/80 px-6 py-2 inline-block mb-4">
          – Shop Listing –
        </h1>
        <p className="text-sm font-medium">
          <span className="opacity-80">Home</span>
          <span className="mx-2 text-white/60">›</span>
          <span className="text-white">Shop Listing</span>
        </p>
      </div>
    </section>
  );
}
