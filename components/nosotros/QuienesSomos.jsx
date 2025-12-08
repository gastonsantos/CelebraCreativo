"use client"

import { quienesSomosData } from "@/data/quienesSomosData";
import React, { useEffect, useState } from "react";
import QuienesSomosCard from "@/components/nosotros/QuienesSomosCard";
export default function QuienesSomos() {
    const [somos, setSomos] = useState([]);

    useEffect(() => {
        setSomos(quienesSomosData);
    }, []); // 👈 así debe quedar


    return (
        <div className="pt-28 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen px-6 py-16 flex flex-col items-center">
            {/* Header */}
            <h1 className="text-5xl font-bold text-[#E8899B] mb-4 text-center">
                ¿Quiénes Somos?
            </h1>


            <p className="max-w-3xl text-center text-lg md:text-xl text-white mb-12">
                En <span className="text-[#E8899B]font-semibold">Celebra Creativo</span> nos dedicamos a transformar ideas en diseño.
                Amamos crear productos únicos, llenos de color, dedicación y un toque especial
                para cada cliente. Nuestro objetivo es que cada compra sea una experiencia
                inolvidable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                {somos.map((quien) => (
                    <QuienesSomosCard key={quien.id} quienesSomos={quien} />
                ))}
            </div>


          


            {/* Sección final */}
            <div className="max-w-3xl mt-16 text-center text-white text-lg">
                <p>
                    Gracias por confiar en nosotros para acompañar tus momentos especiales.
                    <br />
                    <span className="text-[#E8899B] font-semibold">¡Seguimos creando juntos!</span>
                </p>
            </div>
        </div>
    );
}
