"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Call() {
    const router = useRouter();
    const [logoPreview, setLogoPreview] = useState("/images/Celebra.png");

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4 }
        w-full
        max-w-[800px]
        lg:max-w-[1000px]
        xl:max-w-[1200px]
        2xl:max-w-[1400px]
        mx-auto
        ">

            {/* CONTENEDOR PRINCIPAL */}
            <div
                className="
        relative 
        w-full
        max-w-[800px]
        lg:max-w-[1000px]
        xl:max-w-[1200px]
        2xl:max-w-[1400px]
        mx-auto
        min-h-[600px]
        bg-center 
        bg-no-repeat 
        bg-cover 
        rounded-2xl 
        shadow-2xl 
        flex 
        items-center 
        justify-center 
        p-6 md:p-10
        overflow-hidden
    "
                style={{ backgroundImage: "url(/images/Fondo3.jpeg)" }}
            >


                {/* OVERLAY OSCURO */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl z-10"></div>

                {/* CONTENIDO CENTRADO */}
                <div className="relative z-20 text-center flex flex-col items-center">
                    <div className="
  w-40 h-40     /* móviles */
  sm:w-56 sm:h-56
  md:w-80 md:h-80
  lg:w-96 lg:h-96
  overflow-hidden
  mb-4
">

                        <img
                            className="w-full h-full object-cover"
                            src={logoPreview}
                            alt="Celebra creativo"
                        />
                    </div>

                    <label className="text-3xl md:text-4xl font-semibold text-[#E8899B] mb-4">
                        Celebra Creativo
                    </label>


                    <button
                        onClick={() => router.push("/inicio")}
                        className="cursor-pointer text-xl font-bold text-[#E8899B] py-2 px-4 rounded-full bg-black hover:bg-gray-900"
                    >
                        Ver catálogo
                    </button>
                </div>

                {/* WHATSAPP — CENTRADO EN MOBILE, IZQUIERDA EN DESKTOP */}
                <button
                    className="
        w-16 h-16 md:w-20 md:h-20
        overflow-hidden 
        shadow-lg 
        cursor-pointer 
        absolute 
        bottom-4
        left-1/2 -translate-x-1/2      
        md:left-4 md:translate-x-0      
        transition-transform duration-200
        hover:scale-110
        z-20
    "
                >
                    <img
                        src="redes/whatsap-rosa.png"
                        alt="WhatsApp"
                        className="w-full h-full"
                    />
                </button>


                {/* INSTAGRAM — SOLO DESKTOP */}
                <div
                    className="
                        hidden md:flex 
                        flex-col
                        cursor-pointer 
                        items-center 
                        absolute 
                        bottom-6 right-6
                        transition-transform duration-200
                        hover:scale-110
                        z-20
                    "
                >
                    <span className="text-white text-sm mb-2 font-semibold">
                        Instagram
                    </span>

                    <div className="w-20 h-20 bg-white p-2 rounded-lg shadow-lg">
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.instagram.com"
                            alt="Instagram QR"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
