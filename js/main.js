import { animations } from "./components/animations.js";
import { navFadeIn } from "./components/nav.js";
import { emailSent } from "./components/contact.js";
import { renderApp } from "./components/renderApp.js";

renderApp()
  .then(() => {
    animations();
    navFadeIn();
    emailSent();
  })
  .catch((error) => {
    console.error("Error rendering app:", error);
  });
