"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pages", href: "/pages" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-[50] transition-colors duration-700 ease-in-out ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://gridvalley.net/wp/dronza/wp-content/themes/dronza/assets/images/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Middle - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Search + Phone */}
        <div className="flex items-center space-x-4 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          <span className="text-sm font-semibold">(+291) 912-3456-073</span>
        </div>
      </div>
    </nav>
  );
}
