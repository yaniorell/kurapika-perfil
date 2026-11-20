/* Demostraciones DOM de referencias laborales. */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-referencia").addEventListener("submit", alEnviarReferencia);
  document.getElementById("galeria-referencias").addEventListener("click", alPulsarGaleria);
});

// ===== DOM-5: Escuchar eventos =====
function alEnviarReferencia(evento) {
  evento.preventDefault();
  var nombre = document.getElementById("ref-nombre").value.trim();
  var cargo = document.getElementById("ref-cargo").value.trim();
  var comentario = document.getElementById("ref-comentario").value.trim();
  if (!nombre || !cargo || !comentario) {
    return;
  }
  crearTarjetaReferencia(nombre, cargo, comentario);
  evento.target.reset();
}
// ===== FIN DOM-5 =====

// ===== DOM-6: Crear, insertar y eliminar elementos =====
function crearTarjetaReferencia(nombre, cargo, comentario) {
  var col = document.createElement("article");
  col.className = "col-lg-4";
  var titulo = document.createElement("h2");
  titulo.className = "h5 mb-0";
  titulo.appendChild(document.createTextNode(nombre));
  col.insertAdjacentHTML("beforeend",
    '<div class="card card-glass quote-card p-4 h-100">' +
    '<p class="small text-secondary cargo-ref"></p>' +
    '<blockquote class="mb-3"></blockquote>' +
    '<button type="button" class="btn btn-sm btn-outline-light rounded-pill btn-eliminar">Eliminar</button>' +
    "</div>");
  var tarjeta = col.querySelector(".card");
  tarjeta.prepend(titulo);
  tarjeta.querySelector(".cargo-ref").textContent = cargo + " · añadido en local";
  tarjeta.querySelector("blockquote").textContent = comentario;
  var galeria = document.getElementById("galeria-referencias");
  galeria.insertBefore(col, galeria.firstChild);
  mostrarToastDinamico("Referencia de " + nombre + " añadida.");
}
// ===== FIN DOM-6 =====

// ===== DOM-6: Crear, insertar y eliminar elementos =====
function alPulsarGaleria(evento) {
  var boton = evento.target.closest(".btn-eliminar");
  if (!boton) {
    return;
  }
  var tarjeta = boton.closest(".col-lg-4");
  var aviso = document.createElement("p");
  aviso.className = "hash-tag";
  aviso.textContent = "registro retirado";
  tarjeta.replaceWith(aviso);
  window.setTimeout(function () {
    if (aviso.parentNode) {
      aviso.parentNode.removeChild(aviso);
    }
  }, 1200);
}
// ===== FIN DOM-6 =====

// ===== DOM-6: Crear, insertar y eliminar elementos =====
function mostrarToastDinamico(mensaje) {
  var toast = document.createElement("div");
  toast.className = "toast show text-bg-dark border-danger";
  toast.setAttribute("role", "status");
  var cuerpo = document.createElement("div");
  cuerpo.className = "toast-body";
  cuerpo.textContent = mensaje;
  toast.appendChild(cuerpo);
  var caja = document.getElementById("contenedor-toasts");
  caja.append(toast);
  window.setTimeout(function () {
    toast.remove();
  }, 2500);
}
// ===== FIN DOM-6 =====
