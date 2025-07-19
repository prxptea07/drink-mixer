let stackCount = 0;

function dropIngredient(type) {
  const img = document.createElement('img');
  img.src = `${type}.png`;
  img.classList.add('ingredient');

  const container = document.getElementById('glass-contents');
  container.appendChild(img);

  stackCount++;
}
