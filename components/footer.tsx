"use client";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">
        {/* Get in Touch */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#038BD5] mt-1" />
              <span>
                rockspace
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#038BD5]" />
              <span>contact@rockspace.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#038BD5]" />
              <span>(+291) 912-3456-073</span>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>FAQ</li>
            <li>Shop</li>
            <li>Our Team</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Recent Post</h3>
          <div className="space-y-4 text-sm">
            {[1, 2].map((i) => (
              <div key={i} className="flex space-x-3 items-center">
                <img
                  src={
                    i === 1
                      ? "https://images.unsplash.com/photo-1508612761958-e931d843bdd1?w=100&h=100&fit=crop"
                      : "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=100&h=100&fit=crop"
                  }
                  alt="Post"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-[#038BD5] text-xs font-semibold">
                    12 December
                  </p>
                  <p className="text-gray-300 text-sm">
                    Planning approved for restoration town hall.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
          <p className="text-sm mb-4">
            Join our subscribers list to get the latest news, updates and
            special offers delivered directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white text-sm px-4 py-2 w-full outline-none"
            />
            <button className="bg-[#038BD5] px-4 py-2 text-white font-semibold text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        {/* Logo + Socials */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center space-x-2 bg-black px-4 py-3">
            <img
              src="try1.svg"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-[#038BD5] text-xl font-bold">Mechzilla</span>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="border border-gray-600 p-2 hover:border-red-500">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="border border-gray-600 p-2 hover:border-red-500">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="border border-gray-600 p-2 hover:border-red-500">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            My account
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025 All rights reserved. Designed By rockspace
      </div>
    </footer>
  );
}
