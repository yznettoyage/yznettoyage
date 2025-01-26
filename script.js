// Basculement du menu mobile
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }
  
  // Gestion de l’envoi du formulaire
  function handleForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validation simple
    if (!name || !email || !message) {
      alert("Merci de remplir tous les champs.");
      return;
    }
  
    // Ici, vous pouvez ajouter votre logique d’envoi d’email ou une intégration côté serveur
    alert(`Merci, ${name}. Nous avons bien reçu votre message et nous vous contacterons bientôt !`);
  
    // Réinitialisation du formulaire
    document.querySelector(".contact-form").reset();
  }
  