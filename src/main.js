// Select the toggle button and the icon
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

// Initialize theme based on localStorage
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
  themeIcon.textContent = "🌙"; // Moon icon for dark mode
} else {
  htmlElement.classList.remove("dark");
  themeIcon.textContent = "🌞"; // Sun icon for light mode
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    themeIcon.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
