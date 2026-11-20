/* Demostraciones DOM de formación académica. */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-cambiar-foto").addEventListener("click", cambiarFotoDiploma);
  document.getElementById("btn-verificar").addEventListener("click", verificarEnlaceDiploma);
  document.getElementById("btn-abrir").addEventListener("click", function () {
    window.location.href = document.getElementById("enlace-diploma").getAttribute("href");
  });
  var modal = document.getElementById("modalFormacion");
  modal.addEventListener("show.bs.modal", rellenarModalFormacion);
});

// ===== DOM-4: Consultar y modificar atributos =====
function cambiarFotoDiploma() {
  var foto = document.getElementById("img-diploma");
  var serie = foto.getAttribute("data-serie");
  foto.classList.remove("img-ausente");
  if (foto.parentElement) {
    foto.parentElement.classList.remove("img-fallback");
  }
  if (serie === "1") {
    foto.setAttribute("src", "img/formacion-2.jpg");
    foto.setAttribute("alt", "Certificación forense GCFA (evidencia alternativa)");
    foto.setAttribute("data-serie", "2");
  } else {
    foto.setAttribute("src", "img/formacion-1.jpg");
    foto.setAttribute("alt", "Diploma de ingeniería informática");
    foto.setAttribute("data-serie", "1");
  }
  document.getElementById("estado-atributos").textContent =
    "src=" + foto.getAttribute("src") + " · serie=" + foto.dataset.serie;
}
// ===== FIN DOM-4 =====

// ===== DOM-4: Consultar y modificar atributos =====
function verificarEnlaceDiploma() {
  var enlace = document.getElementById("enlace-diploma");
  var boton = document.getElementById("btn-abrir");
  if (!enlace.hasAttribute("data-verificado")) {
    return;
  }
  enlace.setAttribute("href", "formacion.html#certificaciones");
  enlace.dataset.verificado = "true";
  if (boton.hasAttribute("disabled")) {
    boton.removeAttribute("disabled");
  }
  document.getElementById("estado-atributos").textContent =
    "verificado=" + enlace.dataset.verificado + " · disabled=" + boton.hasAttribute("disabled");
}
// ===== FIN DOM-4 =====

// ===== DOM-4: Consultar y modificar atributos =====
function rellenarModalFormacion(evento) {
  var disparador = evento.relatedTarget;
  if (!disparador) {
    return;
  }
  var titulo = disparador.getAttribute("data-titulo") || "Diploma";
  var detalle = disparador.dataset.detalle || "";
  document.getElementById("modalFormacionTitulo").textContent = titulo;
  document.getElementById("modalFormacionDetalle").textContent = detalle;
}
// ===== FIN DOM-4 =====
