 const categoryCards = document.querySelectorAll(".category-card");
    
    categoryCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 15px 30px rgba(204,255,0,0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });