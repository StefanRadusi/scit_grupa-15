console.log("start");

const AddField = document.getElementById("addFiled");

function onClickAddField() {
  const newFieldName = document.getElementById("fieldName").value;
  if (newFieldName === null || newFieldName === undefined || newFieldName.length === 0) {
    document.getElementById("fieldName").style.borderColor = "red";
  } else {
    const newDiv = document.createElement("div");
    document.querySelector(".form-fields").appendChild(newDiv);
    newDiv.classList.add("field");

    const newParagraph = document.createElement("p");
    newDiv.appendChild(newParagraph);
    newParagraph.innerText = document.getElementById("fieldName").value;

    const newInput = document.createElement("input");
    newDiv.appendChild(newInput);
    newInput.id = newFieldName;

    document.getElementById("fieldName").value = "";
    document.getElementById("fieldName").style.border = "";
  }
}
AddField.addEventListener("click", onClickAddField);

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  const InputValue = document.getElementsByTagName("input");
  const newValue = document.getElementById("fieldName");
  let count = 0;
  let results = "";

  for (let i = 0; i < InputValue.length - 1; i++) {
    if (InputValue[i] !== newValue && InputValue[i].value === "") {
      InputValue[i].style.borderColor = "red";
      count++;
    } else if (InputValue[i] !== newValue) {
      const parent = InputValue[i].parentNode;
      const paragraph = parent.querySelector("p");
      results += paragraph.innerText + ":" + InputValue[i].value + " ";
      totalResults = "Sended info:" + " " + results;
    }
  }
  if (count === 0) {
    let myBody = document.getElementsByTagName("body");
    myBody[0].innerHTML = totalResults
  }
  else {
    count = 0;
    totalResults = "";
  }
  return totalResults;
}
// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

