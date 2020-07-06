// console.log("start");

// // example of reacting to button click
// // const sendButton = document.getElementById("send");

// // this the function that will be called when click event is triggered
// function onClickSendButton() {
//   console.log("click on", sendButton);
// }

// // we attached a function to click event triggered by send button
// sendButton.addEventListener("click", onClickSendButton);

// console.log("dom manipulation");


let AddNewField = document.getElementById("addFiled");

function AddFieldOnClick () {
    let newFieldName = document.getElementById("fieldName").value;
        if(newFieldName === null || newFieldName.length === 0 || newFieldName === undefined) {
            document.getElementById("fieldName").style.borderColor = "red";
        }
        else {
            let newRow = document.createElement("div");
            document.querySelector(".form-fields").appendChild(newRow);
            newRow.classList.add("field");

            let newParagraph = document.createElement("p");
            newRow.appendChild(newParagraph);
            newParagraph.innerText = document.getElementById("fieldName").value;

            let newInput = document.createElement("input");
            newRow.appendChild(newInput)
            newInput.id = newFieldName;

            document.getElementById("fieldName").value = "";
        }
}
AddNewField.addEventListener("click", AddFieldOnClick);