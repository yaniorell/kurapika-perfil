/* Demostraciones DOM de la página de datos personales. */

document.addEventListener("DOMContentLoaded", function () {
  actualizarSaludo();
  document.getElementById("btn-eslogan").addEventListener("click", alternarEslogan);
  document.getElementById("btn-contador").addEventListener("click", actualizarContadorCasos);
  document.getElementById("btn-acento").addEventListener("click", cambiarColorAcento);
  document.getElementById("btn-fuente-mas").addEventListener("click", function () {
    ajustarTamanoFuente(1);
  });
  document.getElementById("btn-fuente-menos").addEventListener("click", function () {
    ajustarTamanoFuente(-1);
  });
  document.getElementById("btn-cv").addEventListener("click", avisarCvPendiente);
});

// ===== DOM-1: Cambiar el contenido =====
function alternarEslogan() {
  var eslogan = document.getElementById("eslogan-hero");
  var frases = [
    "Investigo cada rastro hasta encontrar la verdad.",
    "La evidencia no miente: solo hay que saber leerla.",
    "Cadena de custodia primero; conclusiones después."
  ];
  var actual = eslogan.textContent;
  var indice = frases.indexOf(actual);
  var siguiente = frases[(indice + 1) % frases.length];
  eslogan.textContent = siguiente;
  document.getElementById("nota-html").innerHTML =
    '<span class="palabra-acento">hash</span> actualizado · ' + Date.now().toString(16);
  var saludo = document.getElementById("saludo-hora");
  saludo.innerText = saludo.innerText.indexOf("evidencia") !== -1
    ? saludo.innerText.replace("evidencia", "registro")
    : saludo.innerText.replace("registro", "evidencia");
}
// ===== FIN DOM-1 =====

// ===== DOM-1: Cambiar el contenido =====
function actualizarSaludo() {
  var nodo = document.getElementById("saludo-hora");
  var hora = new Date().getHours();
  var saludo = "Buenas noches";
  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  }
  nodo.textContent = saludo + " · evidencia #001";
}
// ===== FIN DOM-1 =====

// ===== DOM-1: Cambiar el contenido =====
function actualizarContadorCasos() {
  var nodo = document.getElementById("contador-casos");
  var valor = parseInt(nodo.textContent, 10) || 40;
  nodo.textContent = String(valor + 1) + "+";
}
// ===== FIN DOM-1 =====

// ===== DOM-2: Modificar estilos CSS =====
function cambiarColorAcento() {
  var raiz = document.documentElement;
  var actual = getComputedStyle(raiz).getPropertyValue("--color-acento").trim();
  var nuevo = actual === "#e10600" ? "#7c3aed" : "#e10600";
  raiz.style.setProperty("--color-acento", nuevo);
  document.getElementById("tarjeta-contacto").style.borderColor = nuevo;
}
// ===== FIN DOM-2 =====

// ===== DOM-2: Modificar estilos CSS =====
function ajustarTamanoFuente(delta) {
  var raiz = document.documentElement;
  var actual = parseInt(getComputedStyle(raiz).fontSize, 10);
  var siguiente = Math.min(20, Math.max(14, actual + delta));
  raiz.style.fontSize = siguiente + "px";
  raiz.style.setProperty("--tamano-base", siguiente + "px");
}
// ===== FIN DOM-2 =====

// ===== DOM-5: Escuchar eventos =====
function avisarCvPendiente() {
  mostrarAlerta("CV [PLACEHOLDER]: el archivo PDF aún no está cargado.", "warning");
}
// ===== FIN DOM-5 =====

// ===== DOM-5: Escuchar eventos =====
function copiarCorreo() {
  var correo = document.getElementById("texto-correo").textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(correo).then(function () {
      mostrarAlerta("Correo copiado: " + correo, "success");
    }).catch(function () {
      mostrarAlerta("No se pudo copiar automáticamente. Copie: " + correo, "warning");
    });
    return;
  }
  mostrarAlerta("Copie manualmente: " + correo, "info");
}
// ===== FIN DOM-5 =====
