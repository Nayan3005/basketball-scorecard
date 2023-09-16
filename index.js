let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let newGameEl = document.getElementById("new-game")
document.getElementById("inc-one-home").addEventListener("click",incOneHome)
document.getElementById("inc-two-home").addEventListener("click",incTwoHome)
document.getElementById("inc-three-home").addEventListener("click",incThreeHome)
document.getElementById("inc-one-guest").addEventListener("click",incOneGuest)
document.getElementById("inc-two-guest").addEventListener("click",incTwoGuest)
document.getElementById("inc-three-guest").addEventListener("click",incThreeGuest)
document.getElementById("new-game").addEventListener("click",newGame)

let homeScore=0
let guestScore=0
function highlight(){
    if(homeScore === guestScore){
        document.getElementById("home-score-screen").style.borderColor = ""
        document.getElementById("guest-score-screen").style.borderColor = ""
    }else if(homeScore>guestScore){
        document.getElementById("home-score-screen").style.borderColor = "red"
        document.getElementById("guest-score-screen").style.borderColor = ""
    }else{
        document.getElementById("guest-score-screen").style.borderColor = "red"
        document.getElementById("home-score-screen").style.borderColor = ""
    }
}

function incOneHome(){
    homeScore = Number(homeScoreEl.innerText)
    homeScore+=1
    homeScoreEl.innerText = homeScore
    highlight()
}

function incTwoHome(){
    homeScore = Number(homeScoreEl.innerText)
    homeScore+=2
    homeScoreEl.innerText = homeScore
    highlight()
}

function incThreeHome(){
    homeScore = Number(homeScoreEl.innerText)
    homeScore+=3
    homeScoreEl.innerText = homeScore
    highlight()
}

function incOneGuest(){
    guestScore = Number(guestScoreEl.innerText)
    guestScore+=1
    guestScoreEl.innerText = guestScore
    highlight()
}

function incTwoGuest(){
    guestScore = Number(guestScoreEl.innerText)
    guestScore+=2
    guestScoreEl.innerText = guestScore
    highlight()
}

function incThreeGuest(){
    guestScore = Number(guestScoreEl.innerText)
    guestScore+=3
    guestScoreEl.innerText = guestScore
    highlight()
}

function newGame(){
        homeScore = 0
        guestScore = 0
        homeScoreEl.innerText = homeScore
        guestScoreEl.innerText = guestScore
        highlight()

}