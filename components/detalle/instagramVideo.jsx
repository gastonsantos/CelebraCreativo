"use client";

import { useEffect, useRef, useState } from "react";

export default function InstagramVideo({ url }) {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Detectar pantallas chicas
    useEffect(() => {
        const check = () => {
            const small = window.innerWidth < 640;
            setIsSmallScreen(small);

            if (small) {
                setIsOpen(false); // 🔥 Auto-cerrar en mobile
            }
        };

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // IntersectionObserver solo en pantallas grandes
    useEffect(() => {
        if (isSmallScreen) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [isSmallScreen]);

    // Cargar script de Instagram solo en pantallas grandes
    useEffect(() => {
        if (!shouldLoad || isSmallScreen) return;

        if (window.instgrm) {
            setTimeout(() => window.instgrm?.Embeds?.process(), 100);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => window.instgrm?.Embeds?.process();
        document.body.appendChild(script);
    }, [shouldLoad, isSmallScreen]);

    // Reprocesar embed al abrir
    useEffect(() => {
        if (!isSmallScreen && isOpen && window.instgrm) {
            setTimeout(() => window.instgrm?.Embeds?.process(), 150);
        }
    }, [isOpen, isSmallScreen]);


    return (
        <>
            {/* 🔵 Botón flotante para abrir (si está cerrado) */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="
            fixed 
            top-4 right-4          
            md:top-20              
            lg:top-32              
            z-50
            bg-black/70 text-white
            rounded-full 
            px-3 py-2 text-sm    
            md:px-4 md:py-3 md:text-base 
            lg:px-5 lg:py-4 lg:text-lg    
            shadow-lg border border-white/20
            hover:bg-black transition
            cursor-pointer
        "
                >
                    🎬 Video
                </button>
            )}


            {/* 🟣 Pantallas grandes → ventanita flotante */}
            {!isSmallScreen && isOpen && (
                <div className="fixed top-4 right-4 z-50 mt-24">
                    <div className="
                        relative bg-black rounded-xl shadow-xl overflow-hidden
                        border border-white/20 p-2
                        w-[70vw] max-w-[340px] aspect-[9/16] min-w-[200px]
                    ">
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 text-sm hover:bg-black transition"
                        >
                            ✕
                        </button>

                        <div ref={containerRef} className="w-full h-full">
                            {shouldLoad ? (
                                <blockquote
                                    className="instagram-media w-full h-full"
                                    data-instgrm-permalink={url}
                                    data-instgrm-version="14"
                                    style={{ width: "100%", height: "100%" }}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-900 animate-pulse" />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 🔥 Pantallas chicas → Abrir en modal centrado */}
            {isSmallScreen && isOpen && (
                <div className="
                    fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                    flex items-center justify-center p-4
                ">
                    <div className="
                        relative w-full max-w-sm aspect-[9/16]
                        bg-black rounded-xl overflow-hidden border border-white/10
                    ">
                        {/* Cerrar modal */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 text-sm"
                        >
                            ✕
                        </button>

                        {/* No carga el video en mobile → solo si se abre */}
                        <iframe
                            src={`${url}embed`}
                            className="w-full h-full"
                            allow="autoplay"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}
