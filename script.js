const addButton = document.getElementById("addFiled");

function onClickAddButton() {
    const inputField = document.getElementById("fieldName");

    if (inputField.value === "") {
        inputField.style.borderColor = "red";
        return
    }

    inputField.style.borderColor = "";
    const newInput = document.createElement("input");
    const newDiv = document.createElement("div");
    newDiv.classList.add("field");
    const newPara = document.createElement("p");

    document.querySelector(".form-fields").appendChild(newDiv);
    newDiv.appendChild(newPara);
    newDiv.appendChild(newInput);

    newPara.innerText = inputField.value;

    newInput.setAttribute("id", inputField.value);
    inputField.value = "";
}

addButton.addEventListener("click", onClickAddButton)


const sendButton = document.getElementById("send");

function onClickSendButton() {

    let formInputs = document.querySelectorAll("input:not(#fieldName)");
    let myObject = {};
    let isComplete = true;
    for (const field of formInputs) {
        if (!field.value) {
            field.style.borderColor = "red";
            isComplete = false;
        } else {
            field.style.borderColor = "";
        }
        myObject[field.id] = field.value;
    }

    
    const finalString = Object.keys(myObject).map(function (key) {
        let count = ` ${key} - ${myObject[key]}`;
        return count;
    }).join(", ");
    if (isComplete === true) {
        document.getElementsByClassName("form-container")[0].innerHTML = `sended info: ${finalString}`;
    }
    console.log(finalString)

    
}
console.log("click on", sendButton);

sendButton.addEventListener("click", onClickSendButton);