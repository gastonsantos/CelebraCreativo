"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import Card from "@/components/inicio/card";
import Combos from "@/components/inicio/combos";
import Seguinos from "@/components/inicio/seguinos";
import Featured from "@/components/inicio/featured";
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
import OrdenarMenu from "@/components/inicio/ordenarMenu";
import { useSearchParams } from "next/navigation";
import { obtenerProductos } from "@/services/api";
import { motion } from "framer-motion";

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
      <div className="mb-14 text-center relative">

        {/* Línea animada */}
        <motion.div
          className="w-32 h-1 bg-[#E8899B] mx-auto mb-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Todos nuestros productos
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Descubrí todos nuestros productos, listos para tu próxima celebración.
        </motion.p>

        {/* Glow sutil */}
        <motion.div
          className="absolute inset-0 -z-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-80 h-28 bg-[#E8899B]/20 blur-3xl rounded-full" />
        </motion.div>

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
      <Seguinos />
      <Combos id="combos" />
      <PedidoCarrito />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Inicio;
