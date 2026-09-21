import { WHATSAPP_URL } from "../utils/contact.js";
import Navbar from "./Navbar";

export default function Hero() {
  const navItems = [
    { title: "Inicio", url: "/", active: true },
    { title: "Perfil", url: "#about_me" },
    { title: "Servicios", url: "#skills" },
    { title: "Proyectos", url: "#projects" },
    { title: "Contacto", url: "#contact" },
  ];

  return (
    <>
      <Navbar items={navItems} brand="Julián Rojas" />
      <header className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-kicker">Desarrollo web · soluciones a medida</p>
          <h1 id="hero-title" className="hero-title">
            Construyo experiencias digitales claras y útiles.
          </h1>
          <p className="hero-copy">
            Soy Julián Rojas, ingeniero de sistemas. Desarrollo aplicaciones web
            y acompaño proyectos tecnológicos desde la idea hasta una solución funcional.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg hero-primary">
              Hablemos por WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="hero-secondary" href="#projects">Ver proyectos <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="hero-signals" aria-label="Áreas de trabajo">
            <li>Aplicaciones web</li>
            <li>Tutorías técnicas</li>
            <li>Soluciones para negocios</li>
          </ul>
        </div>
      </header>
    </>
  );
}
