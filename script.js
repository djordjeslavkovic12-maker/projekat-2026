document.addEventListener("DOMContentLoaded", () => {
  // Funkcionalnost za dugmiće "Saznaj više"
  const buttons = document.querySelectorAll(".infoBtn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Hvala što istražujete turizam u Srbiji!");
    });
  });

  // Funkcionalnost za kontakt formu
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // sprečava reload stranice

      // Preuzimanje vrednosti iz polja
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Osnovna validacija
      if (name === "" || email === "" || message === "") {
        alert("Molimo vas da popunite sva polja.");
        return;
      }

      // Provera email formata (jednostavna)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Unesite validnu email adresu.");
        return;
      }

      // Ako je sve u redu
      alert("Hvala na poruci, " + name + "! Javićemo vam se uskoro.");
      form.reset(); // resetuje polja forme
    });
  }
});