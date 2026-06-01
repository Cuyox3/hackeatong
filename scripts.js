
document.addEventListener("DOMContentLoaded", () => {
    
    // --- EFECTO ENTRADA SUAVE (Intersection Observer) ---
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

    // --- ANIMACIÓN AL PASAR EL CURSOR POR LAS CATEGORÍAS ---
    const categoryCards = document.querySelectorAll(".category-card");
    
    categoryCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 15px 30px rgba(204,255,0,0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});

