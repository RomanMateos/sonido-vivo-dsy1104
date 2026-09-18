function obtenerProductosAdmin() {
  const guardados = localStorage.getItem("productosAdmin");
  if (guardados) {
    return JSON.parse(guardados);
  }
  return [];
}

function eliminarProductoAdmin(codigo) {
  const productosAdmin = obtenerProductosAdmin();
  const actualizados = [];

  for (const producto of productosAdmin) {
    if (producto.codigo !== codigo) {
      actualizados.push(producto);
    }
  }

  localStorage.setItem("productosAdmin", JSON.stringify(actualizados));
  renderizarTablaProductos();
}

function renderizarTablaProductos() {
  const cuerpoTabla = document.querySelector("#cuerpo-tabla-productos");
  cuerpoTabla.textContent = "";

  const productosAdmin = obtenerProductosAdmin();
  const todosLosProductos = [];
  for (const producto of productos) {
    todosLosProductos.push(producto);
  }
  for (const producto of productosAdmin) {
    todosLosProductos.push(producto);
  }

  for (const producto of todosLosProductos) {
    const fila = document.createElement("tr");

    const celdaCodigo = document.createElement("td");
    celdaCodigo.textContent = producto.codigo;

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;

    const celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = producto.categoria;

    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = "$" + producto.precio.toLocaleString("es-CL");

    const celdaStock = document.createElement("td");
    if (producto.stockCritico !== undefined && producto.stock <= producto.stockCritico) {
      celdaStock.textContent = producto.stock + " (stock bajo)";
      celdaStock.classList.add("alerta-stock");
    } else {
      celdaStock.textContent = producto.stock;
    }

    const celdaAccion = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      eliminarProductoAdmin(producto.codigo);
    });
    celdaAccion.appendChild(botonEliminar);

    fila.appendChild(celdaCodigo);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaCategoria);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaStock);
    fila.appendChild(celdaAccion);

    cuerpoTabla.appendChild(fila);
  }
}

renderizarTablaProductos();