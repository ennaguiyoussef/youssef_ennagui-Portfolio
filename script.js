// Animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});

// Form interaction
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Merci pour ton message Youssef ! 🚀");
  form.reset();
});

// Smooth fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  observer.observe(section);
});
