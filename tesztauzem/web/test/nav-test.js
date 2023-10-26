// Ellenőrzi, hogy a Bootstrap nav-item stílusosztállyal rendelkező elemek léteznek
function checkNavItems() {
    const navItems = document.querySelectorAll('li.nav-item');
  
    if (navItems.length === 4) {
      console.log('A Bootstrap stílusosztállyal ellátott 4 darab <li> elem megtalálható.');
    } else {
      console.error('Hiba: Nem található 4 darab <li> elem Bootstrap stílusosztállyal.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkNavItems);
  