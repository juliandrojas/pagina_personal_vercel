// src/components/Gallery.jsx
import { useNavigate } from "react-router-dom";

export default function Gallery({
  images,
  interactive = true,
  showTooltip = false, // ← nuevo prop: controla explícitamente si mostrar tooltip
  tooltipMessage = "Próximamente disponible",
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
      {images.map((item, index) => {
        const shouldShowTooltip =
          showTooltip && (!interactive || (interactive && !item.link));

        return (
          <div
            key={index}
            className="gallery-item position-relative"
            onClick={interactive ? () => handleClick(item) : undefined}
            style={{
              cursor: interactive
                ? item.link
                  ? "pointer"
                  : "not-allowed"
                : "default",
            }}
            // ✅ Solo agrega tooltip si showTooltip === true
            {...(shouldShowTooltip && {
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              title: tooltipMessage,
            })}
          >
            <img src={item.src} alt={item.alt} className="gallery-img" />
            <p className="gallery-caption mt-2 text-center text-muted small text-wrap">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
