//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// array of images 5 different options
const arr = ['/images/css.png', '/images/html.png', '/images/javaScript.png', '/images/node.png', '/images/ress.png']

// Player initial credit $ 1000 
let playersCredit = 1000
// validator makes sure that the function start does not run when is already running
let validator = true
const buttons = document.querySelectorAll('button')
const credit = document.querySelector('span')
let myInt, bet  = 0

// Event Listener on each button and run start
buttons.forEach(e => e.addEventListener('click', start => {
    bet = Number(start.target.getAttribute('data-value'))
    if (validator == true && playersCredit !== 0) {
        myInt = setInterval(spin, 100)
        setTimeout(stop, 3000)
    }
    validator = false
    return bet
}))

// spin randomize the first real and run the other two at the same time to make them spin
function spin() {
    let randomizer = Math.floor(Math.random() * arr.length)
    let randomArr = []
    document.querySelectorAll('.reelRightImages').forEach(e => {
        // while loop makes sure that we will not get the same result twice in the same reel
        while (randomArr.includes(randomizer)) {
            randomizer = Math.floor(Math.random()
                * arr.length)
        }
        randomArr.push(randomizer)
        e.src = arr[randomizer]
    })
    reel2()
    reel3()
}

// randomize and change images in reel 2
function reel2() {
    let randomizer2 = Math.floor(Math.random() * arr.length)
    let randomArr2 = []
    document.querySelectorAll('.reelMiddleImages').forEach(e => {
        while (randomArr2.includes(randomizer2)) {
            randomizer2 = Math.floor(Math.random()
                * arr.length)
        }
        randomArr2.push(randomizer2)
        e.src = arr[randomizer2]
    })
}

// randomize and change images in reel 3
function reel3() {
    let randomizer3 = Math.floor(Math.random() * arr.length)
    let randomArr3 = []
    document.querySelectorAll('.reelLeftImages').forEach(e => {
        while (randomArr3.includes(randomizer3)) {
            randomizer3 = Math.floor(Math.random()
                * arr.length)
        }
        randomArr3.push(randomizer3)
        e.src = arr[randomizer3]
    })
}

// stop function for running.
function stop() {
    clearInterval(myInt)
    checkWinner(bet)
    validator = true
}

//check winner and Update bet.
function checkWinner(bet) {
    let middleImages = document.querySelectorAll('.middle')
    if (bet >= playersCredit) {
        playersCredit = 0
        credit.innerText = playersCredit
        alert('Sorry Pal you Run out of Cash. The Game Is Over!')
        return
    } else if (middleImages[0].src === middleImages[1].src && middleImages[1].src == middleImages[2].src) {
        playersCredit += bet * 10
        credit.innerText = playersCredit
    } else {

        playersCredit -= bet
        credit.innerText = playersCredit
    }
}
