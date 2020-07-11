const readButton = document.getElementById("read");
readButton.addEventListener("click", function() {
  document.getElementById("read").classList.add("selected");
  document.getElementById("add").classList.remove("selected");
  document
    .getElementById("read-section")
    .classList.add("comments-selected-read");
  document
    .getElementById("edit-section")
    .classList.remove("comments-selected-edit");
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", function() {
  document.getElementById("read").classList.remove("selected");
  document.getElementById("add").classList.add("selected");
  document
    .getElementById("read-section")
    .classList.remove("comments-selected-read");
  document
    .getElementById("edit-section")
    .classList.add("comments-selected-edit");
});


function addNewComent() {
  const comment = document.getElementById("user-name").value;
  const commentArea = document.getElementById("comment-area").value;

    if (comment === "" || comment === undefined || comment === null && commentArea === "" || commentArea === undefined || commentArea === null) {
      document.getElementById("user-name").style.border = "1px solid red";
      document.getElementById("comment-area").style.border = "1px solid red";
    } else {
      const newDiv = document.createElement("div");
      document.querySelector(".comments-read").appendChild(newDiv);
      newDiv.classList.add("comment");

      const div = document.createElement("div");
      newDiv.appendChild(div);
      div.classList.add("comment-header");

      const h = document.createElement("h3");
      div.appendChild(h);
      h.classList.add("coment-title")
      h.innerText = document.getElementById("user-name").value;

      const p = document.createElement("p");
      newDiv.appendChild(p);
      p.classList.add("comment-content");
      p.innerText = document.getElementById("comment-area").value;
    }
}
  document.getElementById("submit").addEventListener('click', addNewComent);


  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function() {
  document.getElementById("submit").classList.add("selected");
  document.getElementById("add").classList.remove("selected");
  document
    .getElementById("read-section")
    .classList.add("comments-selected-read");
  document
    .getElementById("edit-section")
    .classList.remove("comments-selected-edit");
});