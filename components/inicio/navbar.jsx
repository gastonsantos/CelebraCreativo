"use client";
import { useState } from "react";
import Buscador from "@/components/inicio/buscador";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const linkStyle = `
        block mt-4 lg:inline-block lg:mt-0 px-4 py-2 mr-2
        text-white font-bold rounded-2xl
        shadow-md shadow-pink-400/30
        transition-all duration-300
        hover:bg-[#E8899B] hover:text-white
        hover:scale-[1.05] hover:shadow-pink-300/60
    `;

    return (
        <nav className="
            fixed top-0 left-0 z-50 w-full 
            flex items-center justify-between flex-wrap
            bg-black/95 backdrop-blur 
            py-4 lg:px-12 px-4
            shadow-xl rounded-b-2xl 
            border border-pink-200/40 shadow-pink-400/40
        ">

            
            <div className="hidden lg:flex items-center gap-2">
                <Link href="/">
                    <Image
                        src="/images/Celebra.png"
                        alt="Celebra Creativo Logo"
                        width={55}
                        height={55}
                        className="rounded-lg shadow-md shadow-pink-300/40 hover:scale-105 transition"
                    />
                </Link>
            </div>

         
            <div className="lg:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        flex items-center px-3 py-2 border-2 rounded 
                        text-[#E8899B] border-pink-300 
                        hover:text-white hover:border-pink-500
                        transition-all duration-300
                        cursor-pointer
                    "
                >
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

           
            <div
                className={`w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${open ? "block" : "hidden"}`}
            >
                <div className="text-md font-bold text-[#E8899B] lg:flex lg:items-center">

                    <a href="/inicio" className={linkStyle}>Inicio</a>

                    {/* CATEGORÍAS */}
                    <div className="relative inline-block text-left">
                        <button
                            className={linkStyle + " flex items-center cursor-pointer"}
                            onClick={() => setSubmenuOpen(!submenuOpen)}
                        >
                            Productos
                        </button>

                        <div
                            className={`
                                absolute bg-black/90 backdrop-blur 
                                border border-pink-200/40 
                                rounded-xl shadow-lg shadow-pink-400/30 
                                mt-2 w-48 text-[#E8899B] z-50
                                transition-all duration-300
                                ${submenuOpen ? "block" : "hidden"}
                            `}
                        >
                            <a href="/inicio?category=Topper" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white">Toppers</a>
                            <a href="/inicio?category=Stickers" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white">Stickers</a>
                            <a href="/inicio?category=Letras 3D" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white">Letras 3D</a>
                            <a href="/inicio?category=Banderines" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white">Banderines</a>
                            <a href="/inicio?category=Centros de mesa" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white">Centros de mesa</a>
                        </div>
                    </div>

                    <a href="/inicio?section=combos" className={linkStyle}>Combos</a>
                    <a href="/nosotros" className={linkStyle}>¿Quiénes somos?</a>
                    <a href="/comprar" className={linkStyle}>¿Cómo comprar?</a>
                </div>

              
                <div className="mt-4 lg:mt-0 lg:ml-4">
                    <Buscador />
                </div>
            </div>

        </nav>
    );
}
