"use client";

import Image from "next/image";
import { use } from "react";
import { useState, useEffect } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
import { obtenerProductoPorId } from "@/services/api";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import AgregarAPedido from "@/components/detalle/agregarApedido";
import { usePedido } from "@/context/pedidoContext";

import Redes from "@/components/redes/redes";
export default function ProductDetail({ params }) {

    const { agregarProducto, pedido } = usePedido();   // <-- AÑADIDO AQUÍ
    const { id } = use(params);

    const [product, setProducto] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        async function cargar() {
            try {
                const data = await obtenerProductoPorId(id);
                setProducto(data);
                setMainImage(data.images?.[0] || data.image);
            } catch (error) {
                console.error("Error cargando productos", error);
            }
        }
        cargar();
    }, []);

    // 👉 SUBTOTAL DEL PEDIDO ACTUAL
    const subtotalPedido = pedido.reduce(
        (acc, p) => acc + (Number(p.price) * (p.cantidad ?? 1)),
        0
    );

    if (!product) {
        return <h1 className="text-center mt-20 text-2xl">Producto no encontrado</h1>;
    }

    return (
        <div className="pt-24 mb-8 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen">
            <Navbar />
            <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen py-10 px-4 ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">

                        {/* IMÁGENES */}
                        <div className="w-full md:w-1/2 px-4 mb-10 ">

                            {mainImage && product.name && (
                                <Zoom>
                                    <div className="relative w-full h-[500px] rounded-lg shadow-md mb-4 overflow-hidden">
                                        <Image
                                            src={mainImage}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </Zoom>
                            )}

                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                {product.images?.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`w-20 h-20 relative rounded-md cursor-pointer overflow-hidden border-2 ${img === mainImage ? 'border-pink-500' : 'border-transparent'}`}
                                        onClick={() => setMainImage(img)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Miniatura ${index}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* DETALLE */}
                        <div className="w-full md:w-1/2 px-4">

                            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

                            {/* SUBTOTAL DEL PEDIDO ACTUAL */}
                            {pedido.length > 0 && (
                                <p className="text-gray-800 text-lg mb-4">
                                    🛒 <span className="font-semibold">Tu pedido actual:</span>
                                    <span className="text-[#E8899B] font-bold">  ${subtotalPedido}</span>
                                </p>
                            )}

                            <p className="text-gray-600 mb-4">{product.category}</p>

                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">${product.price}</span>
                                {200 && <span className="text-white line-through">$200</span>}
                            </div>

                            {/* Selector de cantidad */}
                            <div className="flex items-center gap-4 mb-6">
                                <button
                                    onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                                    className="bg-gray-500 px-3 py-1 rounded-lg text-xl cursor-pointer"
                                >
                                    -
                                </button>

                                <span className="text-xl font-semibold w-10 text-center">
                                    {cantidad}
                                </span>

                                <button
                                    onClick={() => setCantidad((prev) => prev + 1)}
                                    className="bg-gray-500 px-3 py-1 rounded-lg text-xl cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                            <AgregarAPedido product={{ ...product, cantidad }} />

                            <p className="text-white mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">Características:</h3>

                                {product.features?.map((feature, index) => (
                                    <p key={index} className="text-white">
                                        • {feature}
                                    </p>
                                ))}

                            </div>

                            {/* BOTONES */}
                            <div className="flex gap-4 mb-6">
                                <a
                                    href={`https://wa.me/5491162666780?text=${encodeURIComponent(
                                        `Hola 👋 quiero consultar producto: ${product.name}`
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
                                    Consultar este producto
                                </a>

                                <button className="bg-[#E8899B] text-white px-6 py-2 rounded-md hover:bg-pink-600 cursor-pointer">
                                    Ver en MercadoLibre
                                </button>


                            </div>
                            <div
                                className="
    bg-white/10 backdrop-blur-md border border-white/20 
    rounded-xl p-4 mt-2 flex items-start gap-3 
    animate-fadeSoft
  "
                            >
                                {/* ICONO */}
                                <div className="mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-pink-300 animate-bounce-slow"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"
                                        />
                                    </svg>
                                </div>

                                {/* TEXTO */}
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-[#E8899B]">Nota importante: </span>
                                    Este sitio no funciona como tienda online. Los precios, stock y tiempos de entrega pueden variar.
                                    Para realizar un pedido, consultar opciones o coordinar un diseño personalizado, por favor contactanos por WhatsApp o mensaje directo.
                                    ¡Te asesoramos al instante!
                                </p>

                            </div>
                            <Redes />
                        </div>

                    </div>
                </div>

                <PedidoCarrito />
                <WhatsAppButton />

            </div>
            <Footer />
        </div>
    );
}
