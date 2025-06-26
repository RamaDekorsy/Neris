document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    try {
      const res = await fetch('http://localhost:3000/contactos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje })
      });
      const data = await res.json();
      if (res.ok) {
        alert('¡Mensaje enviado correctamente!');
        form.reset();
      } else {
        alert(data.error || 'Error al enviar el mensaje');
      }
    } catch (err) {
      alert('Error de conexión con el servidor');
    }
  });
});