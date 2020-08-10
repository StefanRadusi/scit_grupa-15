export function setUpNavigation() {
  const buttons = document.getElementsByClassName("nav-button");

  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      console.log("click", event.target.dataset.page);

      // hide all pages
      const pages = document.getElementsByClassName("page");
      for (const page of pages) {
        page.classList.remove("active-page");
      }

      // show only specific page
      const activePage = document.getElementById(event.target.dataset.page);
      activePage.classList.add("active-page");
      console.log(activePage);

      for (const button of buttons) {
        button.classList.remove("selected");
      }

      button.classList.add("selected");
    });
  }
}
