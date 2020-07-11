// First button
const button = document.getElementById("show");
const text = document.getElementById("description");

function changeButton(){
  if (button.innerText === "Show desc") {
    button.innerText = "Hide desc";
    text.style.display = "block";
  } else {
    button.innerText = "Show desc";
    text.style.display = "none";
  }
}
document.getElementById("show").addEventListener('click', changeButton);

///Second button
const button1 = document.getElementById("show1");
const text1 = document.getElementById("description1");

function changeButton1(){
  if (button1.innerText === "Show desc") {
    button1.innerText = "Hide desc";
    text1.style.display = "block";
  } else {
    button1.innerText = "Show desc";
    text1.style.display = "none";
  }
}
  document.getElementById("show1").addEventListener('click', changeButton1);

//Third button
const button2 = document.getElementById("show2");
const text2 = document.getElementById("description2");

function changeButton2(){
  if (button2.innerText === "Show desc") {
    button2.innerText = "Hide desc";
    text2.style.display = "block";
  } else {
    button2.innerText = "Show desc";
    text2.style.display = "none";
}
}
  document.getElementById("show2").addEventListener('click', changeButton2);
