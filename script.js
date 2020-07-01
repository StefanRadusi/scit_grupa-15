console.log("start");


const div = document.querySelector(".form-fields")

const button = document.getElementById("addFiled");
let newValue = document.getElementById("fieldName");

button.addEventListener("click", validateInput);

function validateInput() {
    if (newValue.value === "" || newValue.value === "null")
        newValue.style.borderColor = "red";
    else return addNewInput();

}

function addNewInput() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "field");
    div.appendChild(newDiv);

    const newPara = document.createElement("p");
    newPara.innerText = newValue.value;
    newDiv.appendChild(newPara);

    const newInput = document.createElement("input");
    newInput.setAttribute("id", "newField");
    newDiv.appendChild(newInput);

    newValue.style.borderColor = "lightgray";
    newValue.value = "";

}

const sendButton = document.getElementById("send");
let inputs = document.getElementsByTagName("input");

let para = document.getElementsByTagName("p");
let content = para[0];
console.log(content.innerHTML)

let results = "";

sendButton.addEventListener("click", onClickSendButton);

function onClickSendButton() {
    let count = 0;
    for (const input of inputs)
        if (input !== newValue && input.value === "") {

            input.style.borderColor = "red";
            count++;
        }
        else if (input !== newValue) {
            const parent = input.parentNode;
            const paragraph = parent.querySelector("p");
            results += paragraph.innerText + ":" + input.value + " ";
        }
    if (count === 0) {
        console.log(results);
        let myBody = document.getElementsByTagName("body");
        myBody[0].innerHTML = results
    }
    else {
        count = 0;
        results = "";
    }
    return results;
}