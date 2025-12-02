

export default function QuienesSomos() {


    return (
        <div className=" pt-24 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1b1b1b] text-white min-h-screen px-6 py-16 flex flex-col items-center">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#E8899B] mb-6 text-center">
                ¿Quiénes Somos?
            </h1>


            <p className="max-w-3xl text-center text-lg md:text-xl text-white mb-12">
                En <span className="text-[#E8899B]font-semibold">Celebra Creativo</span> nos dedicamos a transformar ideas en diseño.
                Amamos crear productos únicos, llenos de color, dedicación y un toque especial
                para cada cliente. Nuestro objetivo es que cada compra sea una experiencia
                inolvidable.
            </p>


            {/* Sección tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                {/* Card 1 */}
                <div className="bg-white/30  shadow-lg p-8 rounded-2xl border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60">
                    <h3 className="text-2xl font-bold text-[#E8899B] mb-4">Nuestra Misión</h3>
                    <p className="text-white leading-relaxed">
                        Crear productos personalizados y de calidad que acompañen los mejores momentos
                        de la vida. Cada pieza está hecha con dedicación y amor por los detalles.
                    </p>
                </div>


                {/* Card 2 */}
                <div className="bg-white/30  shadow-lg p-8 rounded-2xl border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60">
                    <h3 className="text-2xl font-bold text-[#E8899B] mb-4">Nuestra Visión</h3>
                    <p className="text-white leading-relaxed">
                        Ser una marca referente en creatividad, diseño y personalización, conectando
                        con cada cliente a través de productos que transmiten emoción.
                    </p>
                </div>


                {/* Card 3 */}
                <div className="bg-white/30  shadow-lg p-8 rounded-2xl border border-pink-200 shadow-lg shadow-pink-400/40
                        transition-all duration-300
                        hover:scale-[1.05] hover:shadow-pink-300/60">
                    <h3 className="text-2xl font-bold text-[#E8899B] mb-4">Nuestros Valores</h3>
                    <p className="text-white leading-relaxed">
                        Pasión, dedicación, creatividad y compromiso con cada proyecto. Trabajamos
                        para ofrecer siempre la mejor experiencia.
                    </p>
                </div>
            </div>


            {/* Sección final */}
            <div className="max-w-3xl mt-16 text-center text-white text-lg">
                <p>
                    Gracias por confiar en nosotros para acompañar tus momentos especiales.
                    <br />
                    <span className="text-[#E8899B] font-semibold">¡Seguimos creando juntos!</span>
                </p>
            </div>
        </div>
    );
}
