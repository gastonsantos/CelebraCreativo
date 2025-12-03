"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Buscador() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const buscar = (e) => {
        e.preventDefault();
        router.push(`/inicio?query=${query}`);
    };

    return (
        <form onSubmit={buscar} className="relative mx-auto text-gray-600 lg:block hidden">
            <input
                className="
                    border-2 border-pink-300 
                    bg-black/30 backdrop-blur text-white 
                    h-10 pl-2 pr-8 rounded-lg text-sm 
                    focus:outline-none
                "
                type="text"
                placeholder="Buscar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2 cursor-pointer">
                <svg className="text-pink-300 h-4 w-4 fill-current" viewBox="0 0 56.966 56.966">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z" />
                </svg>
            </button>
        </form>
    );
}
