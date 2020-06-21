// for the user yo intuitively know which section is visible between view comments and add comments we highlight the toggle buttons
// we use "selected" css class on the "add" or "read" button to change the aspect of the button
// we use "classList.add" and "classList.remove" to add and remove css class accordingly to which button we want to be highlighted
// similar logic we use for showing and hiding the read comments section ot add comment section

function showReadSection() {
  document.getElementById("read").classList.add("selected");
  document.getElementById("add").classList.remove("selected");
  document
    .getElementById("read-section")
    .classList.add("comments-selected-read");
  document
    .getElementById("edit-section")
    .classList.remove("comments-selected-edit");
}

function showEditSection() {
  document.getElementById("add").classList.add("selected");
  document.getElementById("read").classList.remove("selected");
  document
    .getElementById("edit-section")
    .classList.add("comments-selected-edit");
  document
    .getElementById("read-section")
    .classList.remove("comments-selected-read");
}
