//listOfArticles will be an array with all dom elements with css class "article"
const listOfArticles = document.getElementsByClassName("article");

// we iterate over listOfArticles using "for of" control structure
// in every iteration the constant "article" becomes the current element of the array of articles
for (const article of listOfArticles) {
  // we want to redirect the user to the correct page so we react to click on the article
  article.addEventListener("click", function() {
    // by using the dom element's id we ca create the page name needed in redirecting
    const articleId = article.id;
    location.href = articleId + ".html";
  });
}
