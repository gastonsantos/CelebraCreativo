"use client";

import { usePedido } from "@/context/pedidoContext";
import { useState } from "react";
import CarritoSidebar from "./PedidoSidebar";

export default function PedidoFloatingIcon() {
    const { pedido } = usePedido();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ICONO FLOTANTE */}
            <div
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 bg-pink-600 w-14 h-14 rounded-full shadow-xl cursor-pointer flex items-center justify-center text-white text-2xl"
            >
                🛒
                {pedido.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {pedido.length}
                    </span>
                )}
            </div>

            {/* SIDEBAR */}
            <CarritoSidebar open={open} setOpen={setOpen} />
        </>
    );
}
