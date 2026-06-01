document.addEventListener("DOMContentLoaded", () => {
    
    // --- EFECTO DE ENTRADA SUAVE ---
    const animatedSections = document.querySelectorAll(".animate-on-scroll");

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.15
    });

    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
});