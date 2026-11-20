/* Demostraciones DOM de la galería de proyectos. */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("filtros-proyectos").addEventListener("click", filtrarProyectos);
  document.getElementById("galeria-proyectos").addEventListener("click", mostrarDetalleProyecto);
});

// ===== DOM-3: Agregar o quitar clases =====
function filtrarProyectos(evento) {
  var boton = evento.target.closest("button[data-categoria]");
  if (!boton) {
    return;
  }
  var categoria = boton.getAttribute("data-categoria");
  document.querySelectorAll("#filtros-proyectos button").forEach(function (nodo) {
    nodo.classList.remove("btn-danger");
    nodo.classList.add("btn-outline-light");
    nodo.setAttribute("aria-pressed", "false");
  });
  boton.classList.remove("btn-outline-light");
  boton.classList.add("btn-danger");
  boton.setAttribute("aria-pressed", "true");
  aplicarFiltroGaleria(categoria);
}
// ===== FIN DOM-3 =====

// ===== DOM-4: Consultar y modificar atributos =====
function aplicarFiltroGaleria(categoria) {
  document.querySelectorAll(".tarjeta-proyecto").forEach(function (tarjeta) {
    var propia = tarjeta.dataset.categoria;
    if (categoria === "todos" || propia === categoria) {
      tarjeta.classList.remove("oculto");
    } else {
      tarjeta.classList.add("oculto");
    }
  });
  document.getElementById("estado-filtro").textContent = "filtro: " + categoria;
}
// ===== FIN DOM-4 =====

// ===== DOM-5: Escuchar eventos =====
function mostrarDetalleProyecto(evento) {
  var boton = evento.target.closest("button[data-detalle]");
  if (!boton) {
    return;
  }
  evento.preventDefault();
  mostrarAlerta(boton.getAttribute("data-detalle"), "info");
}
// ===== FIN DOM-5 =====
