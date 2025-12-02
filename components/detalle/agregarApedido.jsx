"use client";
import { usePedido } from "@/context/pedidoContext";

export default function AgregarAPedido({ product }) {
  const { agregarProducto } = usePedido();

  return (
    <button
      onClick={() => agregarProducto(product)}
      className="bg-[#E8899B] text-white px-6 py-2 rounded-md hover:bg-pink-600 cursor-pointer"
    >
      Agregar al pedido
    </button>
  );
}
