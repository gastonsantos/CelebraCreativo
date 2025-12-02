"use client"

import React, { useEffect, useState } from "react";

import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import ComoComprar from "@/components/comoComprar/comoComprar";
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
const Comprar = () => {



  return (
    <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b]">
      <Navbar />
      <ComoComprar />
      <PedidoCarrito />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Comprar;
