const showHideButtons = document.getElementsByClassName(
  "article-show-hide-desc-button"
);

for (const button of showHideButtons) {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const description = event.target.parentNode.parentNode.querySelector(
      ".article-short-description"
    );

    console.log(event.target, event.target.parentNode.parentNode);

    if (event.target.innerText.includes("show")) {
      event.target.innerText = "hide desc";
      description.classList.add("article-short-description-show");
    } else {
      event.target.innerText = "show desc";
      description.classList.remove("article-short-description-show");
    }
  });
}
