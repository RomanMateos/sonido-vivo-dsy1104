const contenedorProductos = document.querySelector("#contenedor-productos");
 
for (const producto of productos) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto-card");
 
  const enlace = document.createElement("a");
  enlace.href = "detalle-producto.html?codigo=" + producto.codigo;
 
  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.onerror = function () {
    imagen.src = "https://placehold.co/220x160?text=Sin+imagen";
  };
 
  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;
 
  enlace.appendChild(imagen);
  enlace.appendChild(nombre);
 
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "$" + producto.precio.toLocaleString("es-CL");
 
  const boton = document.createElement("button");
  boton.classList.add("boton");
  boton.textContent = "Agregar al carrito";
  boton.addEventListener("click", function () {
    agregarAlCarrito(producto.codigo);
  });
 
  tarjeta.appendChild(enlace);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(boton);
 
  contenedorProductos.appendChild(tarjeta);
}
 
