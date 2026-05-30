function buildElement(tag, text, className = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function buildBadgeClass(tech) {
  const value = tech.toLowerCase();

  switch (value) {
    case "angular":
      return "bg-danger text-black";
    case "java":
      return "bg-warning text-black";
    case "spring-boot":
      return "bg-success text-black";
    case "sass":
      return "bg-danger-subtle text-black";
    case "bootstrap":
      return "bg-info text-black";
    case "javascript":
      return "bg-warning text-black";
    case "mysql":
      return "bg-primary text-white";
    case "docker":
      return "bg-info text-black";
    case "github":
      return "bg-dark text-white";
    default:
      return "bg-secondary text-white";
  }
}

export { buildElement, buildBadgeClass };