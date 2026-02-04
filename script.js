// Ana Grbić AI 2/2023, Đorđe Slavković AI 12/2023
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

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Molimo vas da popunite sva polja.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Unesite validnu email adresu.");
        return;
      }

      alert("Hvala na poruci, " + name + "! Javićemo vam se uskoro.");
      form.reset();
    });
  }

  // Dugme "Na vrh"
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Galerija – otvaranje uvećane slike u modalu
  const modalImage = document.getElementById("modalImage");
  const thumbs = document.querySelectorAll(".thumb");
  if (modalImage && thumbs.length > 0) {
    thumbs.forEach(img => {
      img.addEventListener("click", () => {
        const fullImg = img.getAttribute("data-img");
        modalImage.src = fullImg;
      });
    });
  }
});

// Deklarišemo konstantnu promenljivu 'citati' koja čuva niz (listu) tekstova
const citati = [
    '"Sreća prati hrabre."',
    '"Znanje je moć."',
    '"Bolje sprečiti nego lečiti."',
    '"Ko rano rani, dve sreće grabi."'
];


// Definišemo funkciju pod nazivom 'noviCitat' koju možemo pozvati kasnije
function noviCitat() {
    // Generiše nasumičan broj na osnovu dužine niza
    const randomIndex = Math.floor(Math.random() * citati.length);
    //Npisemo u HTML tagu sa id-jem citat.
    document.getElementById('citat').innerText = citati[randomIndex];
}