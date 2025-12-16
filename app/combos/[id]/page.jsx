import ComboDetail from "@/components/combos/comboDetail";
import { combosData } from "@/data/combosData";
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";

export default async function ComboPage({ params }) {

    const { id } = await params;

    const combo = combosData[id];

  
    const allCombos = Object.values(combosData);

    if (!combo) {
        return (
            <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen">
                <Navbar />
                <div className="text-center text-white py-40">
                    <h2 className="text-3xl font-bold">Combo no encontrado</h2>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen">
            <Navbar />
            <ComboDetail {...combo} allCombos={allCombos} />
            <PedidoCarrito />
            <Footer />
        </div>
    );
}
