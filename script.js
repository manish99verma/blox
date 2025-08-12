document.addEventListener("DOMContentLoaded", () => {
  initializeCopyButtons();
  initializeDarkToggleButton();
  initializeMenuButton();
  initializeNavToggler();

  // Add highlight colors in code preview
  hljs.highlightAll();
});

// Add click listener to copy buttons
function initializeCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async (event) => {
      try {
        await copyCode(event.target);
        btn.innerText = "Copied";
      } catch {
        btn.innerText = "Error";
      }

      setTimeout(() => {
        btn.innerHTML = "Copy";
      }, 1500);
    });
  });
}

// Finds code element and copies its text
async function copyCode(btn) {
  const component = btn.parentNode.parentNode;
  const codeElement = component.querySelector("code");
  await navigator.clipboard.writeText(codeElement.innerText);
}

// Dark mode toggle
function initializeDarkToggleButton() {
  const img = document.getElementById("dark-toggle-img");

  console.log("theme: ", sessionStorage.getItem("theme"));
  if (sessionStorage.getItem("theme") === "dark") {
    document.body.classList.toggle("dark-mode");
    img?.setAttribute("src", "./assets/ic_light.svg");
  }

  document.getElementById("dark-toggle")?.addEventListener("click", () => {
    const img = document.getElementById("dark-toggle-img");
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      img?.setAttribute("src", "./assets/ic_light.svg");
      sessionStorage.setItem("theme", "dark");
    } else {
      img?.setAttribute("src", "./assets/ic_dark.svg");
      sessionStorage.setItem("theme", "light");
    }
  });
}

// InApp - Navbar toggler
function initializeMenuButton() {
  document.getElementById("menu-button")?.addEventListener("click", (e) => {
    const menuItems = document.querySelector(".menu-items");
    if (menuItems.style.display === "flex") {
      menuItems.style = "none";
    } else {
      menuItems.style.display = "flex";
    }
  });
}

// Component - Navbar toggler
function initializeNavToggler() {
  document.querySelectorAll(".nav-toggler").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("show");
    });
  });
}

// https://cdn.jsdelivr.net/gh/manish99verma/blox@main/style.css
// https://cdn.jsdelivr.net/gh/manish99verma/blox@main/script.js
