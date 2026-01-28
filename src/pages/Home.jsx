import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { WHATSAPP_URL } from "../utils/contact.js";

export default function Home() {
  const gallerySkillsImages = [
    {
      src: "/src/assets/react.svg",
      alt: "Logo de React",
      description: "Tutorías Personalizadas",
    },
    {
      src: "/vite.svg",
      alt: "Proyecto de e-commerce",
      description: "Tienda en línea con carrito y pagos integrados",
    },
    // ... más elementos
  ];
  const galleryProjectsImages = [
    {
      src: "/vite.svg",
      alt: "Sistema de biblioteca",
      description: "Prototipo de gestión de libros",
      type: "proyecto", // ← clave para personalizar
    },
    {
      src: "/src/assets/react.svg",
      alt: "Blog: Guía de React",
      description: "Aprende patrones avanzados",
      type: "proyecto",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="container">
        <section id="about_me" className="mt-5 pt-4 pb-5">
          <Title text="Conoce más sobre mí" />

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
        <section id="skills" className="mt-6 pt-3 pb-3">
          <Title text="Habilidades" />
          <Gallery images={gallerySkillsImages} />
        </section>
        <section id="projects" className="mt-6 pt-3">
          <Title text="Proyectos" />
          <Gallery images={galleryProjectsImages} />
        </section>
        <section id="blog" className="mt-6 pt-3">
          <Title text="Blog" />
          <p className="text-center">Próximamente...</p>
        </section>
        <section id="contact" className="mt-6 pt-3">
          <Title text="Contacto" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success w-100 py-3"
          >
            📲 Escríbeme por WhatsApp
          </a>
        </section>
      </div>
      <br />
      <Footer />
    </div>
  );
}
