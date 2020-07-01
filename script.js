console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", SendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
// Color change input
const fildNameBlack= document.getElementById("fieldName")
function changeColor(){
if (fildNameBlack.value==="")
return fildNameBlack.style.borderColor= "red"
}

addFiled.addEventListener("click", changeColor)

//function display(){

//  a=document.getElementsByClassName("form-fields");

 // b=document.createElement('input')
 // b.setAttribute("type", "text")
 // b.setAttribute("id", "newInput")

  //a.appendChild(b);
//}

//addField.addEventListener("click", display() );