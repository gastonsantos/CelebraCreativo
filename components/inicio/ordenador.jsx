"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Ordenador() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const applySort = (value) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`/inicio?${params.toString()}`);
        setOpen(false);
    };

    return (
        <div className="relative inline-block text-left ml-4">
            <button
                onClick={() => setOpen(!open)}
                className="
                    px-4 py-2 
                    text-white font-bold rounded-2xl
                    shadow-md shadow-pink-400/30 
                    bg-black/30 border border-pink-200/40
                    hover:bg-[#E8899B] hover:text-white
                    transition-all duration-300
                "
            >
                Ordenar ▼
            </button>

            {open && (
                <div
                    className="
                        absolute right-0 mt-2 w-48 
                        bg-black/90 backdrop-blur rounded-xl
                        shadow-lg shadow-pink-400/30 border border-pink-200/40
                        animate-scaleFade z-50
                    "
                >
                    <button
                        onClick={() => applySort("name-asc")}
                        className="block w-full text-left px-4 py-2 text-[#E8899B] hover:bg-[#E8899B] hover:text-white transition-all"
                    >
                        Nombre (A → Z)
                    </button>

                    <button
                        onClick={() => applySort("name-desc")}
                        className="block w-full text-left px-4 py-2 text-[#E8899B] hover:bg-[#E8899B] hover:text-white transition-all"
                    >
                        Nombre (Z → A)
                    </button>

                    <button
                        onClick={() => applySort("price-asc")}
                        className="block w-full text-left px-4 py-2 text-[#E8899B] hover:bg-[#E8899B] hover:text-white transition-all"
                    >
                        Precio (menor a mayor)
                    </button>

                    <button
                        onClick={() => applySort("price-desc")}
                        className="block w-full text-left px-4 py-2 text-[#E8899B] hover:bg-[#E8899B] hover:text-white transition-all"
                    >
                        Precio (mayor a menor)
                    </button>
                </div>
            )}
        </div>
    );
}
