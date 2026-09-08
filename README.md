
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
├── index.html              → Home
├── productos.html           → Catálogo completo
├── detalle-producto.html    → Detalle de un producto
├── carrito.html              → Carrito de compras
├── login.html / registro.html / contacto.html
├── nosotros.html / blogs.html
├── admin/                     → Panel de administración
├── css/estilos.css            → Hoja de estilos compartida
├── js/
│   ├── productos-data.js      → Datos del catálogo
│   ├── carrito.js             → Lógica de carrito (compartida)
│   ├── productos.js           → Renderizado del catálogo
│   └── detalle.js             → Renderizado del detalle
├── img/productos/              → Imágenes de productos
└── docs/
    ├── ERS-sonido-vivo.md      → Especificación de Requisitos
    └── fuentes.md               → Créditos de imágenes usadas
```
 
## Cómo ejecutar el proyecto
 
1. Clonar el repositorio.
2. Abrir la carpeta con VSCode.
3. Ejecutar `index.html` con la extensión Live Server.
## Estado actual
 
- [x] Home con productos destacados
- [x] Catálogo completo con carrito (localStorage)
- [x] Detalle de producto
- [ ] Carrito de compras (vista completa)
- [ ] Login / Registro / Contacto
- [ ] Panel de administración
- [ ] Nosotros / Blogs
## Documentación
 
- [Especificación de Requisitos (ERS)](docs/ERS-sonido-vivo.md)
- [Fuentes de imágenes](docs/fuentes.md)
 
