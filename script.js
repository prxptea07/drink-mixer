function dropIngredient(type) {
  const img = document.createElement('img');
  img.src = `${type}.png`;
  img.classList.add('ingredient');

  const container = document.getElementById('glass-contents');
  container.appendChild(img);

  img.style.bottom = '200px';
  setTimeout(() => {
    img.style.bottom = '0px';
  }, 100);
}
