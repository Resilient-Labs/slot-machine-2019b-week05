let status = document.querySelector(".status")

let reelItems = [
    "<img src='images/arryn.png'>",
    "<img src='images/targaryen.png'>",
    "<img src='images/baratheon.png'>",
    "<img src='images/greyjoy.png'>",
    "<img src='images/lannister.png'>",
    "<img src='images/martell.png'>",
    "<img src='images/stark.png'>",
    "<img src='images/targaryen.png'>",
    "<img src='images/tully.png'>",
    "<img src='images/tyrell.png'>"
]

let reel1 = document.querySelector(".reel1")
let reel2 = document.querySelector(".reel2")
let reel3 = document.querySelector(".reel3")

let coins = document.querySelector(".coins")
coins.innerText = 1000

document.querySelector(".minBtn").addEventListener("click", minRun)
document.querySelector(".maxBtn").addEventListener("click", maxRun)

function minRun() {
    if (coins.innerText >= 5) {
        coins.innerText = Number(coins.innerText) - 5

        reel1.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]
        reel2.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]
        reel3.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]

        if (reel1.innerHTML === reel2.innerHTML && reel2.innerHTML === reel3.innerHTML) {
            status.innerText = "You Win"
            coins.innerText = Number(coins.innerText) + 50
        }
        else {
            status.innerText = "You Die"
        }
    }
    else {
        document.querySelector("h2").innerText = "Not Enough Coins"
    }
}

function maxRun() {
    if (coins.innerText >= 50) {
        coins.innerText = Number(coins.innerText) - 50

        reel1.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]
        reel2.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]
        reel3.innerHTML = reelItems[Math.floor(Math.random() * reelItems.length)]

        if (reel1.innerHTML === reel2.innerHTML && reel2.innerHTML === reel3.innerHTML) {
            status.innerText = "You Win"
            coins.innerText = Number(coins.innerText) + 1000
        }
        else {
            status.innerText = "You Die"
        }
    }
    else {
        document.querySelector("h2").innerText = "Not Enough Coins"
    }
}

//reset button refreshes the page
    //syntax: window.location.reload();