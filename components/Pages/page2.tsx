"use client";
import React from "react";

export default function IconGrid() {
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 bg-[#1c1c1c] flex items-center justify-center rounded-xl hover:-translate-y-1 hover:bg-[#222] transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 fill-[#aaa]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
