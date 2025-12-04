"use client";

import React, { useEffect, useState, useRef } from "react";
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

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState(null);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);

  const category = searchParams.get("category");
  const query = searchParams.get("query");

  // -------------------------------------------------
  // 🚀 CARGA PAGINADA
  // -------------------------------------------------
  async function cargar(p) {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      let url = `/api/products?page=${p}&limit=3`;
      if (category) url += `&category=${encodeURIComponent(category)}`;
      if (query) url += `&query=${encodeURIComponent(query)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al obtener productos");
      const data = await res.json();

      // evita duplicados si por alguna razón se llamara dos veces
      setProducts((prev) => {
        const ids = new Set(prev.map((it) => it.id));
        const next = data.products.filter((it) => !ids.has(it.id));
        return [...prev, ...next];
      });

      setHasMore(Boolean(data.hasMore));
    } catch (err) {
      console.error("Error cargar productos:", err);
    } finally {
      setLoading(false);
    }
  }

  // Cargar primera página cuando cambian filtros
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);

    // Carga inmediata la primera página
    cargar(1);
  }, [category, query]);

  // Cargar páginas siguientes (evita volver a cargar página 1)
  useEffect(() => {
    if (page > 1) cargar(page);
  }, [page]);



  // -------------------------------------------------
  // 🚀 ORDENAMIENTO
  // -------------------------------------------------
  useEffect(() => {
    if (!sort) return;

    let sorted = [...products];

    if (sort === "precio-asc")
      sorted.sort((a, b) => Number(a.price) - Number(b.price));

    if (sort === "precio-desc")
      sorted.sort((a, b) => Number(b.price) - Number(a.price));

    if (sort === "nombre-asc")
      sorted.sort((a, b) => a.name.localeCompare(b.name));

    if (sort === "nombre-desc")
      sorted.sort((a, b) => b.name.localeCompare(a.name));

    setProducts(sorted);
  }, [sort]);

  // Fallback: función manual para cargar más (botón)
  const handleLoadMore = () => {
    if (!loading && hasMore) setPage((p) => p + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white">
      <Navbar />

      <div className="pt-24 mb-4 flex justify-center lg:justify-end px-6">
        <OrdenarMenu setSort={setSort} />
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="mb-8 flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* LOADER INFINITO */}
      <div className="h-20 flex flex-col justify-center items-center">
        {loading && <p className="text-pink-300">Cargando más productos...</p>}

        {!loading && hasMore && (
          <button
            onClick={handleLoadMore}
            className="bg-[#E8899B]
            text-white 
            py-4 px-10 
            rounded-2xl text-xl font-bold
            shadow-lg shadow-pink-400/40
            transition-all duration-300
            hover:scale-[1.05] hover:shadow-pink-300/60 cursor-pointer"
          >
            Cargar más productos
          </button>
        )}

        {!hasMore && (
          <p className="text-gray-400 mt-2">No hay más productos.</p>
        )}
      </div>


      <Combos />
      <PedidoCarrito />
      <WhatsAppButton />
      <Footer id="combos" />
    </div>
  );
};

export default Inicio;
