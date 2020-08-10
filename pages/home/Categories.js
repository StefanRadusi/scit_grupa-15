import { MealCategory } from "./MealCategory";

export class Categories {
  constructor(popUp) {
    console.log("in constructor");
    this.popUp = popUp;
    this.htmlContainer = document.getElementById("meals-categories-container");
    this.getMealsCategories();
    console.log(this.categories);
  }

  getMealsCategories() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((json) => {
        this.categories = json.categories;
        this.renderCategories();
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
          this.htmlContainer,
          this.popUp
        )
      );
    }
  }
}
