"use client";
import { useState } from "react";
import { Search } from "lucide-react";

interface Product {
  image: string;
  title: string;
  range: string;
  flightTime: string;
  price: string;
}

export default function ProductPage() {
  const [query, setQuery] = useState("");

  const products: Product[] = [
    {
      image: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg",
      title: "DJI Inspire 2",
      range: "4.5 km",
      flightTime: "31 Minutes",
      price: "£99.00",
    },
    {
      image: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg",
      title: "Mavic Pro Platinum",
      range: "4.5 km",
      flightTime: "31 Minutes",
      price: "£99.00",
    },
    {
      image: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg",
      title: "DJI Mavic 2 Pro",
      range: "4.5 km",
      flightTime: "31 Minutes",
      price: "£49.00",
    },
    {
      image: "https://rockspace.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg",
      title: "DJI Mavic 2 Zoom",
      range: "4.5 km",
      flightTime: "31 Minutes",
      price: "£199.00",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
        {/* Product Grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="border-[3px] border-gray-300 p-5 hover:border-[#0079C0] transition-all duration-300"
            >
              <div className="bg-gray-50 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-contain"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold text-black">Range</span> | {product.range}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-semibold text-black">Flight Time</span> | {product.flightTime}
              </p>
              <p className="text-[#0079C0] font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div>
            <div className="flex border border-gray-300">
              <input
                type="text"
                placeholder="Type to search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3 py-2 outline-none text-sm"
              />
              <button className="bg-[#0079C0] text-white px-3 flex items-center justify-center">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-gray-700 hover:text-[#0079C0] cursor-pointer">
                <span>Drone</span> <span>(4)</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-[#0079C0] cursor-pointer">
                <span>Drone Products</span> <span>(5)</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-[#0079C0] cursor-pointer">
                <span>Metal</span> <span>(4)</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-[#0079C0] cursor-pointer">
                <span>Shop</span> <span>(10)</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-[#0079C0] cursor-pointer">
                <span>Uncategorized</span> <span>(0)</span>
              </li>
            </ul>
          </div>

          {/* Archives */}
          <div>
            <h4 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
              Archives
            </h4>
            <p className="text-gray-700 text-sm cursor-pointer hover:text-[#0079C0]">
              December 2020
            </p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
              Product Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Best Rated",
                "Cheap",
                "Drone",
                "Long Life",
                "Luxury",
                "Pearl",
                "Range",
                "Trending",
                "Videography",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-[#0079C0] hover:text-white transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
