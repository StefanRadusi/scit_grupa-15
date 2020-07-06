

function generateLetters() 
{
    for (let i = 65; i < 91; i++) 
    {
      const letter = String.fromCharCode(i);
      console.log(letter);
      const letterPara = document.createElement("p");
      letterPara.innerText = letter;
      mealsInitials.appendChild(letterPara);
      letterPara.classList.add("alfa")
      letterPara.addEventListener("click",function(){

        const link = generateRateLink(letter);
        if (link)
        { 
            clearMealContainer();
        
            getMeal(link)}
      
        });
    }
}
      generateLetters();    

    function generateRateLink(letter){
        if (letter) {
            return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
          }

    };

    function getMeal(link){
        fetch(link)
        .then(function (response) {
          return response.json();
        })
        // this is a callback function called when parsing the response with "response.json()" comes back
        .then(function (json) {
          // the json is a JS object that has one key "meals", inside "meals" is and array used for rendering the meals given by the server as a response the calling it with a specific parameter in url
          renderMeals(json.meals);
        });

    };
    
