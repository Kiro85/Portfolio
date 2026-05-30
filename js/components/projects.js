import { buildBadgeClass } from "./elementBuilder.js";

export function renderProjects(projects, title) {
  const projectsTitle = document.getElementById("projectsTitle");
  const projectsContainer = document.getElementById("projectsContainer");

  if (projectsTitle && title) projectsTitle.textContent = title;

  if (projectsContainer && Array.isArray(projects)) {
    projectsContainer.innerHTML = projects
      .map((project, index) => {
        const orderClass = index % 2 === 0 ? "project-animate-left" : "project-animate-right";
        const imageOrder = index % 2 === 0 ? "order-lg-2" : "order-lg-1";
        const textOrder = index % 2 === 0 ? "order-lg-1" : "order-lg-2";
        const badges = (project.tech || [])
          .map((tech) => `<span class="badge rounded-pill ${buildBadgeClass(tech)} text-black">${tech}</span>`)
          .join("");

        return `
            <article class="row align-items-center g-5 my-5 p5-5 mx-auto ${orderClass}">
              <div class="col-lg-6 ${textOrder}">
                <div class="d-flex flex-column">
                  <h3 class="mb-4">${project.title}</h3>
                  <p class="mb-3">${project.description}</p>
                  <div class="mb-5 d-flex gap-2">
                    ${badges}
                  </div>
                  <div class="mt-5 align-self-center">
                    <a href="${project.link}" target="_blank" class="btn btn-primary shadow-none me-3">See Project</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 ${imageOrder}">
                <div>
                  <img src="${project.image}" alt="${project.title}" class="img-fluid rounded">
                </div>
              </div>
            </article>
          `;
      })
      .join("");
  }
}
