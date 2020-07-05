console.log("dom manipulation");


const AddField = document.getElementById("addFiled");

function AddFieldClick () {
    const newFieldName = document.getElementById("fieldName").value;
        if(newFieldName === null || newFieldName.length === 0 || newFieldName === undefined) {
            document.getElementById("fieldName").style.borderColor = "red";
        }
        else {
            const newDiv = document.createElement("div");
            document.querySelector(".form-fields").appendChild(newDiv);
            newDiv.classList.add("field");

            const paraghaphNew = document.createElement("p");
            newDiv.appendChild(paraghaphNew);
            paraghaphNew.innerText = document.getElementById("fieldName").value;

            const newInput = document.createElement("input");
            newDiv.appendChild(newInput)
            newInput.id = newFieldName;

            document.getElementById("fieldName").value = "";
        }
}
AddField.addEventListener("click", AddFieldClick);
