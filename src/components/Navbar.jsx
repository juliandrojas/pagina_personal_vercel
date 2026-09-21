// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ brand = "Julián Rojas", brandUrl = "/", items = [] }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-nav fixed-top" aria-label="Navegación principal">
      <div className="container">
        <Link className="navbar-brand" to={brandUrl}>
          {brand}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#site-navigation"
          aria-controls="site-navigation"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="site-navigation">
          <ul className="navbar-nav ms-auto">
            {items.map((item, index) => {
              if (item.disabled) {
                return (
                  <li className="nav-item" key={index}>
                    <span className="nav-link disabled" aria-disabled="true">
                      {item.title}
                    </span>
                  </li>
                );
              }

              const isInternalRoute = item.url?.startsWith("/");

              return (
                <li className="nav-item" key={index}>
                  {isInternalRoute ? (
                    <Link
                      className={`nav-link ${item.active ? "active" : ""}`}
                      to={item.url}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.title}
                      {item.active && (
                        <span className="visually-hidden">(current)</span>
                      )}
                    </Link>
                  ) : (
                    <a
                      className={`nav-link ${item.active ? "active" : ""}`}
                      href={item.url}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.title}
                      {item.active && (
                        <span className="visually-hidden">(current)</span>
                      )}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
