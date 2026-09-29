const formulario = document.getElementById("eventForm");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fecha = document.getElementById("fecha").value;
  const intereses = document.querySelectorAll("input[name='intereses']:checked");
  const horario = document.querySelector("input[name='horario']:checked");
  const archivo = document.getElementById("identificacion").files[0];

  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  const telRegex = /^\d{10}$/;
  if (!telRegex.test(telefono)) {
    alert("El teléfono debe contener exactamente 10 dígitos numéricos.");
    return;
  }

  if (intereses.length === 0) {
    alert("Debes seleccionar al menos un tema de tu interés.");
    return;
  }

  if (!horario) {
    alert("Por favor, selecciona un horario preferido.");
    return;
  }
  if (!fecha) {
    alert("Por favor, selecciona una fecha para el evento.");
    return;
  }

  if (archivo && archivo.size > 2 * 1024 * 1024) {
    alert("El archivo adjunto no puede pesar más de 2MB.");
    return;
  }

  alert("¡Registro exitoso! Tus datos han sido validados y enviados correctamente.");
  formulario.reset();
});
