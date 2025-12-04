"use client";

import Image from "next/image";
import Link from "next/link";

export default function CombosSimilares({ combos = [], currentTitle }) {
  const relacionados = combos.filter(c => c.title !== currentTitle);

  if (relacionados.length === 0) return null;

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold mb-6">Combos similares</h3>

      <div className="
        flex gap-5 overflow-x-auto scrollbar-hide
        snap-x snap-mandatory scroll-smooth pb-4
      ">
        {relacionados.map((combo) => (
          <Link
            key={combo.title}
            href={`/combos/${combo.id}`}
            className="
              min-w-[220px] snap-start
              bg-white/70 backdrop-blur-xl
              p-4 rounded-2xl
              shadow-lg border border-white/20
              hover:scale-105 transition-transform duration-200
              flex-shrink-0
            "
          >
            <Image
              src={combo.image}
              alt={combo.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
            <p className="font-semibold text-lg mt-3">{combo.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
