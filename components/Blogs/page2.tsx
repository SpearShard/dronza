"use client";
import { useState } from "react";

interface Post {
  date: string;
  title: string;
  excerpt: string;
}

export default function BlogGrid() {
  const posts: Post[] = [
    {
      date: "December 12, 2020",
      title: "How Drones Are Saving Our Beaches",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 12, 2020",
      title: "How To Start A Drone Photography Business",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 12, 2020",
      title: "How Amazon Is Integrating Drones Into Their Supply",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 13, 2020",
      title: "Drone Videography Price Makes You Surprises",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 13, 2020",
      title: "How To Start A Drone Photography",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 13, 2020",
      title: "How Amazon Is Integrating Drones",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 14, 2020",
      title: "Drones Changing Future Logistics",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
    {
      date: "December 15, 2020",
      title: "Drone Regulations for 2021 Explained",
      excerpt:
        "Suffered alteration in some form, by injected humour, or randomised which don't look even slightly.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentPosts.map((post, idx) => (
            <div
              key={idx}
              className="border-[3px] border-gray-300 p-8 hover:border-[#0079C0] transition-all duration-300"
            >
              <p className="text-[#0079C0] font-medium text-sm mb-3">
                {post.date}
              </p>
              <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>
              <button className="flex items-center text-[#0079C0] font-semibold text-sm group">
                Read More
                <span className="ml-2 w-6 h-[2px] bg-[#0079C0] group-hover:w-8 transition-all duration-300"></span>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-full border ${
                currentPage === i + 1
                  ? "bg-[#0079C0] text-white border-[#0079C0]"
                  : "text-[#0079C0] border-[#0079C0] hover:bg-[#0079C0] hover:text-white"
              } transition-all duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
