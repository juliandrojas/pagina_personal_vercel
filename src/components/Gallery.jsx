// src/components/Gallery.jsx
import { useNavigate } from "react-router-dom";

export default function Gallery({ images }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.link) {
      window.open(item.link.trim(), "_blank", "noopener,noreferrer");
    } else {
      // 👇 Ahora pasas el tipo explícito
      navigate("/not-available", { state: { type: item.type || "default" } });
    }
  };

  return (
    <div className="gallery">
      {images.map((item, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => handleClick(item)}
          style={{ cursor: item.link ? "pointer" : "help" }}
        >
          <img src={item.src} alt={item.alt} className="gallery-img" />
          <p className="gallery-caption mt-2 text-center text-muted small text-wrap">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
