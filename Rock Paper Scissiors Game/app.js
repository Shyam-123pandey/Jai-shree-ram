let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genrateComputerChoice = () => {
    const options = ["rock","paper","scissors"]
  const randIdx =  Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () => {
  console.log("Game was graw ");
  msg.innerText = "Game was Draw , Let's try again "
    msg.style.backgroundColor = "purple";
}

const showWinner = (userwin,userChoice, compChoice) => {
  if(userwin){
    userScore++
    userScorePara.innerText = userScore;
    console.log("You win ")
    msg.innerText=`You Win ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("comp won")
    msg.innerText=`You Loss ! ${compChoice} beats ${userChoice}`
    msg.style.backgroundColor = "Red";
  }
}

 const playGame = (userChoice) => {
   console.log("userchoice = ", userChoice)

   const compChoice = genrateComputerChoice();
   console.log("compterchoice : ",compChoice)

   if(userChoice === compChoice) {
  drawGame()
   } else {
    let userwin = true;
    if(userChoice === "rock"){
      userwin = compChoice ==="paper"?false:true;
    } else if(userChoice === "paper"){
      userwin = compChoice === "scissors"?false:true;
    } else {
      userwin = compChoice === "rock"?false:true;
    }

    showWinner(userwin,userChoice,compChoice)
   }
 }
choices.forEach((choice) => {
  // console.log(choice)
  choice.addEventListener("click", ()  => {
    //attribue is use for class name;
    const userChoice = choice.getAttribute("id");
    playGame(userChoice)
  })
})

