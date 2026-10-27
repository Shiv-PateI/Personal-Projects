// ---------- Projects ----------
// Add, remove or edit projects here and the cards update automatically.
const projects = [
  {
    title: "Okta to Microsoft Entra migration",
    description: "Led the global identity migration for 2,000 users and 150 applications, coordinating 50+ vendors and senior stakeholders.",
    tags: ["Microsoft Entra", "Okta", "SSO", "SCIM"],
    code: "",
    demo: "",
  },
  {
    title: "Joiner, mover and leaver automation",
    description: "Designed an automated global onboarding and offboarding process, backed by PowerShell user account automation.",
    tags: ["PowerShell", "Automation", "Entra ID"],
    code: "",
    demo: "",
  },
  {
    title: "Google Workspace to Microsoft 365",
    description: "Moved offices in New York and Milan from Google Workspace to Microsoft 365, from planning through to onsite support.",
    tags: ["Microsoft 365", "Migration", "Exchange Online"],
    code: "",
    demo: "",
  },
  {
    title: "Licence usage dashboards",
    description: "Built Power BI dashboards showing licence usage across group companies, helping the business optimise software spend.",
    tags: ["Power BI", "Reporting"],
    code: "",
    demo: "",
  },
  {
    title: "Teams calling and meeting rooms",
    description: "Moved UK telephony from a legacy phone system to Teams calling and upgraded meeting rooms from Zoom to Teams.",
    tags: ["Microsoft Teams", "Telephony"],
    code: "",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    description: "This site! A responsive portfolio with dark mode, built with plain HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Shiv-PateI/Personal-Projects/tree/main/portfolio",
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
