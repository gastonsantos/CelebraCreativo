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
import ProductosSimilares from "@/components/detalle/productosSimilares";
import InstagramEmbed from "@/components/detalle/instagramVideo";
import Redes from "@/components/redes/redes";
import NotaCompra from "@/components/detalle/notaCompra";
import NotaML from "@/components/detalle/notaML";
export default function ProductDetail({ params }) {

    const { agregarProducto, pedido } = usePedido();   // <-- AÑADIDO AQUÍ
    const { id } = use(params);

    const [product, setProducto] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const [mainImage, setMainImage] = useState("");

    const [productosRelacionados, setProductosRelacionados] = useState([]);


    useEffect(() => {
        async function cargar() {
            try {
                const data = await obtenerProductoPorId(id);
                setProducto(data);
                setMainImage(data.images?.[0] || data.image);

                // 🔥 Cuando ya tengo el producto → cargar relacionados
                if (data.category) {
                    const response = await fetch(`/api/products?category=${data.category}`);
                    const json = await response.json();

                    // Excluir el mismo producto
                    const filtrados = json.products
                        .filter(p => p.id !== data.id)
                        .slice(0, 4); // Elegís cuántos mostrar

                    setProductosRelacionados(filtrados);
                }
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
                                <Zoom className="">
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

                            {/* VIDEO DE INSTAGRAM */}
                            {product.instagramUrl && (


                                <InstagramEmbed url={product.instagramUrl} />

                            )}
                        </div>

                        {/* DETALLE */}
                        <div className="w-full md:w-1/2 px-4">

                            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

                            {/* SUBTOTAL DEL PEDIDO ACTUAL */}
                            {pedido.length > 0 && (
                                <p className="text-gray-800 text-lg mb-4">
                                    🛒 <span className="font-semibold">Tu lista actual:</span>
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
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">

                                <a
                                    href={`https://wa.me/541170668904?text=${encodeURIComponent(
                                        `Hola 👋 quiero consultar producto: ${product.name}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
            inline-block 
            bg-[#E8899B]
            text-white 
            py-3 px-6 
            rounded-xl 
            text-base font-bold
            shadow-lg shadow-pink-400/40
            transition-all duration-300
            hover:scale-[1.05] hover:shadow-pink-300/60
            sm:py-4 sm:px-10 sm:text-xl  
            text-center
        "
                                >
                                    Consultar este producto
                                </a>

                                <button
                                    className="
           
            bg-[#E8899B]
            text-white 
            py-3 px-6 
            rounded-xl 
            text-base font-bold
            shadow-lg shadow-pink-400/40
            transition-all duration-300
            hover:scale-[1.05] hover:shadow-pink-300/60
            cursor-pointer
            sm:py-4 sm:px-10 sm:text-xl
        "
                                >
                                    Ver en MercadoLibre
                                </button>

                            </div>


                            <NotaML />
                            <NotaCompra />

                            <Redes />
                        </div>
                        <ProductosSimilares productos={productosRelacionados} />
                    </div>

                </div>

                <PedidoCarrito />
                <WhatsAppButton />

            </div>
            <Footer />
        </div>
    );
}
