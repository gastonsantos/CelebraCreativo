"use client";
import Image from "next/image";
import { usePedido } from "@/context/pedidoContext";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";

export default function PedidoCarrito() {
  const { pedido, eliminarProducto } = usePedido();
  const [open, setOpen] = useState(false);

  const cantidad = pedido.length;
  const telefono = "541170668904";
  
  const subtotal = pedido.reduce(
    (acc, p) => acc + (Number(p.price) * (p.cantidad ?? 1)),
    0
  );

  
  const mensajeWhatsapp = encodeURIComponent(
    "Hola! Quiero consultar por este pedido:\n\n" +
    pedido
      .map(
        (p) =>
          `• ${p.name} - $${p.price} x ${p.cantidad ?? 1} = $${p.price * (p.cantidad ?? 1)}`
      )
      .join("\n") +
    `\n\nTOTAL: $${subtotal}`
  );



  return (
    <>
     
      <div
        className="
    fixed bottom-28 right-5 z-[9999]
    bg-gradient-to-br from-[#E8899B] to-[#ffb3c4]
    shadow-md text-white
    w-20 h-20 rounded-full shadow-2xl
    flex items-center justify-center cursor-pointer
    hover:scale-110 transition-transform duration-200
  "
        onClick={() => setOpen(true)}
      >
        <FaListUl className="text-4xl" />

        {cantidad > 0 && (
          <span
            className="
        absolute -top-1 -right-1
        bg-white text-pink-500 font-bold
        text-sm w-6 h-6 rounded-full
        flex items-center justify-center shadow-md
      "
          >
            {cantidad}
          </span>
        )}
      </div>


      
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white text-black shadow-xl
          z-[99999] transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Tu Pedido</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">✖</button>
        </div>

        <div className="p-4 overflow-y-auto h-[70%]">
          {pedido.length === 0 ? (
            <p className="text-gray-500">No agregaste productos aún.</p>
          ) : (
            pedido.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 items-center border-b py-3"
              >
              
                <Image
                  src={product.image}
                  alt={product.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-cover rounded-md border"
                />

                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>

                  <p className="text-sm text-gray-600">
                    Precio: ${product.price}
                  </p>

                  <p className="text-sm text-gray-600">
                    Cantidad: <span className="font-semibold">{product.cantidad ?? 1}</span>
                  </p>

                  <p className="font-bold text-pink-600">
                    Subtotal: ${product.price * (product.cantidad ?? 1)}
                  </p>
                </div>

                <button
                  onClick={() => eliminarProducto(product.id)}
                  className="text-red-500 text-xl"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        
        {pedido.length > 0 && (
          <div className="p-4 border-t">
            <p className="text-lg font-bold mb-3">
              Total: <span className="text-pink-600">${subtotal}</span>
            </p>

            <a
              href={`https://wa.me/${telefono}?text=${mensajeWhatsapp}`}
              target="_blank"
              className="
                block w-full bg-green-500 text-white
                py-3 text-center font-bold rounded-lg
              "
            >
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
}
