//SIGNUP.HTML - Validación de registro de Usuario Nuevo

  //Campos del formulario  

  const nombre = document.querySelector("#nombre");
  const apellidos = document.querySelector("#apellidos") 
  const rut = document.querySelector("#rut");
  const email = document.querySelector("#email");
  const regionSelect = document.querySelector("#region");
  const comunaSelect = document.querySelector("#comuna");
  const calle = document.querySelector("#calle"); 
  const password = document.querySelector("#password");
  const mensajeExito = document.querySelector("#mensaje-exito"); 
  

  //Funciones de error
  function mostrarError(control, idError, mensaje) { 
    const salida = document.querySelector(`#${idError}`); 
    salida.textContent = mensaje; 
    control.classList.add("campo-invalido"); 
    control.setAttribute("aria-invalid", "true"); 
  } 
  
  function limpiarError(control, idError) { 
    const salida = document.querySelector(`#${idError}`); 
    salida.textContent = ""; 
    control.classList.remove("campo-invalido"); 
    control.removeAttribute("aria-invalid"); 
  }

//Validaciones
  //Nombre
  function validarNombre(valor) { 
    limpiarError(nombre, "error-nombre"); 
  
    if (valor === "") { 
      mostrarError(nombre, "error-nombre", "El nombre es obligatorio."); 
      return false; 
    }
  
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      if (!soloLetras.test(valor)) {
        mostrarError(nombre, "error-nombre", "El nombre solo puede contener letras.");
        return false;
      }

    if (valor.length > 50) { 
      mostrarError(nombre, "error-nombre", "Máximo 50 caracteres."); 
      return false; 
    } 
  
    return true; 
  }
    //Blur e input Nombre
    nombre.addEventListener("blur", function () { 
        validarNombre(nombre.value.trim()); 
    }); 
    
    nombre.addEventListener("input", function () { 
        limpiarError(nombre, "error-nombre"); 
    });

  //Apellidos
  function validarApellidos(valor) { 
    limpiarError(apellidos, "error-apellidos"); 
  
    if (valor === "") { 
      mostrarError(apellidos, "error-apellidos", "Los apellidos son obligatorios."); 
      return false; 
    }
  
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!soloLetras.test(valor)) {
    mostrarError(apellidos, "error-apellidos", "Los apellidos solo pueden contener letras.");
    return false;
  }

    if (valor.length > 50) { 
      mostrarError(apellidos, "error-apellidos", "Máximo 100 caracteres."); 
      return false; 
    } 
  
    return true; 
  }
    //Blur e input Apellidos
    apellidos.addEventListener("blur", function () { 
        validarApellidos(apellidos.value.trim()); 
    }); 
    
    apellidos.addEventListener("input", function () { 
        limpiarError(apellidos, "error-apellidos"); 
    });
  
  //Región
  function validarRegion() {
  limpiarError(regionSelect, "error-region");
  if (regionSelect.value === "") {
    mostrarError(regionSelect, "error-region", "Debes seleccionar una región.");
    return false;
  }
  return true;
  }
    //Change para región
      regionSelect.addEventListener("change", function () {
      validarRegion();
    });

  //Comuna
  function validarComuna() {
  limpiarError(comunaSelect, "error-comuna");
  if (comunaSelect.value === "") {
    mostrarError(comunaSelect, "error-comuna", "Debes seleccionar una comuna.");
    return false;
  }
  return true;
  }
    //Change para comuna
    comunaSelect.addEventListener("change", function () {
      validarComuna();
    });

  //Calle
  function validarCalle(valor) { 
  limpiarError(calle, "error-calle"); 

    if (valor === "") { 
      mostrarError(calle, "error-calle", "Debes ingresar una calle."); 
      return false; 
    }
      // Permitir letras, números, espacios, guion y #
      const patronCalle = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-]+$/;
      if (!patronCalle.test(valor)) {
        mostrarError(calle, "error-calle", "La calle solo puede contener letras, números y guión.");
        return false;
      }

      if (valor.length > 300) { 
        mostrarError(calle, "error-calle", "Máximo 300 caracteres."); 
        return false; 
      } 

    return true;
  }
    //Blur e input Calle
    calle.addEventListener("blur", function () { 
      validarCalle(calle.value.trim()); 
    }); 

    calle.addEventListener("input", function () { 
      limpiarError(calle, "error-calle"); 
    });

  //Rut
  function validarRut(valor) { 
    limpiarError(rut, "error-rut"); 
    
    const formatoRut = /^[0-9]{7,8}[0-9Kk]$/; 
    
    if (!formatoRut.test(valor)) { 
        mostrarError(rut, "error-rut", "Escribe el RUT con Dígito Verificador, sin puntos ni guión."); 
        return false; 
    } 
    
    const cuerpo = valor.slice(0, -1); 
    const digitoIngresado = valor.slice(-1).toUpperCase(); 
    let suma = 0; 
    let multiplicador = 2; 
    
    for (let posicion = cuerpo.length - 1; posicion >= 0; posicion--) { 
        suma = suma + Number(cuerpo[posicion]) * multiplicador; 
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1; 
    } 
    
    const resto = 11 - (suma % 11); 
    let digitoCalculado = String(resto); 
    
    if (resto === 11) digitoCalculado = "0"; 
    if (resto === 10) digitoCalculado = "K"; 
    
    if (digitoIngresado !== digitoCalculado) { 
        mostrarError(rut, "error-rut", "Error: Rut Inválido."); 
        return false; 
    } 
    
    return true; 
  } 
    //Blur e input RUT
    rut.addEventListener("blur", function () { 
        validarRut(rut.value.trim()); 
    }); 
    
    rut.addEventListener("input", function () { 
        limpiarError(rut, "error-rut"); 
    });

  //Email
    //Valida formato Email
    function validarEmail(valor) { 
    limpiarError(email, "error-email"); 
    if (valor === "") { 
    mostrarError(email, "error-email", "El e-mail es obligatorio."); 
    return false; 
    } 
    if (!valor.includes("@")) { 
    mostrarError(email, "error-email", "El e-mail debe contener @."); 
    return false; 
    } 
    const dominioPermitido = 
    valor.endsWith("@duoc.cl") || 
    valor.endsWith("@profesor.duoc.cl") ||
    valor.endsWith("@gmail.com"); 
    if (!dominioPermitido) { 
    mostrarError(email, "error-email", "Utiliza un dominio válido: @duoc.cl, @profesor.duoc.cl o @gmail.com"); 
    return false; 
    } 
    return true; 
    }
      //Blur e input email
      email.addEventListener("blur", function () { 
          validarEmail(email.value.trim()); 
      }); 
      
      email.addEventListener("input", function () { 
          limpiarError(email, "error-email"); 
      });

  //Password
  function validarPassword(valor) { 
  limpiarError(password, "error-password"); 
    if (valor.length != 8) { 
      mostrarError( 
        password, 
        "error-password", 
        "La contraseña debe contener 8 caracteres." 
      ); 
      return false; 
    } 
  
    return true; 
  }
    //Blur e input password
      password.addEventListener("blur", function () { 
          validarPassword(password.value.trim()); 
      }); 
      
      password.addEventListener("input", function () { 
          limpiarError(password, "error-password"); 
      });

//Proceso de registro de formulario
const formulario = document.querySelector("#formulario-registro");
/*
function procesarRegistro(evento) { 
  evento.preventDefault();
  //Lee entradas
  const valorNombre = nombre.value.trim();
  const valorApellidos = apellidos.value.trim();
  const valorRut = rut.value.trim();
  const valorEmail = email.value.trim().toLowerCase();
  const valorRegion = regionSelect.value;
  const valorComuna = comunaSelect.value;
  const valorCalle = calle.value.trim();
  const valorPassword = password.value.trim();
  
  console.log("Intento de registro controlado");
  //Aplica validaciones
  const nombreValido = validarNombre(valorNombre);
  const apellidosValido = validarApellidos(valorApellidos);
  const rutValido = validarRut(valorRut);
  const emailValido = validarEmail(valorEmail);
  const regionValido = validarRegion();
  const comunaValido = validarComuna();
  const calleValido = validarCalle(valorCalle);
  const passwordValido = validarPassword(valorPassword);

  const formularioValido = nombreValido && apellidosValido && emailValido && rutValido && regionValido && comunaValido && calleValido && passwordValido;
  
  if (!formularioValido) { 
  mensajeExito.textContent = "Revisa los campos marcados."; 
  return; 
  }

  // Crear objeto usuario
  const nuevoUsuario = {
    nombre: valorNombre,
    apellidos: valorApellidos,
    rut: valorRut.toUpperCase(),
    email: valorEmail,
    region: valorRegion,
    comuna: valorComuna,
    calle: valorCalle,
    password: valorPassword
  };

  // Guardar en localStorage
  /*Los datos del formulario se convierten en un JSON para poder guardarse,
  y luego se convierten en un objeto para poder ser leídos.
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensajeExito.textContent = "Registro guardado con éxito.";
  console.log("Usuarios registrados:", usuarios);

  mensajeExito.textContent = "Registro válido.";
  formulario.reset(); 
}
*/

function procesarRegistro(evento) { 
  evento.preventDefault();

  // Lee entradas
  const valorNombre = nombre.value.trim();
  const valorApellidos = apellidos.value.trim();
  const valorRut = rut.value.trim().toUpperCase();
  const valorEmail = email.value.trim().toLowerCase();
  const valorRegion = regionSelect.value;
  const valorComuna = comunaSelect.value;
  const valorCalle = calle.value.trim();
  const valorPassword = password.value.trim();

  // Validaciones
  const nombreValido = validarNombre(valorNombre);
  const apellidosValido = validarApellidos(valorApellidos);
  const rutValido = validarRut(valorRut);
  const emailValido = validarEmail(valorEmail);
  const regionValido = validarRegion();
  const comunaValido = validarComuna();
  const calleValido = validarCalle(valorCalle);
  const passwordValido = validarPassword(valorPassword);

  const formularioValido = nombreValido && apellidosValido && rutValido && emailValido && regionValido && comunaValido && calleValido && passwordValido;

  if (!formularioValido) { 
    mensajeExito.textContent = "Revisa los campos marcados."; 
    return; 
  }

  //Recupera usuarios existentes
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  //Vaidación de RUT e EMAIL.
  for (const u of usuarios) {
    if (u.rut === valorRut || u.email === valorEmail) {
      mensajeExito.textContent = "Error: RUT o Email ya registrados.";
      return;
    }
  }

  //Objeto de nuevo usuario
  const nuevoUsuario = {
    nombre: valorNombre,
    apellidos: valorApellidos,
    rut: valorRut,
    email: valorEmail,
    region: valorRegion,
    comuna: valorComuna,
    calle: valorCalle,
    password: valorPassword
  };

  //Guardar en localStorage, convirtiendo el objeto en un JSON
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensajeExito.textContent = "Registro válido. Bienvenido a Sonido Vivo.";
  console.log("Usuarios registrados:", usuarios);

  formulario.reset(); 
}

formulario.addEventListener("submit", procesarRegistro);

//Obtención de datos del último usuario registrado
const registroGuardado = localStorage.getItem("usuarios"); 
 
if (registroGuardado !== null) { 
  const registro = JSON.parse(registroGuardado); 
  const ultimoUsuario = registro[registro.length - 1]; 
  mensajeExito.textContent = `Último registro: ${ultimoUsuario.nombre}`; 
}

//Validación de Login



//Validación de formulario de Contacto



//APÉNDICES
  //Guardado de datos de formulario en arreglo

//Regiones y Comunas
  // Select: regiones y comunas
  const regionesYComunas = {
    "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama"],
    "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Freirina", "Huasco", "Alto del Carmen"],
    "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Casablanca", "Quintero", "Puchuncaví", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "La Ligua", "Cabildo", "Papudo", "Zapallar", "San Felipe", "Llaillay", "Catemu", "Panquehue", "Putaendo", "Santa María", "Los Andes", "San Esteban", "Calle Larga", "Rinconada", "Isla de Pascua", "Juan Fernández"],
    "Metropolitana de Santiago": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
    "O’Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "La Estrella", "Litueche", "Marchihue", "Navidad", "Peredones", "Pichilemu"],
    "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Ñuble": ["Chillán", "Chillán Viejo", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
    "Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Aysén": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
  };

  // Poblar regiones al cargar la página
  function cargarRegiones() {
    Object.keys(regionesYComunas).forEach(region => {
      const option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    });
  }

  // Poblar comunas según región seleccionada
  function cargarComunas(region) {
    // Limpiar comunas previas
    comunaSelect.innerHTML = "<option value=''>Seleccione comuna</option>";

    if (region && regionesYComunas[region]) {
      regionesYComunas[region].forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
    }
  }

  // Listener: cuando cambia la región
  regionSelect.addEventListener("change", function () {
    cargarComunas(regionSelect.value);
  });

  // Inicializar
  cargarRegiones();