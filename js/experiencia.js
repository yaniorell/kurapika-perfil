/* Demostraciones DOM de experiencia laboral. */

document.addEventListener("DOMContentLoaded", function () {
  var linea = document.getElementById("linea-tiempo");
  linea.addEventListener("mouseover", resaltarAlPasar);
  linea.addEventListener("mouseout", quitarResaltoAlSalir);
  linea.addEventListener("click", seleccionarHitoPorDelegacion);
  document.getElementById("btn-limpiar-hito").onclick = limpiarHitoActivo;
  window.addEventListener("keydown", atajoEscape);
});

// ===== DOM-5: Escuchar eventos =====
function resaltarAlPasar(evento) {
  var item = evento.target.closest(".timeline-item");
  if (!item) {
    return;
  }
  item.style.outline = "1px solid rgba(225, 6, 0, 0.4)";
}

function quitarResaltoAlSalir(evento) {
  var item = evento.target.closest(".timeline-item");
  if (!item) {
    return;
  }
  item.style.outline = "";
}
// ===== FIN DOM-5 =====

// ===== DOM-5: Escuchar eventos =====
function seleccionarHitoPorDelegacion(evento) {
  var item = evento.target.closest(".timeline-item");
  if (!item) {
    return;
  }
  evento.stopPropagation();
  document.querySelectorAll(".timeline-item").forEach(function (nodo) {
    nodo.classList.remove("es-activa");
  });
  item.classList.add("es-activa");
}
// ===== FIN DOM-5 =====

// ===== DOM-5: Escuchar eventos =====
function limpiarHitoActivo() {
  document.querySelectorAll(".timeline-item").forEach(function (nodo) {
    nodo.classList.remove("es-activa");
  });
}

function atajoEscape(evento) {
  if (evento.key === "Escape") {
    limpiarHitoActivo();
  }
}
// ===== FIN DOM-5 =====
