import nodemailer from "nodemailer";
import { USER, PASS } from "@/config/constants";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: USER,       
        pass: PASS        
      },
    });

    await transporter.sendMail({
      from: USER,
      to: USER, 
      subject: "Nuevo contacto",
      html: `
      <p>Nombre: ${data.name}</p>
      <p>Telefono: ${data.tel}</p>
      <p>Email: ${data.email}</p>
      <p>Mensaje: ${data.message}</p>`
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.log(err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
