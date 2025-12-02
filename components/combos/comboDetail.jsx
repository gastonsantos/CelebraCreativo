"use client";

import Image from "next/image";
import WhatsAppButton from "@/components/inicio/whatsapButton";
export default function ComboDetail({ title, image, items }) {
    return (
        <main className="max-w-5xl mx-auto pt-20 pb-36 px-6 ">

            {/* ENCABEZADO */}
            <div className="mb-16 text-center">
                <h2 className="
                    text-5xl font-extrabold 
                    text-black tracking-wide drop-shadow-lg
                ">
                    {title}
                </h2>

                <p className="mt-4 text-xl text-black-100 max-w-2xl mx-auto leading-relaxed">
                    Todos nuestros combos son <span className="font-semibold">100% personalizados</span>
                    y diseñados especialmente para que tu evento sea único.
                </p>
            </div>

            {/* CARD PRINCIPAL */}
            {/* CARD PRINCIPAL */}
            <div className="
    relative overflow-hidden
    max-w-3xl mx-auto         
    rounded-3xl p-8             
    bg-white/30 
    backdrop-blur-xl
    border border-white/20
    shadow-[0_0_40px_-15px_rgba(255,170,200,0.5)]
    transition-all duration-300
    hover:shadow-[0_0_60px_-10px_rgba(255,170,200,0.7)]
">

                {/* Glow decorativo */}
                <div className="
        absolute -top-20 -left-20 w-56 h-56 
        bg-pink-300/40 blur-3xl rounded-full
    "></div>

                <div className="
        absolute -bottom-16 -right-16 w-48 h-48 
        bg-pink-200/40 blur-3xl rounded-full
    "></div>

                {/* IMAGEN */}
                <div className="mb-10 relative z-10 p-5">
                    <Image
                        src={image}
                        alt={title}
                        width={400}   /* Next ignora para estilos, está ok */
                        height={200}
                        className="
                w-full h-auto object-cover        
                rounded-3xl shadow-2xl
                transition-transform duration-500
                hover:-translate-y-2 hover:scale-[1.02]
            "
                    />
                </div>

                {/* LISTA DE ITEMS */}
                <ul className="space-y-5 relative z-10">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="
                    flex items-start text-black text-lg
                    bg-white/10 px-4 py-3 rounded-2xl
                    border border-white/10 backdrop-blur
                    transition-all duration-300
                    hover:bg-white/20 hover:translate-x-1
                "
                        >
                            <Image
                                src="/icon/check-pink.png"
                                width={26}
                                height={26}
                                alt="check"
                                className="mr-3 mt-[2px]"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


            {/* CTA CONTACTO */}
            {/* CTA CONTACTO */}
            <div className="text-center mt-14">
                <a
                    href={`https://wa.me/5491162666780?text=${encodeURIComponent(
                        `Hola 👋 quiero consultar el combo: ${title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-block 
            bg-[#E8899B]
            text-white 
            py-4 px-10 
            rounded-2xl text-xl font-bold
            shadow-lg shadow-pink-400/40
            transition-all duration-300
            hover:scale-[1.05] hover:shadow-pink-300/60
        "
                >
                    Consultar este combo
                </a>
            </div>
            <WhatsAppButton />
        </main>
    );
}
