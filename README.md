
# Sonido Vivo — DSY1104 Desarrollo Fullstack II
 
Tienda online de instrumentos musicales, desarrollada para la Evaluación Parcial 1 del ramo DSY1104 (Duoc UC).
 
## Equipo
 
- Román Suárez ([@RomanMateos](https://github.com/RomanMateos))
- Sebastián Rojo ([@SebaRojo24](https://github.com/SebaRojo24))
- Manuel Valenzuela ([@manu-valenzuela](https://github.com/manu-valenzuela))
## Descripción
 
Sitio web desarrollado con HTML, CSS y JavaScript (sin frameworks ni backend en esta entrega), que permite a clientes remotos consultar el catálogo de "Sonido Vivo" (tienda de instrumentos musicales de Viña del Mar), agregar productos a un carrito de compra, y simular el flujo de pedido. Incluye panel de administración para gestión de productos y usuarios.
 
## Tecnologías
 
- HTML5 semántico
- CSS3 (variables CSS, Grid, diseño responsive)
- JavaScript (vanilla, sin librerías)
- Persistencia local con `localStorage` (sin backend en esta entrega)
- Git / GitHub (flujo de ramas: `main` → `develop` → `feature/*`)
## Estructura del proyecto
 
```
sonido-vivo-dsy1104/
├── index.html                              → Home
├── productos.html                          → Catálogo completo
├── detalle-producto.html                   → Detalle de un producto
├── carrito.html                            → Carrito de compras
├── login.html                              → Inicio de sesión
├── registro.html                           → Registro de usuarios
├── contacto.html                           → Formulario de contacto
├── nosotros.html                           → Acerca de la tienda
├── blogs.html                              → Blog de la tienda
├── admin/                                  → Panel de administración
├── assets
│   ├── css/estilos.css                     → Hoja de estilos compartida
│   ├── js/
│   │   ├── carrito-vista.js                → Vista del carrito
│   │   ├── carrito.js                      → Lógica de carrito (compartida)
│   │   ├── contacto.js                     → Lógica de validación y guardado formulario de contacto
│   │   ├── detalle.js                      → Renderizado del detalle
│   │   ├── home.js                         → Lógica de página inicial
│   │   ├── login.js                        → Validación de formulario inicio de sesión
│   │   ├── menu.js                         → Lógica del menú hamburguesa
│   │   ├── productos-data.js               → Datos del catálogo
│   │   ├── productos.js                    → Renderizado del catálogo
│   │   └── signup.js                       → Lógica de validación y guardado de usuarios
│   └── img
│       ├──blog/                            → Imágenes de blog
│       ├──nosotros/                        → Imágenes de nosotros
│       └──productos/                       → Imágenes de productos
└── docs/
    ├── ERS-sonido-vivo.md              → Especificación de Requisitos
    └── fuentes.md                      → Créditos de imágenes usadas
```
 
## Cómo ejecutar el proyecto
 
1. Clonar el repositorio.
2. Abrir la carpeta con VSCode.
3. Ejecutar `index.html` con la extensión Live Server.
## Estado actual
 
- [x] Home con productos destacados
- [x] Catálogo completo con carrito (localStorage)
- [x] Detalle de producto
- [x] Carrito de compras (vista completa)
- [x] Login / Registro / Contacto
- [x] Panel de administración
- [x] Nosotros / Blogs
## Documentación
 
- [Especificación de Requisitos (ERS)](https://docs.google.com/document/d/1CtJqsCESjYxVKJSN7Q1Z0zwnH-G7g_WQ/edit?usp=sharing&ouid=102897015544640057059&rtpof=true&sd=true)

- [Fuentes de imágenes](docs/fuentes.md)
 
