export class PopUp {
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
      });
  }

  close() {
    this.popHtml.classList.remove("pop-up-show");
  }
}
