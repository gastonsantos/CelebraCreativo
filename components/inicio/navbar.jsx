"use client";
import { useState } from "react";

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
            py-4 lg:px-12 
            shadow-xl rounded-b-2xl 
            border border-pink-200/40 shadow-pink-400/40
        ">

            {/* LOGO + BOTÓN MOBILE */}
            <div className="
                flex justify-between lg:w-auto w-full 
                lg:border-b-0 pl-6 pr-2 
                border-b border-gray-700 pb-5 lg:pb-0
            ">
                {/* Botón hamburguesa */}
                <div className="block lg:hidden">
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
                        <svg
                            className="fill-current h-4 w-4"
                            viewBox="0 0 20 20"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MENU */}
            <div
                className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${open ? "block" : "hidden"
                    }`}
            >
                {/* Opciones de menú */}
                <div className="text-md font-bold text-[#E8899B] lg:flex-grow">

                    {/* Inicio */}
                    <a href="/inicio" className={linkStyle}>Inicio</a>

                    {/* Categorías con submenú */}
                    <div className="relative inline-block text-left group">

                        <button
                            className={linkStyle + " flex items-center cursor-pointer"}
                            onClick={() => setSubmenuOpen(!submenuOpen)}
                        >
                            Productos
                           
                        </button>

                        {/* SUBMENÚ */}
                        <div
                            className={`
                                absolute bg-black/90 backdrop-blur 
                                border border-pink-200/40 
                                rounded-xl shadow-lg shadow-pink-400/30 
                                mt-1 w-48 text-[#E8899B] z-50
                                transition-all duration-300
                                ${submenuOpen ? "block" : "hidden"}  
                                group-hover:block
                            `}
                        >
                            <a href="#" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white transition-all">Toppers</a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white transition-all">Stickers</a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white transition-all">Bolsitas</a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white transition-all">Souvenirs</a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#E8899B] hover:text-white transition-all">Centros de mesa</a>
                        </div>
                    </div>
                     {/* Combos*/}
                    <a href="/inicio?section=combos" className={linkStyle}>Combos</a>
                    {/* Quiénes somos */}
                    <a href="/nosotros" className={linkStyle}>¿Quiénes somos?</a>

                    {/* Cómo comprar */}
                    <a href="/comprar" className={linkStyle}>¿Cómo comprar?</a>
                </div>

                {/* Buscador (desktop) */}
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="
                            border-2 border-pink-300 
                            bg-black/30 backdrop-blur text-white 
                            h-10 pl-2 pr-8 rounded-lg text-sm 
                            focus:outline-none
                        "
                        type="buscar"
                        placeholder="Buscar"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                        <svg
                            className="text-pink-300 h-4 w-4 fill-current"
                            viewBox="0 0 56.966 56.966"
                        >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                             s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                             c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z" />
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    );
}
