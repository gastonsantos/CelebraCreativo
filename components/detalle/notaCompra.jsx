"use client";
export default function NotaCompra() {
 
 return(
     <>
             <div
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mt-2 flex items-start gap-3 animate-fadeSoft"
                            >
                            
                                <div className="mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-pink-300 animate-bounce-slow"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"
                                        />
                                    </svg>
                                </div>

                              
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-[#E8899B]">Nota importante: </span>
                                    Este sitio no funciona como tienda online. Los precios, stock y tiempos de entrega pueden variar.
                                    Para realizar un pedido, consultar opciones o coordinar un diseño personalizado, por favor contactanos por WhatsApp o mensaje directo.
                                    ¡Te asesoramos al instante!
                                </p>

                            </div>
     </>
 ); 

}
