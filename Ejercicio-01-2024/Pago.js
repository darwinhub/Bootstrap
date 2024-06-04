
function processPayment() {
  // Recopilar los datos del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let codigoPostal = document.getElementById("codigo-postal").value;
  let fecha = document.getElementById("fecha").value;
  let correo = document.getElementById("correo").value;
  let comprarEntrada = document.getElementById("comprar-entrada").checked;

  // Redirigir a la página de pago
  window.location.href = "https://example.com/payment?nombre=" + nombre + "&apellido=" + apellido + "&telefono=" + telefono + "&direccion=" + direccion + "&codigoPostal=" + codigoPostal + "&fecha=" + fecha + "&correo=" + correo + "&comprarEntrada=" + comprarEntrada;

}
