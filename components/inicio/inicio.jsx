"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import Card from "@/components/inicio/card";
import Combos from "@/components/inicio/combos";
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
import { useSearchParams } from "next/navigation";
import OrdenarMenu from "@/components/inicio/ordenarMenu";

const Inicio = () => {
  const searchParams = useSearchParams();
  const [products, setProductos] = useState([]);
  const [sort, setSort] = useState(null);

  const category = searchParams.get("category");
  const query = searchParams.get("query");

  // 🔹 Cargar productos con filtros
  useEffect(() => {
    async function cargar() {
      try {
        const url =
          query
            ? `/api/products?query=${query}`
            : category
              ? `/api/products?category=${category}`
              : "/api/products";

        const data = await fetch(url).then((r) => r.json());
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos", error);
      }
    }
    cargar();
  }, [category, query]);

  // 🔹 ORDENAMIENTO
  useEffect(() => {
    let sorted = [...products];

    if (sort === "precio-asc")
      sorted.sort((a, b) => Number(a.price) - Number(b.price));

    if (sort === "precio-desc")
      sorted.sort((a, b) => Number(b.price) - Number(a.price));

    if (sort === "nombre-asc")
      sorted.sort((a, b) => a.name.localeCompare(b.name));

    if (sort === "nombre-desc")
      sorted.sort((a, b) => b.name.localeCompare(a.name));

    setProductos(sorted);
  }, [sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white">

      <Navbar />

      {/* 👉 CONTENEDOR DEL MENÚ DE ORDENAR */}
      <div className="pt-24 mb-4 flex justify-center lg:justify-end px-6">
        <OrdenarMenu setSort={setSort} />
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="mb-8 flex flex-wrap justify-center">
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
