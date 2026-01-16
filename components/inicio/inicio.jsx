"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import Card from "@/components/inicio/card";
import Combos from "@/components/inicio/combos";
import Featured from "@/components/inicio/featured";
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
import OrdenarMenu from "@/components/inicio/ordenarMenu";
import { useSearchParams } from "next/navigation";
import { obtenerProductos } from "@/services/api";


const Inicio = () => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState(null);
  const [loading, setLoading] = useState(false);

  const category = searchParams.get("category");
  const query = searchParams.get("query");


  async function cargar(p) {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const limit = 6;

      const data = await obtenerProductos({
        page: p,
        limit,
        category,
        query,
        sort: null,
      });


      setProducts((prev) => {
        const ids = new Set(prev.map((it) => it.id));
        const nuevos = data.products.filter((it) => !ids.has(it.id));
        return [...prev, ...nuevos];
      });

      setHasMore(Boolean(data.hasMore));
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [category, query]);


  useEffect(() => {
    cargar(page);
  }, [page]);


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


  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((p) => p + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white">
      <Navbar />


      <Featured />
      <div className="mb-2 text-center">
        <div className="w-full h-px bg-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Todos nuestros productos
        </h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Descubrí todos nuestros productos, listos para tu próxima celebración.
        </p>
      </div>

      <div className="pt-8 mb-4 flex justify-center lg:justify-end px-6">
        <OrdenarMenu setSort={setSort} />
      </div>
      <div className="mb-8 flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>


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

      <Combos id="combos" />
      <PedidoCarrito />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Inicio;
