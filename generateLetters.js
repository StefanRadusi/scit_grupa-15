export function generateLetters() {
  // let aLetter = "A";
  // console.log(aLetter, aLetter.charCodeAt(0));
  // console.log("B", "B".charCodeAt(0));
  // console.log("C", "C".charCodeAt(0));
  // console.log("Z", "Z".charCodeAt(0));
  // console.log(String.fromCharCode(68));

  let lettersList = [];

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    // console.log(letter);

    const p = document.createElement("p");
    p.innerText = letter;
    p.style.display = "inline-block";
    p.style.margin = "20px";

    document.body.appendChild(p);
    lettersList.push(p);
  }

  return lettersList;
}
