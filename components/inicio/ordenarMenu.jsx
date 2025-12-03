"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function OrdenarMenu({ setSort }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            {/* BOTÓN */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 
                    bg-black/40 backdrop-blur
                    border border-pink-300/50 
                    text-[#E8899B] font-semibold
                    rounded-xl shadow-md shadow-pink-500/20
                    hover:bg-pink-600/30 hover:text-white
                    transition-all duration-300 cursor-pointer"
            >
                Ordenar
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* MENÚ DESPLEGABLE */}
            {open && (
                <div
                    className="absolute right-0 mt-2 w-48 origin-top-right 
                    bg-black/90 backdrop-blur 
                    border border-pink-300/40 
                    rounded-xl shadow-lg shadow-pink-400/30
                    p-2 z-40 animate-fade-down"
                >
                    <button
                        onClick={() => { setSort("precio-asc"); setOpen(false) }}
                        className="block w-full text-left px-3 py-2 
                        rounded-lg text-[#E8899B] hover:bg-pink-600 hover:text-white transition cursor-pointer"
                    >
                        Precio: menor a mayor
                    </button>

                    <button
                        onClick={() => { setSort("precio-desc"); setOpen(false) }}
                        className="block w-full text-left px-3 py-2 
                        rounded-lg text-[#E8899B] hover:bg-pink-600 hover:text-white transition cursor-pointer"
                    >
                        Precio: mayor a menor
                    </button>

                    <button
                        onClick={() => { setSort("nombre-asc"); setOpen(false) }}
                        className="block w-full text-left px-3 py-2 
                        rounded-lg text-[#E8899B] hover:bg-pink-600 hover:text-white transition cursor-pointer"
                    >
                        Nombre A → Z
                    </button>

                    <button
                        onClick={() => { setSort("nombre-desc"); setOpen(false) }}
                        className="block w-full text-left px-3 py-2 
                        rounded-lg text-[#E8899B] hover:bg-pink-600 hover:text-white transition cursor-pointer"
                    >
                        Nombre Z → A
                    </button>
                </div>
            )}
        </div>
    );
}
