const rolle = document.getElementById('roll');
rolle.addEventListener("click", roll);

const dice1e = document.querySelector('.dice1')
const dice2e = document.querySelector('.dice2')

let player1e = document.querySelector('.player1 .total-score span')
let player2e = document.querySelector('.player2 .total-score span')
let count = 1;
let player1 = 0
let player2 = 0
let randomTotal = 0
const target = 56
let winningTarget = 0
let gameWin = false


function roll(){
    if(!gameWin){
        dice1e.style.visibility = "visible";
        dice2e.style.visibility = "visible";
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;
        dice1e.innerHTML = random1
        dice2e.innerHTML = random2
        randomTotal = random1 + random2
        if(count % 2 == 0){
            player2 += randomTotal
            player2e.innerHTML = player2
            winningTarget = player2
            if(player2 >= target){
                document.getElementById('Winning').innerHTML = "Player 2 Wins &#127882; &#127881;"
                gameWin = true
                
            }
            
        } else{
            player1 += randomTotal
            player1e.innerHTML = player1
            winningTarget = player1
            if(player1 >= target){
                document.getElementById('Winning').innerHTML = "Player 1 Wins &#127882; &#127881;"
                gameWin = true
                
            }
        }
        count++;
    } else {
        document.getElementById('Winning').innerHTML = "Game Over Please Start A New Game"
    }

}
document.querySelector('.new-game').addEventListener('click',newGame)
function newGame(){
    document.location.reload();
}