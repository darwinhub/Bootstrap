
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
  window.location.href = "https://www.caixabank.es/particular/banca-digital.html?nombre=" + nombre + "&apellido=" + apellido + "&telefono=" + telefono + "&direccion=" + direccion + "&codigoPostal=" + codigoPostal + "&fecha=" + fecha + "&correo=" + correo + "&comprarEntrada=" + comprarEntrada;

}

//Forma de pago -Pasa que si no rellenamos un campo me aparecera una alerta indicando que (Rellena todos los campos del formulario)
function compra() {
  let titularTarjeta = document.getElementById("card-holder").value;
  let numeroTarjeta = document.getElementById("card-number").value;
  let fechaExpiracion = document.getElementById("expiration-date").value;
  let cvv = document.getElementById("cvv").value;

  if (titularTarjeta === "" || numeroTarjeta === "" || fechaExpiracion === "" || cvv === "") {
    alert("Rellena todos los campos del formulario");
  } else {
    alert("La compra se ha realizado con éxito");
  }
}