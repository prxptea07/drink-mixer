let stackCount = 0;

function dropIngredient(type) {
  const ingredient = document.createElement('img');
  ingredient.src = `${type}.png`;
  ingredient.classList.add('ingredient');
  document.getElementById('glass-contents').appendChild(ingredient);
}

  stackCount++;
}
