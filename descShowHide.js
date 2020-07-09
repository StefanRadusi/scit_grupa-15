function changeDesc(element) {
    if (element.classList.contains("show-desc-selected")) {
        element.innerText = "Hide desc";
        element.classList.remove("show-desc-selected");
        element.classList.add("hide-desc-selected");
        const a = element.parentNode.parentNode.querySelector(".article-short-description");
        // p.style.display = "block";
        a.classList.add("article-short-description-set")
    } else {
        element.innerText = "Show desc";
        element.classList.remove("hide-desc-selected");
        element.classList.add("show-desc-selected");
        const p = element.parentNode.parentNode.querySelector(".article-short-description");
        // p.style.display = "none";
        p.classList.remove("article-short-description-set");
    }
}


//     if (element.innerText === "Hide desc") {
//         element.innerText = "Show desc";
//     } else {
//         element.innerText = "Hide desc";
//     }


const showescSpans = document.getElementsByClassName("show-desc");
for (const showDescElement of showescSpans) {
    showDescElement.addEventListener("click", function () {
        changeDesc(this);
    });
}


