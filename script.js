
const roll = document.getElementById("roll")
const hold = document.getElementById("hold")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const countturn = document.getElementById("count")
const cor1 = document.getElementById("cor1")
const cor2 = document.getElementById("cor2")
const score1 = document.getElementById("score1")
const score2 = document.getElementById("score2")
const plyer1 = document.getElementById("plyer1")
const plyer2 = document.getElementById("plyer2")
const maxscore = document.getElementById("maxscore")
let max = 20
maxscore.innerText = JSON.stringify(max)
let rdice1
let rdice2
let plyer = 1
plyer1.className = "pley"
console.log(maxscore);

hold.addEventListener("click", () => {
    roll.style.pointerEvents = "all"
    countturn.innerText = 5
    if (plyer == 1) {
        score1.innerText = Number(score1.innerText) + Number(cor1.innerText)
        cor1.innerText = 0
        if (score1.innerText >= max) {
            plyer1.className = "win"
            const winner = document.createElement("h1")
            winner.innerText = "plyrt 1 is a winner"
            plyer1.insertBefore(winner, score1)
            roll.style.pointerEvents = "none"
            hold.style.pointerEvents = "none"
        }
        plyer = 2
        plyer1.classList.remove ( "pley")
        plyer2.className = "pley"

    } else {
        score2.innerText = Number(score2.innerText) + Number(cor2.innerText)
        cor2.innerText = 0
        if (score2.innerText >= max) {
            plyer2.className = "win"
            const winner = document.createElement("h1")
            winner.innerText = "plyrt 2 is a winner"
            plyer2.insertBefore(winner, score2)
            roll.style.pointerEvents = "none"
            hold.style.pointerEvents = "none"
        }
        plyer = 1
        plyer2.classList.remove ("pley")
        plyer1.className = "pley"

    }


})
roll.addEventListener("click", () => {
    rdice1 = Math.floor(Math.random() * 6 + 1);
    rdice2 = Math.floor(Math.random() * 6 + 1);
    dice1.style.display = "flex"
    dice1.style.backgroundImage = `url("../imeges/${rdice1}.png")`
    dice2.style.display = "flex"
    dice2.style.backgroundImage = `url("../imeges/${rdice2}.png")`
    countturn.innerText = Number(countturn.innerText) - 1
    if (plyer == 1) {
        cor1.innerText = Number(cor1.innerText) + (rdice1 + rdice2)
        if (rdice1 == rdice2) {
            countturn.innerText = 0
            cor1.innerText = 0
        }
        if (countturn.innerText == 0) {
            roll.style.pointerEvents = "none"
            score1.innerText = Number(score1.innerText) + Number(cor1.innerText)
            cor1.innerText = 0

        }
    } else {
        cor2.innerText = Number(cor2.innerText) + (rdice1 + rdice2)
        if (rdice1 == rdice2) {
            countturn.innerText = 0
            cor2.innerText = 0
        }
        if (countturn.innerText == 0) {
            roll.style.pointerEvents = "none"
            score2.innerText = Number(score2.innerText) + Number(cor2.innerText)
            cor2.innerText = 0

        }
    }
})
