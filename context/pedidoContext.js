"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PedidoContext = createContext();

export function PedidoProvider({ children }) {
  const [pedido, setPedido] = useState([]);

  // Cargar desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("pedido");
    if (stored) setPedido(JSON.parse(stored));
  }, []);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("pedido", JSON.stringify(pedido));
  }, [pedido]);

  // Agregar producto
  const agregarProducto = (producto) => {
    setPedido((prev) => {
      const nuevo = [...prev, producto];
      return nuevo;
    });
  };

  const eliminarProducto = (id) => {
    setPedido((prev) => {
      const index = prev.findIndex((p) => p.id === id); // busca el primero

      if (index === -1) return prev; // no existe → no cambia nada

      const nuevo = [...prev];
      nuevo.splice(index, 1); // borra SOLO UNO
      return nuevo;
    });
  };

  return (
    <PedidoContext.Provider value={{ pedido, agregarProducto, eliminarProducto }}>
      {children}
    </PedidoContext.Provider>
  );
}

export function usePedido() {
  return useContext(PedidoContext);
}
