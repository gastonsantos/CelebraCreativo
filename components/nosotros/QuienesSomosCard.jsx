
import React, { useState } from "react";
export default function QuienesSomosCard({ quienesSomos }) {
    return (
        <div className="bg-white/30 shadow-lg p-8 rounded-2xl border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60">

            <h3 className="text-2xl font-bold text-[#E8899B] mb-4">
                {quienesSomos.name}
            </h3>

            <p className="text-white leading-relaxed">
                {quienesSomos.description}
            </p>

        </div>
    );
}
