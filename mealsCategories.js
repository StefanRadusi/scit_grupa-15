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
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealCatergory
      )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.showMeals(json.meals);
      });
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
    this.MealContainer.innerHTML = "";
  }

  showMeals(mealsList) {
    this.MealContainer = document.getElementById("pop-up-content");
    this.ArrayMealList = [];
    for (const meal of mealsList) {
      this.ArrayMealList.push(
        new MealElement(
          meal.strMealThumb,
          meal.strMeal,
          this.MealContainer
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

    this.MealPopUpContent();
  }

  MealPopUpContent() {
      let mealContainerPopUp;
      mealContainerPopUp = document.createElement("div");
      mealContainerPopUp.classList.add("meal-container-pop-up");
      this.parent.appendChild(mealContainerPopUp);

      let mealImgPop;
      mealImgPop = document.createElement("img");
      mealImgPop.src = this.img;
      mealContainerPopUp.appendChild(mealImgPop);

      let mealTitlePop;
      mealTitlePop = document.createElement("h4");
      mealTitlePop.innerText = this.title;
      mealContainerPopUp.appendChild(mealTitlePop);
  }
}

const popUp = new PopUp();

class Categories {
  constructor() {
   

    this.htmlContainer = document.getElementById("meals-categories-container");
    this.getMealsCategories();
   
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
    
    this.cards = [];
    for (const category of this.categories) {
      
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
        //console.log(this.tile);
        popUp.show(this.tile);
      });

      let tileHtml;
      tileHtml = document.createElement("h3");
      tileHtml.innerText = this.tile;
      container.appendChild(tileHtml);

      let imgHtml;
      imgHtml = document.createElement("img");
      imgHtml.src = this.img;
      container.appendChild(imgHtml);

      let descHtml;
      descHtml = document.createElement("p");
      descHtml.innerText = this.shortDesc;
      container.appendChild(descHtml);

      this.parent.appendChild(container);
  }
}

new Categories();
