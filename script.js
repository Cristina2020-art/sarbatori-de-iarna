document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");

  themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
      document.body.classList.add("christmas-theme");
      themeText.textContent = "Tema: Crăciun";
    } else {
      document.body.classList.remove("christmas-theme");
      themeText.textContent = "Tema: Anul Nou";
    }
  });
});
