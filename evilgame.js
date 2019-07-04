const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput ==='paper'|| userInput ==='scissor'|| userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error!');
  }
 };

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3);
   switch(randomNumber){
     case 0:
       return 'rock'
     case 1:
       return 'paper'
     case 2:
       return 'scissor';
 }
}

const determineWinner =(userChoice, computerChoice) =>{
  if(userChoice === 'bomb')
    {return 'You won'}
  if(userChoice === computerChoice){
    return 'tie'
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'computer won';
    }
     else {
      return 'You won';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissor'){
      return 'computer won';
    }
     else {
      return 'You won';
    }
  }
  if(userChoice === 'scissor') {
    if(computerChoice === 'rock') {
         return 'computer won'
    }
    else {
     return 'You won';
    }
  }
}
function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
