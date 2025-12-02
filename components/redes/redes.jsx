import Image from "next/image";

export default function Redes() {
  return (
    <div className="mt-6 flex items-center gap-4 flex-wrap">

      {/* Instagram */}
      <a
        href="https://instagram.com/tu_usuario_aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 transition-all
          p-3 rounded-xl flex items-center gap-3
        "
      >
        <Image
          src="/redes/rosa-insta.png"
          width={32}
          height={32}
          alt="Instagram"
          className="rounded-md"
        />
        <span className="text-sm text-gray-300 font-semibold">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/tu_usuario_aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 transition-all
          p-3 rounded-xl flex items-center gap-3
        "
      >
        <Image
          src="/redes/rosa-face1.png"
          width={32}
          height={32}
          alt="Facebook"
          className="rounded-md"
        />
        <span className="text-sm text-gray-300 font-semibold">
          Facebook
        </span>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@tu_usuario_aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 transition-all
          p-3 rounded-xl flex items-center gap-3
        "
      >
        <Image
          src="/redes/rosa-tiktok1.png"
          width={32}
          height={32}
          alt="TikTok"
          className="rounded-md"
        />
        <span className="text-sm text-gray-300 font-semibold">
          TikTok
        </span>
      </a>

      {/* Pinterest */}
      <a
        href="https://pinterest.com/tu_usuario_aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 transition-all
          p-3 rounded-xl flex items-center gap-3
        "
      >
        <Image
          src="/redes/rosa-pinte1.png"
          width={32}
          height={32}
          alt="Pinterest"
          className="rounded-md"
        />
        <span className="text-sm text-gray-300 font-semibold">
          Pinterest
        </span>
      </a>

    </div>
  );
}
