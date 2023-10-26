function checkCardsInColumns() {
    const columns = document.querySelectorAll('.col-sm-12.col-md-4'); // Minden .col-sm-12.col-md-4 osztályú elemet kiválasztunk
    let cardCount = 0; // Számláló a .card osztályú elemek számához
  
    columns.forEach((column) => {
      const cardElements = column.querySelectorAll('.card'); // Az aktuális .col-sm-12.col-md-4 elemen belül keresünk .card osztályú elemeket
      cardCount += cardElements.length;
    });
  
    if (cardCount > 0) {
      console.log('Az elemek között található .card osztályú elemek száma: ' + cardCount);
    } else {
      console.error('Hiba: Nincs .card osztályú elem a .col-sm-12.col-md-4 osztályú elemek között.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkCardsInColumns);
  