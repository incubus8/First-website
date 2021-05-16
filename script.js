const player = {
    pick: null
  }
  const computer = {
    pick: null
  }
  
  
  const options = ["Rock", "Paper", "Scissors"];
  player.pick = options[2];
  
  function computerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    computer.pick = options[randomIndex];
  }
  
  function compare(e){
    player.pick = e.target.innerText;
    computerChoice();
    if(computer.pick === player.pick){
      displayResult ("It's a tie! Both chose " + computer.pick);
    }else if (computer.pick === options[0]){
      if(player.pick === options[1]){
        displayResult("You chose wisely! The computer chose " + computer.pick + " and you chose " + player.pick);
      }else{
        displayResult("You chose poorly! The computer chose " + computer.pick + " and you chose " + player.pick);
      }
    }else if (computer.pick === options[1]){
      if(player.pick === options[2]){
        displayResult("You chose wisely! The computer chose " + computer.pick + " and you chose " + player.pick);
      }else{
      displayResult("You chose poorly! The computer chose " + computer.pick + " and you chose " + player.pick);
      }    
    }else if (computer.pick === options[2]){
      if(player.pick === options[0]){
        displayResult("You chose wisely! The computer chose " + computer.pick + " and you chose " + player.pick);
      }else{
        displayResult("You chose poorly! The computer chose " + computer.pick + " and you chose " + player.pick);
      }
    }
  }
  
  function displayResult(result){ 
    const resultText = document.createElement('p');
    resultText.innerText = result;
    document.body.appendChild(resultText);
  }
  
  
  document.querySelector("#Rock").addEventListener('click', compare, displayResult);
  document.querySelector("#Paper").addEventListener('click', compare, displayResult);
  document.querySelector("#Scissors").addEventListener('click', compare, displayResult);