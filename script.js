console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

console.log("start homework");

const addButton = document.getElementById("addFiled");

function onClickAddButton() {
  console.log("click on", addButton);

   const div = document.createElement("div");
   console.log(div);
   div.classList.add("field");

   const p = document.createElement("p");
   const nameValue = document.getElementById("fieldName").value;
   p.innerText = nameValue;
   div.appendChild(p);

   const newInput = document.createElement("input");
   newInput.id = ("{fieldName}");
   div.appendChild(newInput);

  document.getElementById("fields").appendChild(div);
   
 }

addButton.addEventListener("click", onClickAddButton);

let getNewField = document.getElementById('{fieldName}').value;

 if(newInput.length === ""){
   newInput.style.border = "1px solid red";
 }else{
   newInput.style.border = "1px solid lightgray";
 }

let allFields = document.getElementsByClassName('form-fields').value;
 
 if(allFields.length === 0){
   allFields.style.border = "1px solid red";
 }else {
   allFields.style.border = "1px solid lightgray";
 }
