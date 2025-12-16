"use client";
import { useRef, useState } from "react";
import { sendEmail } from "@/services/email/email";

export default function Mensaje() {
  const form = useRef();
  const [status, setStatus] = useState("form"); // form | success | error

  const sendEmail1 = async (e) => {
    e.preventDefault();

    const success = await sendEmail(form.current);

    if (success) {
      setStatus("success");
      form.current.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="shadow-md border border-black rounded-lg p-8 bg-transparent text-black">

      
      {status === "form" && (
        <>
          <p className="font-semibold tracking-wide mb-3 text-black">
            Envíanos tu consulta
          </p>

          <form ref={form} onSubmit={sendEmail1} className="space-y-3">

            <input
              name="user_name"
              type="text"
              placeholder="Nombre"
              required
              className="w-full p-2 rounded-md text-white"
            />

            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 rounded-md text-white"
            />

            <input
              name="user_phone"
              type="text"
              placeholder="Teléfono"
              className="w-full p-2 rounded-md text-white"
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              required
              className="w-full p-2 h-24 rounded-md text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </>
      )}

      
      {status === "success" && (
        <div className="flex flex-col items-center text-center py-12 animate-fadeIn">
          {/* Check animado */}
          <svg
            className="w-20 h-20 text-green-500 animate-scaleIn"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <p className="mt-4 text-lg font-semibold text-black">
            ¡Mensaje enviado con éxito!
          </p>
        </div>
      )}

     
      {status === "error" && (
        <div className="flex flex-col items-center text-center py-12 animate-fadeIn">
          <p className="text-red-600 text-lg font-semibold">
            Error al enviar mensaje. Intente más tarde.
          </p>
          <button
            onClick={() => setStatus("form")}
            className="mt-4 px-4 py-2 bg-black text-white rounded-md"
          >
            Volver al formulario
          </button>
        </div>
      )}
    </div>
  );
}
