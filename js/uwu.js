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



