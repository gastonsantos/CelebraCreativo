"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { obtenerFeaturedProductos } from "@/services/api";
import { motion } from "framer-motion";
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

      <div className="mb-14 text-center relative">
        {/* Línea animada */}
        <motion.div
          className="w-24 h-1 bg-[#E8899B] mx-auto mb-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Título */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lo último
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-gray-300 mt-4 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Descubrí nuestros productos más recientes, listos para tu próxima celebración.
        </motion.p>

        {/* Glow sutil */}
        <motion.div
          className="absolute inset-0 -z-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-72 h-24 bg-[#E8899B]/20 blur-3xl rounded-full" />
        </motion.div>
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
