// src/components/NotAvailable.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WHATSAPP_URL } from "../utils/contact.js"; // ← importa tu configuración centralizada

// Configuración centralizada: fácil de extender
const CONFIG = {
  proyecto: {
    title: "Proyecto en desarrollo",
    subtitle: "Estoy construyendo algo especial",
    message:
      "Este proyecto aún está en fase de construcción. ¡Gracias por tu paciencia!",
    icon: "🏗️",
    color: "text-primary",
    bg: "bg-blue-50",
  },
  blog: {
    title: "Entrada próximamente",
    subtitle: "Pronto compartiré conocimientos",
    message:
      "Esta entrada del blog se publicará muy pronto. Suscríbete para no perdértela.",
    icon: "✍️",
    color: "text-info",
    bg: "bg-cyan-50",
  },
  default: {
    title: "Contenido no disponible",
    subtitle: "Aún no está listo",
    message:
      "Lo sentimos, este contenido aún no está disponible. Vuelve pronto.",
    icon: "🚧",
    color: "text-muted",
    bg: "bg-gray-50",
  },
};

export default function NotAvailable() {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || "default";
  const config = CONFIG[type] || CONFIG.default;

  // Scroll al top al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 px-3">
      {/* Contenedor con fondo suave y sombra */}
      <div
        className={`rounded-3 p-5 text-center shadow-lg ${config.bg} border border-light border-opacity-20`}
        style={{ maxWidth: "500px" }}
      >
        {/* Ícono grande */}
        <div className={`fs-1 mb-4 ${config.color}`}>{config.icon}</div>

        {/* Título */}
        <h2 className="text-dark fw-bold mb-2">{config.title}</h2>

        {/* Subtítulo — ahora garantizado centrado */}
        {config.subtitle && (
          <p className={`lead mb-3 ${config.color} text-center`}>
            {config.subtitle}
          </p>
        )}

        {/* Mensaje principal */}
        <p className="text-dark mb-4 fs-5 text-center">{config.message}</p>

        {/* Botón de volver */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2 mx-auto"
        >
          <span>←</span>
          <span>Volver</span>
        </button>

        {/* Separador y nota adicional — centrado y con enlace funcionando */}
        <div className="mt-4 pt-4 border-top border-light border-opacity-30 text-center">
          <p className="text-muted small mb-0">
            ¿Tienes alguna pregunta?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fw-medium"
            >
              Escríbeme por WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Footer ligero */}
      <div className="mt-5 text-center text-muted small">
        © {new Date().getFullYear()} Julián D. Rojas
      </div>
    </div>
  );
}
