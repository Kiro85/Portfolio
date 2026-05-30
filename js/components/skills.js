import { buildBadgeClass } from "./elementBuilder.js";

export function renderSkills(skills, title) {
  const skillsTitle = document.getElementById("skillsTitle");
  const skillsCards = document.getElementById("skillsCards");

  if (skillsTitle && title) skillsTitle.textContent = title;

  if (skillsCards && Array.isArray(skills)) {
    skillsCards.innerHTML = skills
      .map((skill) => {
        const iconMarkup = skill.icon
          ? skill.icon.trim().startsWith("<")
            ? skill.icon
            : `<i class="${skill.icon}" aria-hidden="true"></i>`
          : `<span>${skill.name.charAt(0)}</span>`;

        return `
            <div class="col-12 col-md-4 col-lg-3">
              <div class="tech-card">
                <div class="tech-card-image">
                  <span class="skill-icon">${iconMarkup}</span>
                </div>
                <div class="tech-card-content">
                  <p class="tech-card-title">${skill.name}</p>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${skill.percent}%;"></div>
                  </div>
                  <span class="tech-card-percentage">${skill.percent}%</span>
                </div>
              </div>
            </div>
          `;
      })
      .join("");
  }
}
