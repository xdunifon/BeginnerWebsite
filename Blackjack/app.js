let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    playerName: "Per",
    playerChips: 145,
}

playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.playerChips

isAlive = false

function randomCard() {
    let num = Math.floor((Math.random() * 13)+1)
    if (num === 1) {
        return 11
    } else if (num > 10) {
        return 10
    } else {
        return num
    }
}

function start() {
    isAlive = true
    message = ""
    win = false

    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    render()
}

function render() {
    cardsEl.textContent = "Cards: "
    for (i=0; i<cards.length; i+=1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want ot draw a new card?"
    } else if (sum === 21) {
        message = "Nice! You got blackjack"
        win = true
    } else {
        message = "You're out of the game, sorry."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !win) {
        let card = randomCard()
        sum += card
        cards.push(card)

        render()
    } else {
        messageEl.textContent = "Click start game to begin a new game"
    }
}