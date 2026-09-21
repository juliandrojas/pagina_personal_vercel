import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { ArrowUpRight, Globe2 } from "lucide-react";

// Array con la información de tus plantillas comercializables
const templatesData = [
  {
    id: "e-commerce-moda",
    title: "Plantilla E-Commerce de Moda",
    category: "Catálogo / Tienda Online",
    image: "/plantillas.png",
    description:
      "Catálogo interactivo optimizado para tiendas de ropa. Incluye filtro por categorías, botón de promociones, ordenamiento de precios y enlace directo a WhatsApp.",
    demoUrl: "https://demo-tienda-ropa.vercel.app/",
    tags: ["React", "Bootstrap", "Responsive"],
    badge: "Más vendida",
  },
  /*
  Aquí podrás agregar más plantillas en el futuro (ej. Restaurante, Barbería, Servicios):
  {
    id: "menu-restaurante",
    title: "Menú Digital para Restaurantes",
    category: "Gastronomía",
    image: "/images/demo-restaurante.png",
    description: "Menú interactivo con filtro de platos, alérgenos y pedidos directos.",
    demoUrl: "#",
    tags: ["React", "WhatsApp API"],
    badge: "Próximamente",
  }
  */
];

export default function Templates() {
  return (
    <>
      <Navbar
        brand="Julián Rojas"
        brandUrl="/"
        items={[
          { title: "Inicio", url: "/", active: false },
          { title: "Templates", url: "/templates", active: true },
        ]}
      />

      <main className="pt-5">
        <section className="container py-5" id="plantillas">
          <div className="text-center mb-5" data-reveal>
            <span className="badge bg-danger text-uppercase px-3 py-2 rounded-pill mb-2 fw-semibold">
              Soluciones Listas para Usar
            </span>
            <Title text="Plantillas & Demos Web" />
            <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
              Sitios web preconstruidos, optimizados y listos para personalizar con la marca de tu negocio en tiempo récord.
            </p>
          </div>

          {/* Grid de Plantillas */}
          <div className="row g-4 justify-content-center" data-reveal>
            {templatesData.map((template) => (
              <div key={template.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                  {template.badge && (
                    <span className="position-absolute top-0 end-0 bg-dark text-white fs-8 fw-semibold px-3 py-1 m-3 rounded-pill z-1 shadow-sm">
                      {template.badge}
                    </span>
                  )}

                  <div
                    className="bg-light position-relative overflow-hidden"
                    style={{ height: "220px" }}
                  >
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <span className="text-danger text-uppercase fw-bold fs-8 d-block mb-1">
                        {template.category}
                      </span>

                      <h5 className="card-title fw-bold text-dark mb-2">
                        {template.title}
                      </h5>

                      <p className="card-text text-muted fs-7 mb-3">
                        {template.description}
                      </p>

                      <div className="d-flex flex-wrap gap-1 mb-4">
                        {template.tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge bg-light text-secondary border fw-normal fs-8"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark w-100 rounded-pill btn-sm fw-medium py-2 d-flex align-items-center justify-content-center gap-2"
                    >
                      <Globe2 aria-hidden="true" size={17} /> Ver demo en vivo <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
