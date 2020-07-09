console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);


const addButton = document.getElementById("addFiled");
function addNewFieldContainer () {
  const ValueFromInput = document.getElementById("fieldName").value;
  if(ValueFromInput === ""){
    return document.getElementById("fieldName").style.borderColor = "red";
  }
  const NewDiv = document.createElement("div");
  const NewParagraph = document.createElement("p");
  const NewInput = document.createElement("input");
  NewDiv.classList.add("field");
  NewInput.id = ValueFromInput;
  NewInput.autocomplete = "off";
  NewParagraph.innerText = ValueFromInput;
  document.getElementById("form-fields-container").appendChild(NewDiv);
  NewDiv.appendChild(NewParagraph);
  NewDiv.appendChild(NewInput);
}
addButton.addEventListener("click", addNewFieldContainer);