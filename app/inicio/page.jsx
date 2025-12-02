"use client";

import { Suspense } from "react";
import Inicio from "@/components/inicio/inicio";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Cargando...</div>}>
      <Inicio />
    </Suspense>
  );
}
