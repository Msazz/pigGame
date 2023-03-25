'use strict';

let activePlayer =0;

const btnReset = document.querySelector(".btn--new");
const score = document.querySelectorAll(".score");
const currentScores = document.querySelectorAll(".current-score");
const roll = document.querySelector(".btn--roll");

btnReset.addEventListener("click",()=>{
    clearAllValues();
});

function clearAllValues(){
    currentScores.forEach((ele)=>{
        ele.innerHTML = 0;
    })
    score.forEach((ele)=>{
        ele.innerHTML = 0;
    })
    const player0 = document.querySelector(".player--0");
    player0.classList.add("player--active");
}

const btnHold = document.querySelector(".btn--hold");

btnHold.addEventListener("click",()=>{
    const playerScore = document.getElementById(`score--${activePlayer}`);
    playerScore.innerHTML =Number(playerScore.innerHTML)+ Number(document.getElementById(`current--${activePlayer}`).innerHTML);
    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    if(Number(playerScore.innerHTML)>=100){
        document.getElementsByClassName(`player--${activePlayer}`)[0].classList.add("player--winner");
    }
    togglePlayer();
})

function togglePlayer(){
    activePlayer  = activePlayer == 1?0:1;
    const players = document.querySelectorAll(".player");
    players.forEach((player)=>{
        player.classList.toggle("player--active");
    })
}

roll.addEventListener("click",()=>{
    const diceValue = Math.floor(Math.random()*6)+1;
    const diceimg = document.querySelector(".dice");
    diceimg.src = `dice-${diceValue}.png`
    let toggleFlag = false;
    currentScores.forEach((currScore)=>{
        if(currScore.closest(".player--active")!=null)
        {

            if(diceValue === 1){
                currScore.innerHTML =0;
                toggleFlag  =true;
            }
            else{
                currScore.innerHTML =Number(currScore.innerHTML)+ diceValue;
            }
        }
        
    })
    if(toggleFlag){
        togglePlayer();
    }
})
