// Manejar el envío del formulario
const formulario = document.getElementById('formularioContacto');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Muestra un mensaje de confirmación
    mensajeConfirmacion.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado.`;
    mensajeConfirmacion.style.color = 'green';

    // Limpia el formulario
    formulario.reset();
});
