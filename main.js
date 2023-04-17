// Animación del título en el header
const headerTitle = document.querySelector("header h1");
headerTitle.style.opacity = 0;
headerTitle.style.transform = "translateY(-50px)";
headerTitle.style.transition = "opacity 1s ease, transform 1s ease";
window.addEventListener("load", () => {
  headerTitle.style.opacity = 1;
  headerTitle.style.transform = "translateY(0)";
});

// Animación de entrada en el main
const mainContent = document.querySelector("main");
mainContent.style.opacity = 0;
mainContent.style.transform = "translateY(50px)";
mainContent.style.transition = "opacity 1s ease, transform 1s ease";
window.addEventListener("load", () => {
  mainContent.style.opacity = 1;
  mainContent.style.transform = "translateY(0)";
});

// Animación en el nav
const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach(link => {
  link.style.transition = "color 0.2s ease, transform 0.3s ease";
  link.style.transformOrigin = "bottom center";
  link.addEventListener("mouseover", () => {
    link.style.color = "#aaa";
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "#ddd";
    link.style.transform = "scale(1)";
  });
});