//Validación de registro de Usuario Nuevo

  //Campos del formulario 
  const nombre = document.querySelector("#nombre");
  const apellidos = document.querySelector("#apellidos") 
  const rut = document.querySelector("#rut");
  const email = document.querySelector("#email");
  const confirmarEmail = document.querySelector("#confirmar-email");
  const regionSelect = document.querySelector("#region");
  const comunaSelect = document.querySelector("#comuna");
  const calle = document.querySelector("#calle"); 
  const password = document.querySelector("#password");
  const confirmarPassword = document.querySelector("#confirmar-password"); 
  const mensajeExito = document.querySelector("#mensaje-exito"); 

  const formulario = document.querySelector("#formulario-registro"); 

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

  //Apellidos

  //Rut
  function validarRut(valor) { 
        limpiarError(rut, "error-rut"); 
        
        const formatoRut = /^[0-9]{7,8}[0-9Kk]$/; 
        
        if (!formatoRut.test(valor)) { 
            mostrarError(rut, "error-rut", "Escribe el RUT con dígito verificador, sin puntos ni guión."); 
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
        mostrarError(email, "error-email", "Utiliza un dominio válido: @duocuc.cl, @profesor.duoc.cl o @gmail.com"); 
        return false; 
        } 
        return true; 
    }
      //blur e input email
      email.addEventListener("blur", function () { 
          validarEmail(email.value.trim()); 
      }); 
      
      email.addEventListener("input", function () { 
          limpiarError(email, "error-email"); 
      });

    //Valida coindicencia entre Correo y Confirmar Correo
    function validarConfirmacionEmail() {
      limpiarError(confirmarEmail, "error-confirmarEmail");
      if (email.value.trim() !== confirmarEmail.value.trim()) {
        mostrarError(confirmarEmail, "error-confirmarEmail", "Los correos no coinciden.");
        return false;
      }
      return true;
    }
      //blur e input confirma email
      confirmarEmail.addEventListener("blur", validarConfirmacionEmail);

      confirmarEmail.addEventListener("input", function () {
        limpiarError(confirmarEmail, "error-confirmarEmail");
      });
  
  //Proceso de registro de formulario
  function procesarRegistro(evento) { 
    evento.preventDefault();
    //Lee entradas
    const valorRut = rut.value.trim();
    const valorEmail = email.value.trim().toLowerCase();
    const valorConfirmarEmail = confirmarEmail.value.trim().toLowerCase();
    console.log("Intento de registro controlado");
    //Aplica validaciones
    const rutValido = validarRut(valorRut);
    const emailValido = validarEmail(valorEmail);
    const confirmarEmailValido = validarConfirmacionEmail(valorConfirmarEmail);

    const formularioValido = emailValido && confirmarEmailValido && rutValido;
    
    if (!formularioValido) { 
    mensajeExito.textContent = "Revisa los campos marcados."; 
    return; 
    } 
    mensajeExito.textContent = "Registro válido.";
  }

  formulario.addEventListener("submit", procesarRegistro);


//Validación de Login



//Validación de formulario de Contacto



//APÉNDICES
  //Guardado de datos de formulario en arreglo

  //Regiones y Comunas
  // Referencias a los select

// Datos: regiones y comunas
const regionesYComunas = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Freirina", "Huasco", "Alto del Carmen"],
  // … continúa con todas las regiones y sus comunas
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