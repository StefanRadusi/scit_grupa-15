
class PopUp {
  constructor() {
    this.popHtml = document.getElementById("pop-up");
    document
      .getElementById("close")
      .addEventListener("click", this.close.bind(this));
  }

  show(mealCatergory) {
    this.popHtml.classList.add("pop-up-show");
    this.renderMealsList(this.popHtml, mealCatergory);
  }

  renderMealsList(popHtml, mealCatergory) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCatergory}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.displayMeals(popHtml, json);
      });
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
    
  }

  displayMeals(popHtml, json){
    for (const meal of json.meals) {

    const container =  document.createElement("div");
    container.classList.add("popUpDivContainer")
    
    
    const imgContainer = document.createElement("img");
    imgContainer.src = meal.strMealThumb;
    imgContainer.classList.add("popUpImg")

    const recipeTitle = document.createElement('p');
    recipeTitle.classList.add('popUpText');
    recipeTitle.innerText = meal.strMeal;


    container.appendChild(imgContainer);
    container.appendChild(recipeTitle)



      document.getElementById("pop-up-content").appendChild(container);
      document.getElementById("close").addEventListener("click",()=>{
        container.remove()
      })
    }
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
    // console.log(this.categories);
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
