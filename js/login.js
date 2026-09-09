//LOGIN.HTML - Validación de Login
const formularioLogin = document.querySelector("#formulario-login");
const mensajeLogin = document.querySelector("#mensaje-login");

if (formularioLogin) {
  formularioLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailIngresado = document.querySelector("#email").value.trim().toLowerCase();
    const passwordIngresado = document.querySelector("#password").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //Búsqueda en colección de Usuarios
    for (const u of usuarios) {
      if (u.email === emailIngresado && u.password === passwordIngresado) {
        mensajeLogin.textContent = `Login exitoso. Bienvenid@ ${u.nombre}!`;
        return;
      }
    }
    mensajeLogin.textContent = "Error: correo o contraseña incorrectos.";
  });
}