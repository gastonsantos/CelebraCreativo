"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Combos() {
    return (
        <main id="combos" className="max-w-6xl mx-auto pt-10 pb-36 px-8">
            <div className="mb-14 text-center relative">

                {/* Línea animada */}
                <motion.div
                    className="w-28 h-1 bg-[#E8899B] mx-auto mb-6 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                {/* Título */}
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Combos para cumple
                </motion.h2>

                {/* Subtítulo */}
                <motion.p
                    className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    Elegí el combo que más te guste y lo realizamos 100% personalizado para tu celebración.
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
            <div className="flex flex-col lg:flex-row gap-8">


                <div className="flex-1 bg-white/30  shadow-xl rounded-3xl p-8 transition-transform duration-300 hover:scale-105  border border-pink-200 hover:shadow-xlborder border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60">
                    <div className="mb-7 pb-7 w-full flex items-center border-b border-gray-300">
                        <Image
                            src="/combos/combofull.png"
                            alt="Combo full"
                            width={160}
                            height={80}
                            className="rounded-3xl w-full h-auto object-cover rounded-3xl"
                        />

                    </div>

                    <ul className="mb-7 text-white flex-1 text-sm ">
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">1 Banderín "Feliz cumple"</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">15 Mini Milk Box super decorativas</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">15 Pochocleras super decorativas</span>
                        </li>
                        <li className="flex">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">y mucho más...</span>
                        </li>
                    </ul>

                    <a
                        href="/combos/combo-full"
                        className="flex justify-center items-center bg-[#E8899B] rounded-xl py-2 px-2 text-white text-xl mt-4"
                    >
                        Ver combo completo
                        <Image src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" width={20} height={20} alt="arrow" className="ml-2" />
                    </a>
                </div>


                <div className="flex-1 bg-white/30  shadow-xl rounded-3xl p-8 transition-transform duration-300 hover:scale-105  border border-pink-200 border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60 flex flex-col">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <Image
                            src="/combos/combo-clasico.png"
                            alt="Combo clásico"
                            width={160}
                            height={80}
                            className=" w-full h-auto object-cover rounded-3xl "
                        />

                    </div>

                    <ul className="mb-7 text-white flex-1 text-sm">
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">1 Banderín Felíz Cumple</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">1 Plancha de Stickers</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">15 pinchos decorativos</span>
                        </li>
                        <li className="flex">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">y mucho más...</span>
                        </li>
                    </ul>

                    <a href="/combos/combo-clasico" className="flex justify-center items-center bg-[#E8899B] rounded-xl py-2 px-2 text-white text-xl mt-4">
                        Ver combo completo
                        <Image src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" width={20} height={20} alt="arrow" className="ml-2" />
                    </a>
                </div>


                <div className="flex-1 bg-white/30  shadow-xl rounded-3xl p-8 transition-transform duration-300 hover:scale-105  border border-pink-200 border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60 flex flex-col">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <Image
                            src="/combos/combo-premium.png"
                            alt="Combo Premium"
                            width={160}
                            height={80}
                            className=" w-full h-auto object-cover rounded-3xl"
                        />

                    </div>

                    <ul className="mb-7 text-white flex-1 text-sm">
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">1 Banderín 3D</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">1 Número 3D</span>
                        </li>
                        <li className="flex mb-2">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">15 pinchos decorativos</span>
                        </li>
                        <li className="flex">
                            <Image src="https://res.cloudinary.com/williamsondesign/check-grey.svg" width={20} height={20} alt="check" />
                            <span className="ml-3">y mucho más...</span>
                        </li>
                    </ul>

                    <a href="/combos/combo-premium" className="flex justify-center items-center bg-[#E8899B] rounded-xl py-2 px-2 text-white text-xl mt-4">
                        Ver combo completo
                        <Image src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" width={20} height={20} alt="arrow" className="ml-2" />
                    </a>
                </div>

            </div>
        </main>
    );
}
