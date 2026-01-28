// Footer.jsx
import CONTACT, { WHATSAPP_URL } from "../utils/contact.js";

export default function Footer() {
  const { social } = CONTACT;

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        {/* ... otros elementos ... */}

        {/* Botones de redes */}
        <div className="d-flex justify-content-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm px-2 py-1 d-flex align-items-center gap-1"
          >
            <span>💬</span>
            <span>WA</span>
          </a>
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm px-2 py-1 d-flex align-items-center gap-1"
            >
              <span>📘</span>
              <span>FB</span>
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-sm px-2 py-1 d-flex align-items-center gap-1"
            >
              <span>📸</span>
              <span>IG</span>
            </a>
          )}
          {/* Añade más si existen */}
        </div>

        {/* Copyright */}
        <div className="text-center text-white opacity-80 small mt-3">
          © {new Date().getFullYear()} Julián D. Rojas
        </div>
      </div>
    </footer>
  );
}
