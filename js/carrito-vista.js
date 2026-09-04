const contenedorCarrito = document.querySelector("#contenedor-carrito");
const totalCarrito = document.querySelector("#total-carrito");
 
function obtenerCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado === null) {
    return [];
  }
  return JSON.parse(carritoGuardado);
}
 
function quitarDelCarrito(codigo) {
  const carrito = obtenerCarrito();
  const carritoActualizado = [];
 
  for (const item of carrito) {
    if (item.codigo !== codigo) {
      carritoActualizado.push(item);
    }
  }
 
  localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  renderizarCarrito();
}
 
function renderizarCarrito() {
  contenedorCarrito.textContent = "";
  const carrito = obtenerCarrito();
 
  if (carrito.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Tu carrito esta vacio.";
    contenedorCarrito.appendChild(mensaje);
    totalCarrito.textContent = "";
    return;
  }
 
  let total = 0;
 
  for (const item of carrito) {
    total = total + (item.precio * item.cantidad);
 
    const fila = document.createElement("div");
    fila.classList.add("producto-card");
 
    const nombre = document.createElement("h3");
    nombre.textContent = item.nombre;
 
    const cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad: " + item.cantidad;
 
    const subtotal = document.createElement("p");
    subtotal.classList.add("precio");
    subtotal.textContent = "$" + (item.precio * item.cantidad).toLocaleString("es-CL");
 
    const botonQuitar = document.createElement("button");
    botonQuitar.classList.add("boton");
    botonQuitar.textContent = "Quitar";
    botonQuitar.addEventListener("click", function () {
      quitarDelCarrito(item.codigo);
    });
 
    fila.appendChild(nombre);
    fila.appendChild(cantidad);
    fila.appendChild(subtotal);
    fila.appendChild(botonQuitar);
 
    contenedorCarrito.appendChild(fila);
  }
 
  totalCarrito.textContent = "Total: $" + total.toLocaleString("es-CL");
}
 
renderizarCarrito();
 
