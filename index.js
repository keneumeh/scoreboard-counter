// get the score element to display Text
// configure each button to increase Text

let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let winner = document.getElementById('winner')

function updateWinner(){
    let homeScoree = Number(homeScore.textContent)
    let guestScoree = Number(guestScore.textContent)
    if (homeScoree > guestScoree){
        winner.textContent = 'Home in the Lead!'
    }
    else if(homeScoree < guestScoree){
        winner.textContent = 'Guest in the Lead!'
    }
    else {
        winner.textContent = 'Draw... Hold Tight!'
    }
}


//Home
function addOneHome (){
    
    // 0 + 1  - guestscore
    
    let Score = Number(homeScore.textContent) + 1
    homeScore.textContent = Score
    updateWinner()
}
function addTwoHome (){
    let score = Number(homeScore.textContent) + 2
    homeScore.textContent = score
    updateWinner()
}
function addThreeHome(){
    let score = Number(homeScore.textContent) + 3
    homeScore.textContent = score
    updateWinner()
}
function addOneGuest(){
    let score = Number(guestScore.textContent) + 1
    guestScore.textContent = score
    updateWinner()
}
function addTwoGuest(){
    let score = Number(guestScore.textContent) + 2
    guestScore.textContent = score
    updateWinner()
}
function addThreeGuest(){
    let score = Number(guestScore.textContent) + 3
    guestScore.textContent = score
    updateWinner()
}

//New game - create button that sets scores to zero

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    winner.textContent = ''
}
