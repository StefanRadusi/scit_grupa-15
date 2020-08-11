import { generalSearch } from "./generalSearch";

export function getDataAtLetter(letters) {
  // console.log(letters);

  for (const letterParagraph of letters) {
    letterParagraph.addEventListener("click", (event) => {
      console.log("click", event.target.innerText);

      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.innerText}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          renderSearchBox(event.target.innerText, json);
        });
    });
  }
}

function renderSearchBox(letter, json) {
  if (document.getElementById("searchBox")) {
    document.getElementById("searchBox").remove();
  }

  const container = document.createElement("div");
  container.id = "searchBox";
  container.style.margin = "20px";
  const label = document.createElement("p");
  label.innerText = `Search in meals that starts with ${letter}`;

  const input = document.createElement("input");
  input.placeholder = "search";

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const searchString = event.target.value;
      const resultedMeal = generalSearch(searchString, json);
      displayMealTitle(resultedMeal);
    }
  });

  container.appendChild(label);
  container.appendChild(input);

  document.body.appendChild(container);
}

function displayMealTitle(meal) {
  if (document.getElementById("mealTitle")) {
    document.getElementById("mealTitle").remove();
  }

  const p = document.createElement("p");
  p.id = "mealTitle";
  p.innerText = meal
    ? `String found in meal: ${meal.strMeal}`
    : "Nothing found";

  document.body.appendChild(p);
}
