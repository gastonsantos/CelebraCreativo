"use client"

import React, { useEffect, useState } from "react";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import Card from "@/components/inicio/card";
import Combos from "@/components/inicio/combos";
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
import { obtenerProductos } from "@/services/api";
import { useSearchParams } from "next/navigation";
const Inicio = () => {
  const searchParams = useSearchParams();
  const [products, setProductos] = useState([]);
  useEffect(() => {
    async function cargar() {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos", error);
      }
    }

    cargar();
  }, []);
  useEffect(() => {
    const section = searchParams.get("section");

    if (section === "combos") {
      const element = document.getElementById("combos");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // espera un poco para asegurar render
      }
    }
  }, [searchParams]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white">



      <Navbar />
      <div className="pt-24 mb-8 flex flex-wrap justify-center ">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Combos id="combos" />
      <PedidoCarrito />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Inicio;
