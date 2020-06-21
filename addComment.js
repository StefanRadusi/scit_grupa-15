// we react to click on submit button
document.getElementById("submit").addEventListener("click", function() {
  const userNameInputDOM = document.getElementById("user-name");
  // the dom elements in which you can type text usually have a value key
  // we can use this key to get the current text present in the input
  const userNameValue = userNameInputDOM.value;

  // in case the input is empty we want to alert the user that he must do something if he want to add a comment
  // we alert the user by coloring the input border red
  if (userNameValue === "") {
    userNameInputDOM.style.borderColor = "red";
  }

  //similar logic for the textArea component which contains the comment content
  const commentAreaDOM = document.getElementById("comment-area");
  const commentAreaValue = commentAreaDOM.value;
  if (commentAreaValue === "") {
    commentAreaDOM.style.borderColor = "red";
  }

  // only create the comment in the comments section if both the input and textArea have text in it
  if (userNameValue && commentAreaValue) {
    // "showReadSection" function is present in "utils.js" and have the functionality of hiding the add comment section showing read comment section
    // we call the this function in order to see directly the new added comment after the submit button in clicked
    showReadSection();

    // this function is responsible creating the new comment using the values from input and textArea
    createComment(userNameValue, commentAreaValue);
  }
});

function createComment(userNameValue, commentAreaValue) {
  const commentContainer = document.createElement("div");
  commentContainer.className = "comment";
  document.getElementById("read-section").appendChild(commentContainer);

  const commentHeader = document.createElement("div");
  commentHeader.className = "comment-header";
  commentContainer.appendChild(commentHeader);

  const commentTitle = document.createElement("h3");
  commentTitle.className = "comment-title";
  commentTitle.innerText = userNameValue;
  commentHeader.appendChild(commentTitle);

  const commentDate = document.createElement("p");
  commentDate.className = "comment-date";

  // the date field of the comment is created automatically using the native JavaScript object "Date"
  // when we created the object the current date and hour will be stored
  // we need "formatDate" function in order to bring the "new Date()" result to the format we need
  commentDate.innerText = formatDate(new Date());
  commentHeader.appendChild(commentDate);

  const commentContent = document.createElement("p");
  commentContent.className = "comment-content";
  commentContent.innerText = commentAreaValue;
  commentContainer.appendChild(commentContent);
}

function formatDate(date) {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + "." + (monthIndex + 1) + "." + year;
}
