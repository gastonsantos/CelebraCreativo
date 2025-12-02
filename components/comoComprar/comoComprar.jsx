"use client";

import { motion } from "framer-motion";

export default function ComoComprar() {
  const steps = [
    {
      title: "Elegí tu producto",
      description: "Explorá nuestro catálogo y seleccioná el producto que más te guste.",
      icon: "🛍️",
    },
    {
      title: "Indicá la cantidad",
      description: "Elegí cuántas unidades necesitás del producto.",
      icon: "🔢",
    },
    {
      title: "Contactanos por WhatsApp",
      description: "Hacé clic en el botón de WhatsApp para enviarnos tu pedido.",
      icon: "📲",
    },
    {
      title: "Personalizamos tu pedido",
      description: "Coordinamos colores, medidas o personalización que necesites.",
      icon: "🎨",
    },
    {
      title: "Confirmación",
      description: "Confirmamos tiempos de entrega, costos y detalles antes de producir.",
      icon: "✔️",
    },
    {
      title: "Retiro o envío",
      description: "Podés retirar por el local o solicitar envío a tu domicilio.",
      icon: "📦",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b]">
      {/* Fondo animado */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute  from-black via-[#0f0f0f] to-[#1b1b1b] w-[600px] h-[600px] rounded-full blur-3xl"
          animate={{ x: [0, 80, -40, 0], y: [0, -50, 70, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute from-black via-[#0f0f0f] to-[#1b1b1b] w-[500px] h-[500px] rounded-full blur-3xl top-40 left-40"
          animate={{ x: [0, -60, 30, 0], y: [0, 40, -70, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO */}
      <section className="pt-28 mb-16 text-center px-6">
        <motion.h1
          className="text-5xl font-bold text-[#E8899B] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¿Cómo Comprar?
        </motion.h1>

        <motion.p
          className="text-white text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Te mostramos paso a paso cómo funciona nuestro sistema de compra simple,
          rápido y personalizado.
        </motion.p>
      </section>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto grid gap-10 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white/30  shadow-xl rounded-2xl p-8 border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="text-6xl mb-4 text-pink-500">{step.icon}</div>

            <h3 className="text-xl font-bold text-[#E8899B] mb-2">
              {index + 1}. {step.title}
            </h3>

            <p className="text-white">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
