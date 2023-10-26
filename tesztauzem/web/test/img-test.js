function checkImage() {
    const images = document.querySelectorAll('img'); // Minden képet kiválasztunk
  
    let found = false; // Változó, ami jelzi, hogy találtuk-e a képet
  
    images.forEach((image) => {
      if (image.src.includes('lavakovi-csoteszta.jpg')) {
        found = true;
        const classList = image.classList;
        if (classList.contains('figure-img') && classList.contains('rounded')) {
          console.log('A kép "figure-img" és "rounded" osztályokkal van formázva.');
        } else {
          console.error('Hiba: A kép nem megfelelően van formázva.');
        }
      }
    });
  
    if (!found) {
      console.error('Hiba: Nincs "lavakovi-csoteszta.jpg" nevű kép az oldalon.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkImage);
  