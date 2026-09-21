// Footer.jsx
import CONTACT, { WHATSAPP_URL } from "../utils/contact.js";
import { Camera, Code2, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  const { social } = CONTACT;

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="footer-links">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm px-2 py-1 d-flex align-items-center gap-1"
          >
            <MessageCircle aria-hidden="true" size={15} />
            <span>WhatsApp</span>
          </a>
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm px-2 py-1 d-flex align-items-center gap-1">
              <Code2 aria-hidden="true" size={15} /><span>GitHub</span>
            </a>
          )}
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm px-2 py-1 d-flex align-items-center gap-1"
            >
              <Users aria-hidden="true" size={15} />
              <span>Facebook</span>
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-sm px-2 py-1 d-flex align-items-center gap-1"
            >
              <Camera aria-hidden="true" size={15} />
              <span>Instagram</span>
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
