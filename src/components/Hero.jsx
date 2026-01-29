// Hero.jsx

import { WHATSAPP_URL } from "../utils/contact.js";
import Navbar from "./Navbar";

export default function Hero() {
  const navItems = [
    { title: "Inicio", url: "/", active: true },
    { title: "Sobre mí", url: "#about_me" },
    { title: "Habilidades", url: "#skills" },
    { title: "Proyectos", url: "#projects" },
    { title: "Blog", url: "#blog" },
    { title: "Contacto", url: "#contact" },
  ];

  return (
    <>
      <Navbar items={navItems} brand="Mi página personal" />
      <div className="hero">
        <div className="text-white w-full max-w-2xl mx-auto px-3 text-center">
          <h1 className="hero-title mb-2">Bienvenido a mi página personal</h1>
          <p className="text-primary fw-bold mb-4 fs-6 text-center">
            🛠️ Ingeniero | 🌱 Aprendiz constante | 🤝 Colaborador efectivo
          </p>
          <a
            href={WHATSAPP_URL} // ← usa la variable
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg w-100 d-flex align-items-center justify-content-center gap-2 py-3 shadow-lg"
          >
            <span>💬</span>
            <span>Escríbeme por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
