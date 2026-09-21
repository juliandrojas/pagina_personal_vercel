import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Title from "../components/Title";
import CONTACT, { WHATSAPP_URL } from "../utils/contact.js";
import { galleryProjectsImages } from "../data/gallery.js";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
      <div className="container page-content">
        <section id="about_me" className="content-section">
          <p className="section-eyebrow">Perfil profesional</p>
          <Title text="Tecnología con criterio y colaboración" />
          <div className="row align-items-center gy-4">
            {/* Imagen — ahora con efecto suave y sombra */}
            <div className="col-md-5 col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="img-personal.jpg"
                  alt="Julián Rojas — Tecnólogo en desarrollo de sistemas"
                  className="rounded-circle img-fluid shadow-lg"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
                {/* Borde decorativo opcional */}
                <div className="position-absolute inset-0 rounded-circle border-3 border-white opacity-70"></div>
              </div>
            </div>

            {/* Texto — dividido en bloques con íconos y espaciado claro */}
            <div className="col-md-7 col-lg-8">
              <div className="bg-light rounded-3 p-4 h-100">
                <p className="lead text-dark mb-4">
                  <span className="fw-bold text-primary">
                    Hola, soy Julián Rojas
                  </span>{" "}
                  — tecnólogo en desarrollo de sistemas informáticos e ingeniero
                  de sistemas de las Unidades Tecnológicas de Santander.
                </p>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-3">
                      <span className="fs-4 text-success">💡</span>
                      <div>
                        <h6 className="text-dark mb-1">
                          Resiliencia & Liderazgo
                        </h6>
                        <p className="text-muted small mb-0">
                          He cultivado mi capacidad para enfrentar desafíos y
                          adaptarme rápidamente a cambios tecnológicos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-3">
                      <span className="fs-4 text-info">📚</span>
                      <div>
                        <h6 className="text-dark mb-1">
                          Autoaprendizaje constante
                        </h6>
                        <p className="text-muted small mb-0">
                          Mantengo mi conocimiento actualizado en tendencias y
                          tecnologías de programación.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-3">
                      <span className="fs-4 text-warning">🤝</span>
                      <div>
                        <h6 className="text-dark mb-1">
                          Colaboración efectiva
                        </h6>
                        <p className="text-muted small mb-0">
                          Valoro el trabajo en equipo y creo firmemente en el
                          poder de la colaboración para lograr objetivos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-3">
                      <span className="fs-4 text-primary">🚀</span>
                      <div>
                        <h6 className="text-dark mb-1">
                          Innovación & Aprendizaje
                        </h6>
                        <p className="text-muted small mb-0">
                          Estoy emocionado por aportar a entornos que fomenten
                          la innovación y el crecimiento continuo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-light">
                  <p className="text-muted small mb-0">
                    ¿Quieres saber más?{" "}
                    <a href="#contact" className="text-primary fw-medium">
                      Contáctame
                    </a>{" "}
                    o escríbeme por WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="content-section">
          <p className="section-eyebrow">Cómo puedo aportar</p>
          <Title text="Servicios y fortalezas" />
          <div className="service-grid">
            <article className="service-item">
              <span aria-hidden="true">01</span>
              <h3>Desarrollo web</h3>
              <p>Interfaces responsivas y soluciones web pensadas para ser claras, útiles y fáciles de mantener.</p>
            </article>
            <article className="service-item">
              <span aria-hidden="true">02</span>
              <h3>Software con estructura</h3>
              <p>Aplicación de fundamentos, patrones de diseño y buenas prácticas para resolver problemas reales.</p>
            </article>
            <article className="service-item">
              <span aria-hidden="true">03</span>
              <h3>Tutorías técnicas</h3>
              <p>Acompañamiento personalizado para comprender conceptos, organizar proyectos y avanzar con confianza.</p>
            </article>
          </div>
        </section>
        <section id="projects" className="content-section">
          <p className="section-eyebrow">Trabajo seleccionado</p>
          <Title text="Proyectos con propósito" />
          <Gallery images={galleryProjectsImages} />
        </section>
        <section id="contact" className="contact-panel content-section">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h2>¿Tienes una idea o un reto tecnológico?</h2>
            <p>Cuéntame qué necesitas y conversemos sobre el siguiente paso.</p>
          </div>
          <div className="contact-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-success">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
            <a href={CONTACT.social.github} target="_blank" rel="noopener noreferrer" className="contact-github">Ver GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </>
  );
}
