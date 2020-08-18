// ---- Example: Use data from a server to display different meals

// this is the DOM element were all the the meals are render
const mealsContainer = document.getElementById("meals-container");

// the DOM element from which we get the value for the parameter of the url used to get data from server
const input = document.getElementById("meal-name");

// we react to event triggered by clicking on the "get-meal" button
document.getElementById("get-meal").addEventListener("click", function () {
  // before we can get data from server we need to generate the correct url using the value of input
  const url = generateRateUrl(input.value);

  //incase the "generateRateUrl" return nothing we don't have a address so we can't hit the server
  if (url) {
    // we need to clear the meal container so that new data is shown
    clearMealContainer();

    //call the server
    hitServer(url);
  }
});

// this functions return a generate an url based on the input value that is passed when this function is called
// in case the "inputValue" parameter is empty then this function will return "undefined"
function generateRateUrl(inputValue) {
  if (inputValue) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  }
}

// this function replaces the content of DOM element "mealsContainer" with the string "Loading"
// this is used to show something to user when the request to server is made  and until the response comes back
function clearMealContainer() {
  mealsContainer.innerHTML = "Loading";
}

// this function uses the async function fetch to call the server with the url passed in the parameter
function hitServer(url) {
  fetch(url)
    // this is a callback function called when the response from server comes back
    .then(function (response) {
      return response.json();
    })
    // this is a callback function called when parsing the response with "response.json()" comes back
    .then(function (json) {
      // the json is a JS object that has one key "meals", inside "meals" is and array used for rendering the meals given by the server as a response the calling it with a specific parameter in url
      renderMeals(json.meals);
    });
}

// this function create from scratch DOM elements in order to render information passed in the parameter "meals"
function renderMeals(meals) {
  // before adding DOM elements to mealsContainer we want to use "innerHTML" attribute to overwrite the current content so that is empty before we start adding new meals
  mealsContainer.innerHTML = "";
  for (const meal of meals) {
    // please check in the console the structure of the meal object so it will be easier to understand how the data is accessed and used to create the new DOM elements for the meal
    
    const mealContainer = document.createElement("div");
    mealContainer.style.marginBottom = "20px";

    const mealTitle = document.createElement("h3");
    mealTitle.innerText = meal.strMeal;
    mealContainer.appendChild(mealTitle);

    const mealContent = document.createElement("p");
    mealContent.innerText = meal.strInstructions;
    mealContainer.appendChild(mealContent);

    mealsContainer.appendChild(mealContainer);
  }
}
// console.log("start");

// const buttons = document.querySelectorAll(".nav-button");
const buttons = document.getElementsByClassName("nav-button");
// console.log(buttons);

// for (let i = 0; i < buttons.length; i++) {
//   const button = buttons[i];

// }

for (const button of buttons) {
  // console.log(button);
  button.addEventListener("click", (event) => {

    // hide all pages
    const pages = document.getElementsByClassName("page");
    for (const page of pages) {
      page.classList.remove("active-page");
    }

    // show only specific page
    const activePage = document.getElementById(event.target.dataset.page);
    activePage.classList.add("active-page");

    for (const button of buttons) {
      button.classList.remove("selected");
    }

    button.classList.add("selected");
  });
}
