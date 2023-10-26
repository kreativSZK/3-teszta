function checkCardTitle() {
    const cardTitles = document.querySelectorAll('.card-title'); // Minden .card-title osztályú elemet kiválasztunk
  
    let found = false; // Változó, ami jelzi, hogy találtuk-e a megfelelő elemet
  
    cardTitles.forEach((title) => {
      if (title.textContent.includes('Durum szalageper')) {
        found = true;
      }
    });
  
    if (found) {
      console.log('Találtunk .card-title osztályú h4 elemet "Durum szalageper" szöveggel.');
    } else {
      console.error('Hiba: Nincs .card-title osztályú h4 elem "Durum szalageper" szöveggel.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkCardTitle);
  