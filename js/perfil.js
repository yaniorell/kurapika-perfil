/* Demostraciones DOM del perfil profesional. */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-contraste").addEventListener("click", alternarAltoContraste);
  document.getElementById("btn-ojos").addEventListener("click", alternarOjosEscarlata);
  document.getElementById("tarjeta-resumen").addEventListener("click", resaltarTarjetaResumen);
  document.getElementById("btn-anadir-valor").addEventListener("click", agregarValorLista);
});

// ===== DOM-3: Agregar o quitar clases =====
function alternarAltoContraste() {
  var cuerpo = document.body;
  cuerpo.classList.toggle("alto-contraste");
  var boton = document.getElementById("btn-contraste");
  if (cuerpo.classList.contains("alto-contraste")) {
    boton.classList.replace("btn-pill-ghost", "btn-pill-primary");
    boton.textContent = "Contraste normal";
  } else {
    boton.classList.replace("btn-pill-primary", "btn-pill-ghost");
    boton.textContent = "Alto contraste";
  }
}
// ===== FIN DOM-3 =====

// ===== DOM-3: Agregar o quitar clases =====
function alternarOjosEscarlata() {
  var marco = document.getElementById("foto-perfil-mini");
  marco.classList.toggle("ojos-escarlata");
  if (!marco.classList.contains("ojos-escarlata")) {
    marco.classList.remove("ojos-escarlata");
  }
}
// ===== FIN DOM-3 =====

// ===== DOM-3: Agregar o quitar clases =====
function resaltarTarjetaResumen() {
  var tarjeta = document.getElementById("tarjeta-resumen");
  tarjeta.classList.add("es-activa");
  window.setTimeout(function () {
    tarjeta.classList.remove("es-activa");
  }, 1600);
}
// ===== FIN DOM-3 =====

// ===== DOM-6: Crear, insertar y eliminar elementos =====
function agregarValorLista() {
  var campo = document.getElementById("nuevo-valor");
  var texto = campo.value.trim();
  if (!texto) {
    return;
  }
  var item = document.createElement("li");
  item.className = "mb-2";
  var icono = document.createElement("i");
  icono.className = "bi bi-plus-circle text-danger me-2";
  item.append(icono, document.createTextNode(texto));
  document.getElementById("lista-valores").appendChild(item);
  campo.value = "";
}
// ===== FIN DOM-6 =====
