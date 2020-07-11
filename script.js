const articles = document.getElementsByClassName("article");

for (const article of articles) {
  article.addEventListener("click", function() {
    const title = this.querySelector(".article-title");

    const titleText = title.innerText;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    // window.location = `${titleText.replace(/ /g, "")}.html`;
  });
}

const input = document.getElementById("searchInput");

input.addEventListener("keyup", function(event) {
  // console.log(event);
  // console.log("key", event.key);
  // console.log(event.target);
  // console.log(input.value);
  // console.log("keyup", event.target.value);
});

// will fire when click outside of input
input.addEventListener("change", function(event) {
  // console.log(event);
  // console.log("key", event.key);
  // console.log(event.target);
  // console.log(input.value);
  // console.log("change", event.target.value);
});

input.addEventListener("keydown", function(event) {
  // console.log(event);
  // console.log("key", event.key);
  // console.log(event.target);

  // console.log(input.value);
  // console.log("keydown", event.target.value);

  if (event.key === "Enter") {
    console.log("react to enter", event.target.value);
    const titleList = Array.from(
      document.getElementsByClassName("article")
    ).map(function(article) {
      console.log(article);
      const title = article.querySelector(".article-title");
      const titleText = title.innerText;

      return titleText;
    });



    // pentru a face sa caute ceva in pagina web
    
    console.log(titleList);
    for (const title of titleList) {
      if (title.includes(event.target.value)) {
        console.log(
          "redirect",
          event.target.value,
          title,
          `${title.replace(/ /g, "")}.html`
        );
        return (window.location = `${title.replace(/ /g, "")}.html`);
      }
    }
  }
});

//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers
