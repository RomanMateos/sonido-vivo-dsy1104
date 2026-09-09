const contenedorDestacados = document.querySelector("#contenedor-destacados");
 
for (const producto of productos) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto-card");
 
  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.onerror = function () {
    imagen.src = "https://placehold.co/220x160?text=Sin+imagen";
  };
 
  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;
 
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "$" + producto.precio.toLocaleString("es-CL");
 
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(precio);
 
  contenedorDestacados.appendChild(tarjeta);
}
 
