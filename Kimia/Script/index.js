document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".button-container a");
  const searchInput = document.getElementById("searchInput");
  const darkToggle = document.getElementById("toggleDarkMode");

  // Efek hover & klik
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.05)";
      link.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
      link.style.boxShadow = "none";
    });
  });

  // 🔍 Fitur pencarian dan filter tombol
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      link.style.display = text.includes(keyword) ? "block" : "none";
    });
  });

  // 🌙 Dark mode toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Sambutan (sekali per sesi)
  if (!sessionStorage.getItem("sudahMasuk")) {
    alert("Selamat datang di Website Kimia Interaktif! 🚀");
    sessionStorage.setItem("sudahMasuk", "true");
  }
});
