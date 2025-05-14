// Navbar toggle (hamburger menu)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Tutup menu saat klik link
  document.querySelectorAll(".nav-links a").forEach(link =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    })
  );
});
