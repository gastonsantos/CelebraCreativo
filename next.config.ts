import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    domains: ["images.unsplash.com","res.cloudinary.com" ], // <-- aquí va el dominio de tus imágenes externas
  },
 
};

export default nextConfig;
