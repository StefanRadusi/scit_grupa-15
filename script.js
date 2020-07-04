// console.log("start");

// // example of reacting to button click
// const sendButton = document.getElementById("send");

// // this the function that will be called when click event is triggered
// function onClickSendButton() {
//   console.log("click on", sendButton);
// }

// // we attached a function to click event triggered by send button
// sendButton.addEventListener("click", onClickSendButton);


const addButton = document.getElementById("addField");

addButton.addEventListener("click", function onClickAddButton() {
  const inputvalue = document.getElementById("fieldName").value;
  console.log(inputvalue);
  if(inputvalue.value === "") {
    inputvalue.style.borderColor = "red";
    return
  }
  inputvalue.style.borderColor = "";
  const newField = document.createElement("div");
  newField.classList.add("field");
  const newP = document.createElement("p");
  const newInput = document.createElement("input");
  newField.appendChild(newP);
  newField.appendChild(newInput);
  document.querySelector(".form-fields").appendChild(newField);
  newP.innerText = inputvalue.value;
  newInput.setAttribute("id", inputvalue.value);
  inputvalue.value = "";
})


const sendButton = document.getElementById("send");

sendButton.addEventListener("click", function onClickSendButton(){ 
  let count = 0;
  for (const input of inputs) 

    if(input !== newValue && input.value === "")
    {
    
     input.style.borderColor = "red";
     
    }
     else if(input !== newValue) { 
      const parent = input.parentNode;
      const paragraph = parent.querySelector("p");
      results = paragraph.innerText + ":" + input.value + " ";     
    }   
    
    if(count === 0) { 
    console.log(results); 
    let body = document.getElementsByTagName("body");
     body[0].innerHTML=results
    } else {
    count=0;
    results="";
    }
    return results; 
  });



