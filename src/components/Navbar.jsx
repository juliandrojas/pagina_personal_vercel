// Navbar.jsx

export default function Navbar({
  brand = "Mi página personal",
  brandUrl = "/",
  items = [],
}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href={brandUrl}>
          {brand}
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
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

              return (
                <li className="nav-item" key={index}>
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
