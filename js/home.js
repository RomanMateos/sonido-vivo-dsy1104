// Buscamos el elemento del HTML donde vamos a insertar las tarjetas
const contenedorDestacados = document.getElementById("contenedor-destacados");

// Recorremos el arreglo de productos uno por uno
productos.forEach(function (producto) {

  // Creamos un elemento <div> vacio en memoria (todavia no esta en la pagina)
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto-card");

  // innerHTML nos permite armar el contenido interno de la tarjeta
  // usando template strings (backticks ` `) para insertar variables con ${...}
  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/220x160?text=Sin+imagen'">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio.toLocaleString("es-CL")}</p>
    <button class="boton" data-codigo="${producto.codigo}">Agregar al carrito</button>
  `;

  // Recien aqui la tarjeta se agrega de verdad al HTML visible
  contenedorDestacados.appendChild(tarjeta);
});