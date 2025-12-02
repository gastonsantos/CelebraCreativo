
import Navbar from "@/components/inicio/navbar";
import Footer from "@/components/inicio/footer";
import QuienesSomos from "@/components/nosotros/QuienesSomos"
import WhatsAppButton from "@/components/inicio/whatsapButton";
import PedidoCarrito from "@/components/detalle/pedidoCarrito";
const Nosotros = () => {
    return (
        <>
            <Navbar />
            <QuienesSomos />
            <PedidoCarrito />
            <WhatsAppButton />
            <Footer />
        </>

    )


};

export default Nosotros;
