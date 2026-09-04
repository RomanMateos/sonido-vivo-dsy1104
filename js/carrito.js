function buscarProducto(codigo) {
  for (const producto of productos) {
    if (producto.codigo === codigo) {
      return producto;
    }
  }
  return null;
}
 
function agregarAlCarrito(codigo) {
  const carritoGuardado = localStorage.getItem("carrito");
  let carrito;
 
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  } else {
    carrito = [];
  }
 
  const producto = buscarProducto(codigo);
  let yaExiste = false;
 
  for (const item of carrito) {
    if (item.codigo === codigo) {
      item.cantidad = item.cantidad + 1;
      yaExiste = true;
    }
  }
 
  if (!yaExiste) {
    carrito.push({
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }
 
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(producto.nombre + " agregado al carrito");
}
 
