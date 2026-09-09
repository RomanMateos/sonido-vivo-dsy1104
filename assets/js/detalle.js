const parametros = new URLSearchParams(window.location.search);
const codigoBuscado = parametros.get("codigo");
const contenedorDetalle = document.querySelector("#contenedor-detalle");
 
const producto = buscarProducto(codigoBuscado);
 
if (producto === null) {
  const mensaje = document.createElement("p");
  mensaje.textContent = "Producto no encontrado.";
  contenedorDetalle.appendChild(mensaje);
} else {
  const nombre = document.createElement("h1");
  nombre.textContent = producto.nombre;
 
  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.style.maxWidth = "300px";
  imagen.onerror = function () {
    imagen.src = "https://placehold.co/300x220?text=Sin+imagen";
  };
 
  const descripcion = document.createElement("p");
  descripcion.textContent = producto.descripcion;
 
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "$" + producto.precio.toLocaleString("es-CL");
 
  const stock = document.createElement("p");
  stock.textContent = "Stock disponible: " + producto.stock;
 
  const boton = document.createElement("button");
  boton.classList.add("boton");
  boton.textContent = "Agregar al carrito";
  boton.addEventListener("click", function () {
    agregarAlCarrito(producto.codigo);
  });
 
  contenedorDetalle.appendChild(nombre);
  contenedorDetalle.appendChild(imagen);
  contenedorDetalle.appendChild(descripcion);
  contenedorDetalle.appendChild(precio);
  contenedorDetalle.appendChild(stock);
  contenedorDetalle.appendChild(boton);
}
 
