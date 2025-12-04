"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductosSimilares({ productos = [] }) {
  if (!productos || productos.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">Productos similares</h3>

      <div className="
         grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5
      ">
        {productos.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="
              rounded-xl bg-gradient-to-b bg-white/20 from-black via-[#0f0f0f] to-[#1b1b1b] text-white shadow-md p-3 hover:scale-105 
              transition-transform duration-200 cursor-pointer border
            "
          >
            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={300}
              className="w-full h-40 object-cover rounded-lg"
            />

            <p className="font-semibold mt-2 text-sm">{p.name}</p>

            {p.price && (
              <p className="text-pink-600 font-bold text-sm">
                ${p.price}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
