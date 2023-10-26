function runWebshopLinkTest() {
    const webshopLink = document.querySelector('a.nav-link[href="webshop.html"]');
  
    if (webshopLink) {
      webshopLink.addEventListener('click', (event) => {
        if (webshopLink.getAttribute('target') === '_blank') {
          console.log('A Webshop link új ablakban nyílik meg.');
        } else {
          console.error('Hiba: A Webshop link nem új ablakban nyílik meg.');
        }
      });
  
      // Automatikusan kattintsunk a linkre
      webshopLink.click();
    } else {
      console.error('Hiba: A Webshop link nem található az oldalon.');
    }
  }
  
  // Az oldal betöltődésekor futtatjuk a tesztet
  window.addEventListener('load', runWebshopLinkTest);
  