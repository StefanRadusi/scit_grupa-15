console.log("meals categories");

class PopUp {
  constructor() {
    this.popHtml = document.getElementById("pop-up");
    this.popContent=document.getElementById("pop-up-content")

    document
      .getElementById("close")
      .addEventListener("click", this.close.bind(this));
      
      
  }

  show(mealCategory) {
    this.popHtml.classList.add("pop-up-show");
    this.renderMealsList(mealCategory);
  }

  renderMealsList(mealCategory) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log(mealCategory);
          this.displayMeals(json.meals);
          console.log(json.meals)
      });
  }

  displayMeals(mealCategory) {

    for (const meal of mealCategory) {
      const newCategory = document.createElement("div");
      newCategory.classList.add("pop-up-div")

      const img = document.createElement("img");
      img.src = meal.strMealThumb;
      img.classList.add("pop-up-imgs")
      newCategory.appendChild(img);


      const description = document.createElement("p");
      description.innerText = meal.strMeal;
      newCategory.appendChild(description);
      description.classList.add("text-pop-up")


      this.popContent.appendChild(newCategory);
    }
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
    this.popContent.innerText=""

  }
}

const popUp = new PopUp();

class Categories {
  constructor() {
    console.log("in constructor");

    this.htmlContainer = document.getElementById("meals-categories-container");
    this.getMealsCategories();
  }

  getMealsCategories() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(json => {
        this.categories = json.categories;
        this.renderCategories();
        console.log(this.categories);
      });
  }

  renderCategories() {
    // console.log(this.categories);
    this.cards = [];
    for (const category of this.categories) {
      console.log(category);
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

new Categories();