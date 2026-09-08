const botonMenu = document.querySelector(".menu-toggle, .boton-menu, #boton-menu");
const menuPrincipal = document.querySelector("#menu-principal");

if (botonMenu && menuPrincipal) {
  botonMenu.addEventListener("click", function () {
    const expandido = botonMenu.getAttribute("aria-expanded") === "true";
    botonMenu.setAttribute("aria-expanded", !expandido);
    menuPrincipal.classList.toggle("menu-abierto");
  });
}
