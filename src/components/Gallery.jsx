// src/components/Gallery.jsx
import { useNavigate } from "react-router-dom";

export default function Gallery({
  images,
  interactive = true,
  tooltipMessage = "",
}) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (!interactive) return;

    if (item.link) {
      window.open(item.link.trim(), "_blank", "noopener,noreferrer");
    } else {
      navigate("/not-available", { state: { type: item.type || "default" } });
    }
  };

  return (
    <div className="gallery">
      {images.map((item, index) => (
        <div
          key={index}
          className="gallery-item position-relative"
          onClick={interactive ? () => handleClick(item) : undefined}
          style={{
            cursor: interactive
              ? item.link
                ? "pointer"
                : "not-allowed" // 👈 Cambiado a "not-allowed"
              : "default",
          }}
          // Tooltip solo si NO es interactivo o si no hay link
          {...(!interactive && {
            "data-bs-toggle": "tooltip",
            "data-bs-placement": "top",
            title: tooltipMessage,
          })}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="gallery-img"
            // Si es interactivo pero sin link, también muestra tooltip
            {...(interactive &&
              !item.link && {
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "top",
                title: "Próximamente disponible",
              })}
          />
          <p className="gallery-caption mt-2 text-center text-muted small text-wrap">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
