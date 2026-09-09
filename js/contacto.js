//CONTACTO.HTML - Validación de formulario de Contacto

//Campos de formulario
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const comentario = document.querySelector("#comentario");
    const mensajeContacto = document.querySelector("#mensaje-contacto"); 
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

//Funciones de validación
    //Valida nombre
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

    if (valor.length > 100) { 
      mostrarError(nombre, "error-nombre", "Máximo 100 caracteres."); 
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

    //Valida email
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
    if (valor.length > 100) { 
      mostrarError(email, "error-email", "Máximo 100 caracteres."); 
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

    //Valida comentario
      function validarComentario(valor) { 
    limpiarError(comentario, "error-comentario"); 
  
    if (valor === "") { 
      mostrarError(comentario, "error-comentario", "Debes escribir un comentario."); 
      return false; 
    }
  
    const caracteresPermitidos = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,;:¡!¿?-]+$/;
      if (!caracteresPermitidos.test(valor)) {
        mostrarError(comentario, "error-comentario", "Solo puedes usar números, letras y signos de puntuación.");
        return false;
      }

    if (valor.length > 500) { 
      mostrarError(comentario, "error-comentario", "Máximo 500 caracteres."); 
      return false; 
    } 
  
    return true; 
  }
    //Blur e input Nombre
    comentario.addEventListener("blur", function () { 
        validarComentario(comentario.value.trim()); 
    }); 
    
    comentario.addEventListener("input", function () { 
        limpiarError(comentario, "error-comentario"); 
    });

//Arma y envía formulario
const formulario = document.querySelector("#formulario-contacto");

function procesarRegistro(evento) { 
  evento.preventDefault();

  // Lee entradas
  const valorNombre = nombre.value.trim();
  const valorEmail = email.value.trim().toLowerCase();
  const valorComentario = comentario.value.trim();

  // Validaciones
  const nombreValido = validarNombre(valorNombre);
  const emailValido = validarEmail(valorEmail);
  const comentarioValido = validarComentario(valorComentario);

  const formularioValido = nombreValido && emailValido && comentarioValido
  if (!formularioValido) { 
    mensajeExito.textContent = "Revisa los campos marcados."; 
    return; 
  }

  //Recupera contactos existentes
  const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

  //Objeto de nuevo contacto
  const nuevoContacto = {
    nombre: valorNombre,
    email: valorEmail,
    comentario: valorComentario
  };

  //Guardar en localStorage, convirtiendo el objeto en un JSON
  contactos.push(nuevoContacto);
  localStorage.setItem("contactos", JSON.stringify(contactos));

  mensajeContacto.textContent = "Solicitud enviada. ¡Gracias por contactarte con Sonido Vivo!";
  console.log("Solicitudes registradas:", contactos);

  formulario.reset(); 
}

//Listener del botón para enviar el formulario
formulario.addEventListener("submit", procesarRegistro);
