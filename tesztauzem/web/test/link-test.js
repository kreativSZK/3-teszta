function runNavbarLinkTest() {
  const navLinks = document.querySelectorAll('.nav-link');

  console.log(`Összesen ${navLinks.length} .nav-link link található az oldalon.`);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Kattintottak a következő linkre: ${link.textContent}`);
    });
  });
}

// Az oldal betöltődésekor futtatjuk a tesztet
window.addEventListener('load', runNavbarLinkTest);
