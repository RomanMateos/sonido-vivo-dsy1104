document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario-registro');

  if (form) {
    form.addEventListener('submit', (e) => {
      const telefonoInput = document.getElementById('telefono');
      const telefonoValue = telefonoInput.value.trim();
      
      // Valida que el formato del teléfono chileno sea exactamente +56 seguido de 9 dígitos
      const regexTelefono = /^\+56[0-9]{9}$/;

      if (!regexTelefono.test(telefonoValue)) {
        e.preventDefault();
        alert('Por favor ingresa un número de teléfono válido con formato +56912345678.');
        telefonoInput.focus();
      }
    });
  }
});