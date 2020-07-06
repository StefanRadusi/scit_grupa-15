console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);

const allFields = document.getElementsByClassName("field")
const getFields = allFields.value;
 if(getFields === ""){
   getFields.style.borderColor = "red";
 }
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

  const getInput = document.getElementById("fieldName");
  const getNewInput = getInput.value;
     if (getNewInput === ""){
     getInput.style.borderColor = "red";
    }

 }

addButton.addEventListener("click", onClickAddButton);

