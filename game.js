let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
  };                             //default operator

// if(!score){                 //or score === null
/*   score = {
  wins: 0,
  loses: 0,
  ties: 0
  }   */
//}
updateScore();

let isAutoPlaying = false;
let  intervalId;
function autoPlay(){
   if(!isAutoPlaying){
      intervalId = setInterval(()=>{
         const playermove = pickComputerMove();
         playGame(playermove);
         }, 1000)
         isAutoPlaying = true;
         document.querySelector('.js-autoplay').innerHTML = 'Stop Playing';
   }else{
      clearInterval(intervalId);
      isAutoPlaying = false;
      document.querySelector('.js-autoplay').innerHTML = 'Auto Play';
   }
   
}

document.querySelector('.js-scissor-button').addEventListener('click', ()=> playGame('Scissor')
)

document.querySelector('.js-paper-button').addEventListener('click', ()=>playGame('Paper') 
)

document.querySelector('.js-rock-button').addEventListener('click', ()=>
playGame('Rock')
)

document.body.addEventListener('keydown', (event)=>{
   if(event.key === 'r'){
      playGame('Rock');
   } else if (event.key=== 'p'){
      playGame('Paper')
   } else if (event.key=== 's'){
      playGame('Scissor')
   } else if (event.key=== 'Backspace'){
      resetScore();
   }
}

)

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = ''

  if (playerMove === 'Rock'){
     if(computerMove === 'Rock'){
        result = 'It\'s a Tie.';
        } else if (computerMove === 'Paper'){
        result = 'You lose.';
        } else if(computerMove === 'Scissor'){
        result = 'You win.';
        }
  }
  
  else if (playerMove === 'Paper'){
     if(computerMove === 'Rock'){
        result = 'You win.';
        } else if (computerMove === 'Paper'){
        result = 'It\'s a Tie.';
        } else if(computerMove === 'Scissor'){
        result = 'You lose.';
        }
  }
  
  else if(playerMove === 'Scissor'){
     if(computerMove === 'Rock'){
        result = 'You lose.';
        } else if (computerMove === 'Paper'){
        result = 'You win.';
        } else if(computerMove === 'Scissor'){
        result = 'It\'s a Tie.';
        }
  }

  if(result === 'You win.'){
     score.wins += 1;
  }else if (result === 'You lose.'){
     score.loses +=1;
  }else if(result === 'It\'s a Tie.'){
     score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = result

  document.querySelector('.js-moves').innerHTML = `You chose:
  <img src="emojis/${playerMove}-emoji.png" class="move-icon">
  <br>
  Computer chose:
  <img src="emojis/${computerMove}-emoji.png" class="move-icon">`

  // alert(`You picked ${playerMove}.\nComputer chose ${computerMove}.\n${result} \nWins:${score.wins}, Loses:${score.loses}, Ties:${score.ties} `);
}


function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties} `;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let = computerMove = '';
  
  if(randomNumber>=0 && randomNumber<1/3) {
     computerMove = ('Rock');
  } else if(randomNumber>=1/3 && randomNumber <2/3){
     computerMove = ('Paper');
  }else if(randomNumber>=2/3 && randomNumber <1){
        computerMove = ('Scissor');
  }
  return computerMove;
}

document.querySelector('.js-autoplay').addEventListener('click', ()=>{
   autoPlay();
  });

  function resetScore(){
   score.wins=0;
   score.ties = 0;
   score.loses = 0;
   localStorage.removeItem('score')
   updateScore();
  }
  document.querySelector('.js-reset-score').addEventListener('click', ()=>{
   showResetScore();
  })
 
  function showResetScore(){
   document.querySelector('.js-reset-confirmation').innerHTML = `
   Are you sure you want to reset the score?
   <button class="js-reset-confirm-yes">
   Yes
   </button>
   <button class="js-reset-confirm-no">
   No
   </button>
   `;

   document.querySelector('.js-reset-confirm-yes').addEventListener('click', ()=>{
      resetScore();
      hideResetConfirmation();
   });

   document.querySelector('.js-reset-confirm-no').addEventListener('click', ()=>{
      hideResetConfirmation();
   });
  }

 function hideResetConfirmation(){
   document.querySelector('.js-reset-confirmation').innerHTML = '';
 }
