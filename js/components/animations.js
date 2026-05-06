export function animations() {
    const projectItems = document.querySelectorAll(".project-animate-left, .project-animate-right");
    const techCards = document.querySelectorAll(".tech-card");
    const contact = document.querySelector(".contact");
    const items = [...projectItems, ...techCards, contact];

    if (items.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    } else {
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.25, rootMargin: "0px 0px -20% 0px" }
        );

        items.forEach((item) => observer.observe(item));
    }
}