document.addEventListener("DOMContentLoaded", () => {
  initializeCopyButtons();
  initializeToggleButton();
  initializeMenuButton();
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
function initializeToggleButton() {
  document.getElementById("dark-toggle").addEventListener("click", () => {
    const img = document.getElementById("dark-toggle-img");
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      img.setAttribute("src", "/assets/ic_light.svg");
    } else {
      img.setAttribute("src", "/assets/ic_dark.svg");
    }
  });
}

// Navigation Menu button
function initializeMenuButton() {
  document.getElementById("menu-button").addEventListener("click", (e) => {
    const menuItems = document.querySelector(".menu-items");
    if (menuItems.style.display === "flex") {
      menuItems.style = "none";
    } else {
      menuItems.style.display = "flex";
    }
  });
}
