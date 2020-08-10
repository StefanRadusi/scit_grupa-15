export class MealCategory {
  constructor(tile, img, shortDesc, parent, popUp) {
    this.tile = tile;
    this.img = img;
    this.shortDesc = shortDesc;
    this.parent = parent;
    this.popUp = popUp;

    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("meal-category-card");
    container.addEventListener("click", () => {
      console.log(this.tile);
      this.popUp.show(this.tile);
    });

    const tileHtml = document.createElement("h3");
    tileHtml.innerText = this.tile;
    container.appendChild(tileHtml);

    const imgHtml = document.createElement("img");
    imgHtml.src = this.img;
    container.appendChild(imgHtml);

    const descHtml = document.createElement("p");
    descHtml.innerText = this.shortDesc;
    container.appendChild(descHtml);

    this.parent.appendChild(container);
  }
}
