import Image from "next/image";
import Link from "next/link";
export default function Card({ product }) {
    return (
        <div className="
    bg-white/30
    shadow-md border border-gray-200 rounded-lg max-w-sm
    m-4 transition-transform duration-200 hover:scale-105 cursor-pointer
    border border-pink-200 border border-pink-200 shadow-lg shadow-pink-400/40
    transition-all duration-300
     hover:scale-[1.05] hover:shadow-pink-300/60
">
            <Link href={`/product/${product.id}`} >
                <div className="w-full  min-w-sm max-w-sm h-[400px] relative rounded-lg shadow-md mb-4 overflow-hidden bg-black">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>



            <div className="p-5">
                <h5 className="text-[#E8899B] font-bold text-2xl tracking-tight mb-2 ">
                    {product.name}
                </h5>

                <p className="font-normal text-white mb-3">
                    {product.description}
                </p>

                <p className="text-xl font-semibold text-celebra-rosa">
                    ${product.price}
                </p>
            </div>
        </div>
    );
}
