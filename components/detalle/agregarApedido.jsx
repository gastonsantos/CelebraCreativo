"use client";
import { usePedido } from "@/context/pedidoContext";

export default function AgregarAPedido({ product }) {
  const { agregarProducto } = usePedido();

  return (
    <button
      onClick={() => agregarProducto(product)}
      className=" bg-[#E8899B]
            text-white 
            py-4 px-10 
            rounded-2xl text-xl font-bold
            shadow-lg shadow-pink-400/40
            transition-all duration-300
            hover:scale-[1.05] hover:shadow-pink-300/60 cursor-pointer"
    >
      Agregar al pedido
    </button>
  );
}
