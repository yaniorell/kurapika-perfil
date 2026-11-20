/*
  JS común del sitio (navbar, tema, utilidades).
  Bootstrap 5.3 se incluye LOCALMENTE en vendor/ (bootstrap.bundle.min.js).
  Este archivo no contiene código de Bootstrap: solo lo aprovecha.
*/

document.addEventListener("DOMContentLoaded", function () {
  marcarEnlaceActivo();
  iniciarRevelado();
  aplicarFallbackImagenes();
  actualizarAnioFooter();
});

function marcarEnlaceActivo() {
  var archivo = window.location.pathname.split("/").pop() || "index.html";
  var enlaces = document.querySelectorAll(".navbar .nav-link[data-pagina]");
  enlaces.forEach(function (enlace) {
    if (enlace.getAttribute("data-pagina") === archivo) {
      enlace.classList.add("active");
      enlace.setAttribute("aria-current", "page");
    } else {
      enlace.classList.remove("active");
      enlace.removeAttribute("aria-current");
    }
  });
}

function iniciarRevelado() {
  var nodos = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodos.forEach(function (nodo) {
      nodo.classList.add("es-visible");
    });
    return;
  }
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("es-visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.16 });
  nodos.forEach(function (nodo) {
    observador.observe(nodo);
  });
}

function aplicarFallbackImagenes() {
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.classList.add("img-ausente");
      if (img.parentElement) {
        img.parentElement.classList.add("img-fallback");
      }
    });
  });
}

function actualizarAnioFooter() {
  var nodo = document.getElementById("anio-footer");
  if (nodo) {
    nodo.textContent = String(new Date().getFullYear());
  }
}

function mostrarAlerta(mensaje, tipo) {
  var caja = document.getElementById("alerta-global");
  if (!caja) {
    return;
  }
  caja.className = "alert alert-" + (tipo || "info") + " mt-3";
  caja.textContent = mensaje;
  caja.classList.remove("d-none");
  caja.setAttribute("role", tipo === "danger" ? "alert" : "status");
}
