import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CaseStudy from "./pages/CaseStudy.jsx";
import NotAvailable from "./components/NotAvailable.jsx";
import Home from "./pages/Home.jsx";
import Templates from "./pages/Templates.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
  {
    path: "/proyectos/:slug",
    element: <CaseStudy />,
  },
  {
    path: "*",
    element: <NotAvailable />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
