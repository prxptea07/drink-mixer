const ingredients = document.querySelectorAll(".ingredient");
const dropZone = document.getElementById("drop-zone");

ingredients.forEach((item) => {
  item.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = item.src;
    img.classList.add("falling");

    // Position the new item at the top of the glass
    img.style.left = Math.random() * 50 + 25 + "%";

    dropZone.appendChild(img);

    img.addEventListener("animationend", () => {
      img.classList.remove("falling");
      img.classList.add("in-glass");
    });
  });
});

