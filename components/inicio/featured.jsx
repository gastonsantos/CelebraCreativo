"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { obtenerFeaturedProductos } from "@/services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  async function cargarFeatured() {
    const data = await obtenerFeaturedProductos(12);
    setProducts(data.products || []);
  }

  cargarFeatured();
}, []);


  if (!products.length) return null;

  return (
    <section className="pt-24 px-4 sm:px-6 mb-20">

      <div className="mb-10 text-center">
        <div className="w-full h-px bg-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Lo último
        </h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Descubrí nuestros productos más recientes, listos para tu próxima celebración.
        </p>
      </div>


      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <div className="  bg-white/30
    shadow-md border border-gray-200 rounded-lg max-w-sm
    m-4 transition-transform duration-200 hover:scale-105 cursor-pointer
    border border-pink-200 border border-pink-200 shadow-lg shadow-pink-400/40
    transition-all duration-300
     hover:scale-[1.05] hover:shadow-pink-300/60">
              <Link
                href={`/product/${product.id}`}
                className="
              
              "
              >

                <div className="
                w-full
                h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]
                relative
                rounded-lg
                shadow-md
                mb-4
                overflow-hidden
                bg-black
              ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>

                {/* Texto */}
                <div className="p-5">
                  <h5 className="text-[#E8899B] font-bold text-2xl tracking-tight mb-2">
                    {product.name}
                  </h5>

                  <p className="font-normal text-white mb-3 line-clamp-3">
                    {product.description}
                  </p>

                  <p className="text-xl font-semibold text-celebra-rosa">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
}
