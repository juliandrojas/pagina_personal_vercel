// src/components/Gallery.jsx
import { Link } from "react-router-dom";

export default function Gallery({ images }) {
  return (
    <div className="project-grid">
      {images.map((item) => {
        const isInternal = item.link?.startsWith("/");

        return (
          <article className="project-card" key={item.title || item.description}>
            <img src={item.src} alt={item.alt} className="project-image" />
            <div className="project-body">
              <p className="project-type">{item.type || "Proyecto"}</p>
              <h3>{item.title || item.description}</h3>
              <p>{item.summary}</p>
              {item.stack?.length > 0 && (
                <ul className="tag-list" aria-label={`Tecnologías usadas en ${item.title || item.description}`}>
                  {item.stack.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              )}
              {item.link && (isInternal ? (
                <Link className="project-link" to={item.link}>{item.action || "Ver proyecto"} <span aria-hidden="true">→</span></Link>
              ) : (
                <a className="project-link" href={item.link} target="_blank" rel="noopener noreferrer">{item.action || "Ver proyecto"} <span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
