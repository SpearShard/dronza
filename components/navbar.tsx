"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pages", href: "/pages" },
    // { name: "Shop", href: "/shop" },
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
            src="try1.svg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Middle - Desktop Navigation */}
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

        {/* Right - Search + Phone + Hamburger */}
        <div className="flex items-center space-x-4 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          <span className="hidden sm:inline text-sm font-semibold">
            (+291) 912-3456-073
          </span>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-black transform transition-transform duration-500 md:hidden shadow-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <img
            src="https://rockspace.net/wp/dronza/wp-content/themes/dronza/assets/images/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col divide-y divide-gray-200 mt-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex justify-between items-center px-6 py-4 font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                <ChevronDown className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
