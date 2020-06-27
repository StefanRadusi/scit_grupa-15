/// add a new field if is ok and make the input red if is empty

function addField(){
    const onclick  = document.getElementById("text2").value;
    if (onclick === "") {
      document.getElementById("text2").style.border = "1px solid red"
    } else {
      const newElement = document.createElement("div");
      document.querySelector(".input-container").appendChild(newElement);
      newElement.classList.add("input-box");
    
      const newP = document.createElement("p");
      newElement.appendChild(newP);
      newP.innerText = document.getElementById("text2").value;
    
      const newInput = document.createElement("input");
      newElement.appendChild(newInput);
    }
    }
    document.getElementById("addButton").addEventListener("click", addField); 
    
    // make all inputs red if is not fill and if is fill send info from all inputs
    
    function onSendButton(){
      const allInputs = document.getElementsByTagName("input");
      const val = document.getElementById("text2");
      let component = 0;
      let final = "";
      for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i] !== val && allInputs[i].value === "") {
          allInputs[i].style.border = "1px solid red";
          component++;
        } else if (allInputs[i] !== val){
          const leaf = allInputs[i].parentNode;
          const para = leaf.querySelector("p");
          final += para.innerText + ":" + allInputs[i].value + " ";
          finalSection = "send info:" + " " + final;
        }
      }
      if (component === 0) {
        let body = document.getElementsByTagName("body");
        body[0].innerHTML = finalSection
      }
      else {
        component = 0;
        finalSection = "";
      }
      return finalSection;
    }
    
    document.getElementById("sendButton"),addEventListener("click", onSendButton);