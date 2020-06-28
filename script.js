console.log("start");

const div = document.querySelector(".form-fields");
const addButton = document.getElementById("addField");
let newField = document.getElementById("fieldName");

addButton.addEventListener("click", inputEvaluation);

function inputEvaluation() {
  if (newField.value.trim() == "null" || newField.value.trim() === "")
    newField.style.borderColor = "red";
  else addNewCategory();
}
function addNewCategory() {
  const newCategorySpace = document.createElement("div");
  newCategorySpace.setAttribute("class", "field");
  div.appendChild(newCategorySpace);


  const newCategoryName = document.createElement("p");
  newCategoryName.innerText = newField.value;
  newCategorySpace.appendChild(newCategoryName);

  const newCategoryInput = document.createElement("input");
  newCategoryInput.setAttribute("id", "new-category")
  newCategorySpace.appendChild(newCategoryInput);

  newField.style.borderColor = "lightgray" ; 
  newField.value= "" ; 

}

const sendButton = document.getElementById("send");
let inputs = document.getElementsByTagName("input");
let paragraphs = document.getElementsByTagName("p");
let userDetails = paragraphs[0];
console.log(userDetails.innerHTML);
let userInfo = "";

sendButton.addEventListener("click", onClickSendButton);


function onClickSendButton() {
  console.log("click on", sendButton);
  let count = 0;
  for (const input of inputs) {
    if (input!==newField && input.value===""){
      input.style.borderColor = "red";
      count++;
    }
    else if (input!==newField) {
      const parent = input.parentNode;
      const paragraph = parent.querySelector("p");
      userInfo = paragraph.innerText+":"+input.value+" ";
    }

    if(count===0){
      console.log(userInfo);
      let bodyInfo = document.getElementsByTagName("body");
      bodyInfo[0].innerHTML=userInfo;
    }
    else {
      count = 0 ; 
      userInfo="";
    }
    return userInfo;
  }
}

