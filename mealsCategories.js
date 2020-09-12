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
      .then((json)=> {
        console.log(json);
        this.meals = json.meals;
        this.displayMealsPopUp(json.meals);
      });
  }

  displayMealsPopUp() {
    this.cards = [];
    for (const meal of this.meals) {
     
      this.cards.push(
        new DisplayMealsCategoryPopUp(
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

class DisplayMealsCategoryPopUp {
  constructor(tile, img,  parent) {
    this.tile = tile;
    this.img = img;
    
    this.parent = parent;

    this.renderPopUp();

  }

    renderPopUp() {
      const containerPopUp = document.getElementById("pop-up-content");
     
     const div = document.createElement("div");
     containerPopUp.classList.add("meal-category-popUp");
     containerPopUp.appendChild(div);

    

      const imgHtml = document.createElement("img");
      imgHtml.id = "img-pop-up"
      imgHtml.src = this.img;
      containerPopUp.appendChild(imgHtml);

      const tileHtml = document.createElement("h3");
      tileHtml.innerText = this.tile;
      tileHtml.id = "tile-pop-up";
      containerPopUp.appendChild(tileHtml);
  
      this.parent.appendChild(containerPopUp);
    }
  }

new Categories();