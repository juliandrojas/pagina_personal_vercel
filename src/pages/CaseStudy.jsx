import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { caseStudies } from "../data/caseStudies.js";
import { WHATSAPP_URL } from "../utils/contact.js";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return <main className="container py-5 mt-5"><h1>Proyecto no encontrado</h1><Link to="/">Volver al inicio</Link></main>;
  }

  return (
    <>
      <Navbar brand="Julián Rojas" items={[{ title: "Inicio", url: "/" }, { title: "Proyectos", url: "/#projects" }]} />
      <main className="case-study">
        <section className="case-hero">
          <div className="container">
            <Link className="back-link" to="/#projects">← Volver a proyectos</Link>
            <p className="case-type">{study.type}</p>
            <h1>{study.title}</h1>
            <p className="case-lead">{study.lead}</p>
            <ul className="tag-list case-tags" aria-label="Características del proyecto">
              {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </section>

        <div className="container case-content">
          {study.confidential && (
            <aside className="confidential-note" aria-label="Nota de confidencialidad">
              <strong>Información protegida.</strong> Este caso describe el enfoque y el valor del proyecto sin revelar datos, interfaces ni procesos confidenciales de la empresa.
            </aside>
          )}
          <div className="case-intro-grid">
            <img src={study.image} alt={study.imageAlt} className="case-image" />
            <div>
              <p className="section-eyebrow">El contexto</p>
              <h2>El reto</h2>
              <p>{study.challenge}</p>
              <p className="section-eyebrow case-solution-label">La respuesta</p>
              <h2>La solución</h2>
              <p>{study.solution}</p>
            </div>
          </div>

          <section className="case-section">
            <p className="section-eyebrow">Alcance funcional</p>
            <h2>Qué aporta la solución</h2>
            <ul className="capability-list">
              {study.capabilities.map((capability, index) => <li key={capability}><span aria-hidden="true">0{index + 1}</span>{capability}</li>)}
            </ul>
          </section>

          {study.workflow && (
            <section className="case-section">
              <p className="section-eyebrow">Flujo de atención</p>
              <h2>Una conversación más ordenada</h2>
              <ol className="workflow-list">
                {study.workflow.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}
              </ol>
            </section>
          )}

          <section className="case-summary">
            <div><p className="section-eyebrow">Mi aporte</p><h2>De la necesidad a una herramienta útil</h2><p>{study.role}</p></div>
            <div><p className="section-eyebrow">Resultado</p><p>{study.outcome}</p></div>
          </section>

          <section className="case-cta">
            <h2>¿Necesitas una solución similar?</h2>
            <p>Conversemos sobre tu reto y el siguiente paso.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-success">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
