"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

export default function Call() {
    const router = useRouter();
    const [logoPreview, setLogoPreview] = useState("/images/Celebra2.png");
    const [showQR, setShowQR] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const phone = "549116266780";
    const message = "Hola! Quiero hacer una consulta 😊";

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }, []);

    const handleCatalogClick = () => {
        setShowConfetti(true);
        setTimeout(() => {
            router.push("/inicio");
        }, 1500);
    };

    return (
        <>
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={800}
                    recycle={false}
                    gravity={0.5}
                    colors={["#E8899B"]}
                />
            )}

            {/* 🔥 CONTENEDOR FULL SCREEN CON FONDO RESPONSIVE */}
            <div
                className="
                    min-h-screen w-full 
                    flex items-center justify-center
                    bg-black relative
                    overflow-hidden
                "
            >
                {/* 🔥 Imagen de fondo A PANTALLA COMPLETA */}
                <div
                    className="
                        absolute inset-0 w-full h-full
                        bg-cover bg-center bg-no-repeat
                    "
                    style={{
                        backgroundImage: "url(/images/Fondo3.jpeg)",
                    }}
                ></div>

                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* 🔥 CONTENIDO CENTRADO Y RESPONSIVE */}
                <div className="relative z-20 flex flex-col items-center text-center px-6">

                    {/* LOGO RESPONSIVE */}
                    <div
                        className="
                            w-48 h-48
                            sm:w-64 sm:h-64
                            md:w-80 md:h-80
                            lg:w-[420px] lg:h-[420px]
                            xl:w-[480px] xl:h-[480px]
                            overflow-hidden mb-8
                        "
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={logoPreview}
                            alt="Celebra creativo"
                        />
                    </div>

                    {/* BOTÓN RESPONSIVE */}
                    <button
                        onClick={handleCatalogClick}
                        className="
                            bg-[#E8899B]
                            text-white py-4 px-10  cursor-pointer
                            rounded-2xl text-xl sm:text-2xl md:text-3xl
                            font-bold shadow-lg shadow-pink-400/40
                            hover:scale-[1.07] transition-all duration-300
                        "
                    >
                        Ver catálogo
                    </button>
                </div>

                {/* WHATSAPP */}
                
                <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
        absolute bottom-5 left-1/2 -translate-x-1/2
        md:left-6 md:translate-x-0
        z-20 hover:scale-110 transition-transform cursor-pointer
    "
                >
                    <img
                        src="redes/whatsap-rosa.png"
                        className="w-full h-full object-contain"
                        alt="WhatsApp"
                    />
                </a>


                {/* INSTAGRAM QR */}
                <div
                    className="
                        hidden md:flex flex-col items-center
                        absolute bottom-8 right-8 z-20 cursor-pointer
                        hover:scale-110 transition-transform
                    "
                    onClick={() => setShowQR(true)}
                >
                    <span className="text-white text-lg mb-2 font-semibold">
                        Instagram
                    </span>

                    <div className="w-24 h-24 xl:w-28 xl:h-28 bg-white p-3 rounded-2xl shadow-lg">
                        <img
                            src="/images/Celebra-Qr.png"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* MODAL QR */}
                {showQR && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setShowQR(false)}
                    >
                        <img
                            src="/images/Celebra-Qr.png"
                            className="max-w-full max-h-full rounded-2xl"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
