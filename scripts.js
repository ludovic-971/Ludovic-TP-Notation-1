let selectedRating = null;

document.querySelectorAll(".rating-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".rating-btn").forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        selectedRating = this.getAttribute("data-value");
    });
});

document.querySelector(".submit-btn").addEventListener("click", function() {
    if (selectedRating !== null) {
        // Masquer le formulaire de notation
        document.getElementById("rating-form").style.display = "none";
        // Afficher le message de réponse
        document.getElementById("reponse-message").style.display = "block";
    } else {
        alert("Veuillez sélectionner une note avant d'envoyer.");
    }
});