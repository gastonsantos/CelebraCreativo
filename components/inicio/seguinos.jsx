"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Seguinos() {
  return (
    <section className="relative bg-[#E8899B] mt-20 overflow-hidden">
      
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#E8899B]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1 720 0.7C960 1 1200 11 1320 16.7L1440 22V54H0V22Z"
        />
      </svg>

      {/* Glow decorativo */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative px-6 py-20 mx-auto max-w-screen-xl text-center">
        {/* Icono flotante */}
        <motion.div
          className="flex justify-center mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white rounded-full p-5 shadow-xl">
            <Image
              src="/redes/insta.png"
              alt="Instagram Celebra Creativo"
              width={52}
              height={52}
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Seguinos en Instagram
        </motion.h2>

        {/* Texto */}
        <motion.p
          className="mt-4 text-lg sm:text-xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Inspirate con nuestras últimas creaciones ✨
        </motion.p>

        {/* Botón */}
        <motion.a
          href="https://www.instagram.com/celebra_creativo/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3 mt-8
            bg-white text-[#E8899B]
            font-bold text-lg
            px-10 py-4
            rounded-full
            shadow-lg
            cursor-pointer
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Image
            src="/redes/insta.png"
            alt="Instagram"
            width={24}
            height={24}
          />
          @celebra_creativo
        </motion.a>
      </div>
    </section>
  );
}
