import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "../utils/contact.js";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    let frameId;
    const updateParallax = () => {
      frameId = undefined;
      const offset = Math.min(window.scrollY * 0.16, 120);
      heroRef.current?.style.setProperty("--hero-parallax-offset", `${offset}px`);
    };
    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const navItems = [
    { title: "Inicio", url: "/", active: true },
    { title: "Perfil", url: "#about_me" },
    { title: "Soluciones", url: "#skills" },
    { title: "Proyectos", url: "#projects" },
    { title: "Contacto", url: "#contact" },
  ];

  return (
    <>
      <Navbar items={navItems} brand="JR - Portafolio" />
      <header ref={heroRef} className="hero hero-parallax" aria-labelledby="hero-title">
        <div className="hero-parallax-layer" aria-hidden="true" />
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
              <MessageCircle aria-hidden="true" size={19} /> Hablemos por WhatsApp <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="hero-secondary" href="#projects">Ver proyectos <ArrowDown aria-hidden="true" size={17} /></a>
          </div>
          <ul className="hero-signals" aria-label="Áreas de trabajo">
            <li><Code2 aria-hidden="true" size={16} /> Aplicaciones web</li>
            <li><GraduationCap aria-hidden="true" size={16} /> Tutorías técnicas</li>
            <li><BriefcaseBusiness aria-hidden="true" size={16} /> Soluciones para negocios</li>
          </ul>
        </div>
      </header>
    </>
  );
}
