// ---------- Projects ----------
// Add, remove or edit projects here and the cards update automatically.
const projects = [
  {
    title: "Personal Portfolio",
    description: "This site! A responsive portfolio with dark mode, built with plain HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Shiv-PateI/Shiv-Patel-About-Me/tree/main/portfolio",
    demo: "",
  },
];

function renderProjects() {
  const grid = document.getElementById("project-grid");

  grid.innerHTML = projects
    .map((project) => {
      const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");
      const links = [
        project.code && `<a href="${project.code}" target="_blank" rel="noopener">Code →</a>`,
        project.demo && `<a href="${project.demo}" target="_blank" rel="noopener">Live demo →</a>`,
      ]
        .filter(Boolean)
        .join("");

      return `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="tags">${tags}</ul>
          <div class="project-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

// ---------- Dark mode ----------
function setupThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;

  toggle.addEventListener("click", () => {
    const current =
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

// ---------- Mobile menu ----------
function setupMobileMenu() {
  const button = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  button.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  });

  // Close the menu after tapping a link
  links.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      links.classList.remove("open");
      button.setAttribute("aria-expanded", false);
    })
  );
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
setupThemeToggle();
setupMobileMenu();
