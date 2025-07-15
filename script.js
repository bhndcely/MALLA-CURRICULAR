// script.js
// Interactividad: mostrar alerta al hacer clic en un curso
document.addEventListener("DOMContentLoaded", () => {
  const cursos = document.querySelectorAll(".course");
  cursos.forEach(card => {
    card.addEventListener("click", () => {
      alert("Curso: " + card.textContent.trim());
    });
  });
});
