// we react to keydown event on search input
// we do this because we don't have a "enter" event in browser
document.getElementById("search").addEventListener("keydown", function(event) {
  // all the function that are called when a event is trigger have as the first parameter the event object
  // because the e a keyboard event the object has a key named "key" which contains the actual keyboard name
  // the "keydown" event is trigger every time a key is pressed but whe need to make actions only when "Enter" key is pressed, thus the "if" statement
  if (event.key === "Enter") {
    // the event object contains the object which trigger the event in the "target" key
    // in this case the "target" is the search input
    // because "target" is a input it has a "value" key that we can use to get the current text present int search input
    const searchValue = event.target.value;

    // we need all the articles title object so that we can check against the search text
    const articleTitles = document.getElementsByClassName("article-title");

    for (let article of articleTitles) {
      const articleTitleText = article.innerText;

      // we need the the article id so we can construct the file name needed in redirect instruction
      // the "article-title" is grand child to the "article" which contains the actual id so we need to move app the DOM tree using parentNode key
      const articleId = article.parentNode.parentNode.id;

      // we only the search text is included in the article title only then we redirect
      if (articleTitleText.includes(searchValue)) {
        // the return key work will assure as the the for statement will be stopped when the above check is true
        // thus we redirect the user to the fist article that contains the text in the search input
        return (location.href = articleId + ".html");
      }
    }
  }
});
