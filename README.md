# JR — Portafolio

Portafolio personal de **Julián Rojas**, ingeniero de sistemas. Reúne servicios, perfil profesional y proyectos seleccionados, entre ellos SIGTI, Kazu y Rutas AMB.

## Contenido

- Presentación profesional y formas de contacto.
- Servicios de desarrollo de soluciones digitales, tutorías técnicas y soporte tecnológico.
- Galería de proyectos con casos de estudio para SIGTI y Kazu.
- Navegación con desplazamiento a secciones, retorno contextual desde los proyectos, animaciones de entrada y efecto parallax respetuoso de la preferencia de reducción de movimiento.
- Enlaces de contacto y redes sociales centralizados.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Lucide](https://lucide.dev/) para iconos
- CSS personalizado y Tailwind CSS

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Ejecutar el proyecto localmente

```bash
git clone https://github.com/juliandrojas/pagina_personal_vercel.git
cd pagina_personal_vercel
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción en `dist/`. |
| `npm run preview` | Previsualiza la compilación de producción. |
| `npm run lint` | Ejecuta las reglas de ESLint. |

## Estructura principal

```text
src/
├── components/    # Componentes reutilizables de interfaz
├── data/          # Datos de proyectos y casos de estudio
├── pages/         # Inicio y páginas de detalle
├── utils/         # Configuración de contacto
├── index.css      # Estilos globales y sistema visual
└── main.jsx       # Rutas y punto de entrada

public/             # Imágenes y favicon del portafolio
```

## Personalización

- Edita `src/data/gallery.js` para añadir, eliminar o actualizar proyectos de la galería.
- Edita `src/data/caseStudies.js` para modificar el contenido de los casos de estudio.
- Actualiza el número, mensaje inicial y redes en `src/utils/contact.js`.
- Cambia las imágenes de los proyectos dentro de `public/` y actualiza sus rutas en los archivos de datos.

## Despliegue

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com/) como una aplicación Vite:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Production Branch:** `master`

Cada push a la rama de producción puede generar un nuevo despliegue al tener el repositorio conectado en Vercel.

## Autor

**Julián Rojas**

- [GitHub](https://github.com/juliandrojas)
- [WhatsApp](https://wa.me/573164167536)
