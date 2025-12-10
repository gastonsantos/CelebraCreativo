"use client";
import Image from "next/image";

export default function WhatsAppButton() {

    const phone = "541170668904";
    const message = "Hola! Quiero hacer una consulta 😊";

    return (
        <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed 
                bottom-5
                right-5
                z-50
                bg-green-500 
                w-20 h-20
                rounded-full 
                shadow-2xl 
                flex items-center justify-center
                hover:scale-110 
                transition-transform duration-200
                cursor-pointer
            "
        >
            <Image
                className="rounded-full"
                src="/redes/whatsap.png"
                width={60}
                height={60}
                alt="WhatsApp"
            />
        </a>
    );
}
