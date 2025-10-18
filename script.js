// Animation sur les cartes
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("shadow-lg"));
    card.addEventListener("mouseleave", () => card.classList.remove("shadow-lg"));
  });
});

// Message de confirmation du formulaire
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msgSuccess").classList.remove("d-none");
  this.reset();
});
