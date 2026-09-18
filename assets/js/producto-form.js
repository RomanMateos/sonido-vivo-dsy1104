const formulario = document.querySelector("#form-producto");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const codigo = document.querySelector("#codigo").value.trim();
  const nombre = document.querySelector("#nombre").value.trim();
  const descripcion = document.querySelector("#descripcion").value.trim();
  const precio = document.querySelector("#precio").value.trim();
  const stock = document.querySelector("#stock").value.trim();
  const stockCritico = document.querySelector("#stockCritico").value.trim();
  const categoria = document.querySelector("#categoria").value;
  const imagen = document.querySelector("#imagen").value.trim();

  const errorCodigo = document.querySelector("#error-codigo");
  const errorNombre = document.querySelector("#error-nombre");
  const errorPrecio = document.querySelector("#error-precio");
  const errorStock = document.querySelector("#error-stock");
  const errorCategoria = document.querySelector("#error-categoria");

  errorCodigo.textContent = "";
  errorNombre.textContent = "";
  errorPrecio.textContent = "";
  errorStock.textContent = "";
  errorCategoria.textContent = "";

  let formularioValido = true;

  if (codigo.length < 3) {
    errorCodigo.textContent = "El codigo debe tener al menos 3 caracteres.";
    formularioValido = false;
  }

  if (nombre === "" || nombre.length > 100) {
    errorNombre.textContent = "El nombre es requerido, maximo 100 caracteres.";
    formularioValido = false;
  }

  if (precio === "" || Number(precio) < 0) {
    errorPrecio.textContent = "El precio es requerido y no puede ser negativo.";
    formularioValido = false;
  }

  if (stock === "" || Number(stock) < 0) {
    errorStock.textContent = "El stock es requerido y no puede ser negativo.";
    formularioValido = false;
  }

  if (categoria === "") {
    errorCategoria.textContent = "Debe seleccionar una categoria.";
    formularioValido = false;
  }

  const mensajeExito = document.querySelector("#mensaje-exito");

  if (formularioValido) {
    const nuevoProducto = {
      codigo: codigo,
      nombre: nombre,
      categoria: categoria,
      descripcion: descripcion,
      precio: Number(precio),
      stock: Number(stock),
      imagen: imagen
    };

    if (stockCritico !== "") {
      nuevoProducto.stockCritico = Number(stockCritico);
    }

    const guardados = localStorage.getItem("productosAdmin");
    let productosAdmin;

    if (guardados) {
      productosAdmin = JSON.parse(guardados);
    } else {
      productosAdmin = [];
    }

    productosAdmin.push(nuevoProducto);
    localStorage.setItem("productosAdmin", JSON.stringify(productosAdmin));

    mensajeExito.textContent = "Producto guardado correctamente.";
    formulario.reset();
  } else {
    mensajeExito.textContent = "";
  }
});