
const array=["Rock", "Paper", "Scissors"];
const computerNumber=Math.floor(Math.random()*3);
const userNumber=Math.floor(Math.random()*3);
const computerChoice= array[computerNumber];
const userChoice= array[userNumber];

const result= "Computer choice: " + computerChoice+ " User choice: "+  userChoice +" "


function compareResults(computerChoice,userChoice)
{
   //Equality

    if(userChoice===computerChoice){
  return result + "It's a tie";
    }

   //Check for Rock
    if (userChoice==="Rock")
    {
      if(computerChoice==="Scissors")
         return result + "Player Wins";
         else  return result + "Computer Wins";
   };


   // Check for Paper
    if (userChoice==="Paper") 
    {
      if(computerChoice==="Scissors")
       return result + "Computer Wins";
       else  return result + "Player Wins";
    } 


   // Check for Scissors

     if (userChoice==="Scissors")
     {
        if(computerChoice==="Rock")
         return result + "Computer Wins";
         else return result + "Player Wins";
     }

}
const gameResult= compareResults(computerChoice,userChoice);
console.log(gameResult);