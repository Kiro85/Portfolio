import { renderProjects } from "./projects.js";
import { renderSkills } from "./skills.js";

const PROJECTS_JSON = "data/projects.json";
const SKILLS_JSON = "data/skills.json";

export function renderApp() {
  const projectsPromise = fetch(PROJECTS_JSON)
    .then((response) => response.json())
    .then((data) => renderProjects(data.projects || [], data.title || "Projects"))
    .catch((error) => console.error("Error fetching projects:", error));

  const skillsPromise = fetch(SKILLS_JSON)
    .then((response) => response.json())
    .then((data) => renderSkills(data.skills || [], data.title || "Skills"))
    .catch((error) => console.error("Error fetching skills:", error));

  return Promise.all([projectsPromise, skillsPromise]);
}
