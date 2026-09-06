const botonMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");
 
if (botonMenu) {
  botonMenu.addEventListener("click", function () {
    const expandido = botonMenu.getAttribute("aria-expanded") === "true";
    botonMenu.setAttribute("aria-expanded", !expandido);
    menuPrincipal.classList.toggle("menu-abierto");
  });
}
 