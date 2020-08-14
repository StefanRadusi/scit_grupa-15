console.log("meals categories");

class PopUp {
  constructor() {
    this.popHtml = document.getElementById("pop-up");
    document
      .getElementById("close")
      .addEventListener("click", this.close.bind(this));
      const containerPopUpContent = document.getElementById("pop-up-content");
      this.renderMealsList();
  }

  show(mealCatergory) {
    this.popHtml.classList.add("pop-up-show");
    this.renderMealsList(mealCatergory);
  }

  renderMealsList(mealCatergory) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCatergory}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.meals = json.meals;
        this.renderCategoriesPopUp();
      });
  }

  renderCategoriesPopUp() {
    // console.log(this.categories);
    this.cardsPopUp = [];
    for (const meal of this.meals) {
      this.cardsPopUp.push(
        new MealCategoryPopUp(
          meal.strMeal,
          meal.strMealThumb,
          this.popHtml
        )
      );
    }
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
  }
}

const popUp = new PopUp();

class Categories {
  constructor() {
    // console.log("in constructor");

    this.htmlContainer = document.getElementById("meals-categories-container");
    this.getMealsCategories();
  }

  getMealsCategories() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(json => {
        this.categories = json.categories;
        this.renderCategories();
      });
  }

  renderCategories() {
    // console.log(this.categories);
    this.cards = [];
    for (const category of this.categories) {
      // console.log(category);
      this.cards.push(
        new MealCategory(
          category.strCategory,
          category.strCategoryThumb,
          category.strCategoryDescription,
          this.htmlContainer
        )
      );
    }
  }
}

class MealCategory {
  constructor(tile, img, shortDesc, parent) {
    this.tile = tile;
    this.img = img;
    this.shortDesc = shortDesc;
    this.parent = parent;

    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("meal-category-card");
    container.addEventListener("click", () => {
      console.log(this.tile);
      popUp.show(this.tile);
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


class MealCategoryPopUp {
  constructor(title, imgPopUp, parentPopUp) {
    this.title = title;
    this.imgPopUp = imgPopUp;
    this.parentPopUp = parentPopUp;

    this.renderPopUp();
  }

  renderPopUp() {
    const containerPopContent = document.getElementById("pop-up-content");

    const titleHtml = document.createElement("h3");
    titleHtml.innerText = this.title;
    titleHtml.classList.add("title-pop-up")
    containerPopContent.appendChild(titleHtml);

    const imgHtmlPopUp = document.createElement("img");
    imgHtmlPopUp.src = this.imgPopUp;
    imgHtmlPopUp.classList.add("img-pop-up")
    containerPopContent.appendChild(imgHtmlPopUp);

    this.parentPopUp.appendChild(containerPopContent);
  }
}

new Categories();