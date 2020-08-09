console.log("meals categories");

class PopUp {
  constructor() {
    this.popHtml = document.getElementById("pop-up");
    document
      .getElementById("close")
      .addEventListener("click", this.close.bind(this));
  }

  show(mealCatergory) {
    this.popHtml.classList.add("pop-up-show");
    this.renderMealsList(mealCatergory);
  }

  renderMealsList(mealCatergory) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCatergory}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.displayMeals(json.meals);
      });
    //console.log("aa");  !!!!PROGRAMARE ASINCRONA
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
  }

  displayMeals(mealsList) {
    // console.log(mealsList);
    // for (const meal of mealsList) {
    //   console.log("aaa", meal);
    //   const mealPopContainer = document.createElement("div");
    //   mealPopContainer.classList.add("meal-pop-container");
    //   document.getElementById("pop-up-content").appendChild(mealPopContainer);

    //   const { strMeal, strMealThumb } = meal;
    //   const mealImg = document.createElement("img");
    //   mealImg.src = strMealThumb;
    //   mealPopContainer.appendChild(mealImg);
    //   const mealTitle = document.createElement("h4");
    //   mealTitle.innerText = strMeal;
    //   mealPopContainer.appendChild(mealTitle);
    // }
    this.popUpContentContainer = document.getElementById("pop-up-content");
    this.mealListArray = [];
    for (const meal of mealsList) {
      this.mealListArray.push(
        new MealElement(
          meal.strMealThumb,
          meal.strMeal,
          this.popUpContentContainer
        )
      )
    }
  }
}
class MealElement {
  constructor(img, title, parent) {
    this.img = img;
    this.title = title;
    this.parent = parent;

    this.renderPopUp();
  }

  renderPopUp() {
    const mealPopContainer = document.createElement("div");
    mealPopContainer.classList.add("meal-pop-container");
    this.parent.appendChild(mealPopContainer);

    const mealImg = document.createElement("img");
    mealImg.src = this.img;
    mealPopContainer.appendChild(mealImg);

    const mealTitle = document.createElement("h4");
    mealTitle.innerText = this.title;
    mealPopContainer.appendChild(mealTitle);
  }
}

const popUp = new PopUp();

class Categories {
  constructor() {
    console.log("in constructor");

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
    //prin array-ul gol creat se formeaza o referinta 
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
