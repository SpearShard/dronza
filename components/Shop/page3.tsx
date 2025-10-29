"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "DJI Mavic 2 Pro",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic2-8.jpg",
    range: "4.5 km",
    flightTime: "31 Minutes",
    price: "£99.00",
  },
  {
    id: 2,
    name: "DJI Inspire 2",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic1-8.jpg",
    range: "4.5 km",
    flightTime: "31 Minutes",
    price: "£99.00",
  },
  {
    id: 3,
    name: "Mavic Pro Platinum",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic3-8.jpg",
    range: "4.5 km",
    flightTime: "31 Minutes",
    price: "£99.00",
  },
  {
    id: 4,
    name: "Phantom 4",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic4-8.jpg",
    range: "5.2 km",
    flightTime: "28 Minutes",
    price: "£129.00",
  },
  {
    id: 5,
    name: "Mini 3 Pro",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic5-8.jpg",
    range: "10 km",
    flightTime: "34 Minutes",
    price: "£199.00",
  },
  {
    id: 6,
    name: "Air 2S",
    img: "https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic6-8.jpg",
    range: "12 km",
    flightTime: "31 Minutes",
    price: "£249.00",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-red-600 font-semibold border-l-4 border-red-600 pl-2 mb-2">
              Featured products
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Featured products</h2>
          </div>
          <button className="bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition">
            More Detail
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-md border border-gray-100 hover:shadow-lg transition rounded-lg overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-contain bg-white p-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    <strong>Range</strong> | {product.range}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Flight Time</strong> | {product.flightTime}
                  </p>
                  <p className="text-red-600 font-semibold">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
