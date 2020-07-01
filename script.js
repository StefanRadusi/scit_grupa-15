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

const addButton = document.getElementById("addField");



//window.onload = function(){

function onClickAddButton() {
  console.log("click on", addButton);

  //for (const el of addButton){
  //  const div = document.createElement("div");
  //  console.log(div);
  //  div.classList.add("field");

  //  const p = document.createElement("p");
  //  p.innerText = ('{fieldName}');
  //  div.appendChild(p);

  //  const newInput = document.createElement("input");
  //  newInput.id = ("{fieldName}");
  //  div.appendChild(newInput);

  //  document.body.appendChild(div);
  
 // }

function newInput(){
  const div = document.createelement("div");
  div.setAttribute("class" , "field");
  div.appendChild(newDiv);

  const p = document.createElement("p");
  p.innerText = newValue.value;
  div.appendChild(p);

  const input = document.createElement("input");
  input.setAttribute("id","newField");
  div.appendChild(input);

  newValue.style.bordercolor="lightgray";
}
 }
//}

addButton.addEventListener("click", onClickAddButton);

let getNewField = document.getElementById('{fieldName}').value;

 if(getNewField.length === 0){
   getNewField.style.border = "1px solid red";
 }else{
   getNewField.style.border = "1px solid lightgray";
 }

let allFields = document.getElementsByClassName('form-fields').value;
 
 if(allFields.length === 0){
   allFields.style.border = "1px solid red";
 }else {
   allFields.style.border = "1px solid lightgray";
 }
