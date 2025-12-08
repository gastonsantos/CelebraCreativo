"use client";
import React from "react";
import Image from "next/image";
import Mensaje from "@/components/mensaje/mensaje";
export default function Footer() {
    return (
        <div className="relative mt-16 bg-[#E8899B]">
            {/* Wave superior */}
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#E8899B]"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>

            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-4">

                    {/* LOGO + TEXTO */}
                    <div className="">
                        <a href="/" aria-label="Go home" className="inline-flex items-center">
                            <Image
                                src="/images/celebra-black.png"
                                width={82}
                                height={82}
                                alt="Logo Celebra"
                                className="object-contain"
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                                Celebra Creativo
                            </span>
                        </a>

                        <p className="mt-4 text-sm text-purple-100">
                            Ideas creativas y diseño para tus eventos.
                        </p>
                    </div>

                    {/* CATEGORY */}
                    <div>
                        <p className="font-semibold tracking-wide text-black">Categorias</p>
                        <ul className="mt-2 space-y-2 text-purple-100">
                            <li><a href="/" className="hover:text-pink-300 transition">Topper</a></li>
                            <li><a href="/" className="hover:text-pink-300 transition">Souvenirs</a></li>
                            <li><a href="/" className="hover:text-pink-300 transition">Centros de mesa</a></li>
                            <li><a href="/" className="hover:text-pink-300 transition">Bolsitas</a></li>
                             <li><a href="/" className="hover:text-pink-300 transition">Combos cumple</a></li>
                        </ul>
                    </div>

                    {/* CONTACTANOS */}
                    <div>
                        <p className="font-semibold tracking-wide text-black">Contáctanos</p>
                        <ul className="mt-2 space-y-2 text-purple-100">
                            <li> +54 11 6266 6780</li>
                            <li> hola@celebracreativo.com</li>
                        </ul>
                    </div>

                    {/* FORMULARIO MENSAJE */}
                 <Mensaje/>

                </div>

                {/* COPYRIGHT + REDES */}
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-purple-300 sm:flex-row">
                    <p className="text-sm text-white">
                        © 2025 CelebraCreativo. Todos los derechos reservados.
                    </p>

                    {/* Redes sociales */}
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">

                        {/* Instagram */}
                        <a href="https://www.instagram.com/celebra_creativo/" className="hover:opacity-70 transition">
                            <Image
                                src="/redes/insta.png"
                                alt="Instagram"
                                width={48}
                                height={48}
                            />
                        </a>

                        {/* Facebook */} 
                        <a href="https://www.facebook.com/celebra.creativo?locale=es_LA" className="hover:opacity-70 transition">
                            <Image
                                src="/redes/facebook.png"
                                alt="Facebook"
                                width={48}
                                height={48}
                            />
                        </a>

                        {/* Mercado Libre */}
                        <a href="/" className="hover:opacity-70 transition">
                            <Image
                                src="/redes/ML_noFondo.png"
                                alt="Pinterest"
                                width={120}
                                height={120}
                            />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
}
