/*Validación del formulario*/

document.addEventListener("DOMContentLoaded", function () {
  const enviarBtn = document.querySelector("#contacto a.btn");
  enviarBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("firstName").value.trim();
    const apellido = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    if (!nombre || !apellido || !email || !mensaje) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    alert(`¡Gracias por tu mensaje, ${nombre}!`);
  });
});

/* Efecto scroll*/

document.querySelectorAll('a[href^="#"]').forEach((ancla) => {
  ancla.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
