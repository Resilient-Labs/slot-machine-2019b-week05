
// i worked on this with my two kings leonard constant and joshua findlay

let images = ['kuromi2.jpg', 'mymelody3.jpg', 'hellokitty3.jpg', 'purin.jpg', 'pochacco2.jpg']

// pochacco...the only one who moves...idk why...i saved as a jpg instead of gif...

document.querySelector('.spin').addEventListener('click', ()=>{
    console.log(document.querySelector('#bet').value)
    if (document.querySelector('#bet').value > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }
    else if (document.querySelector('#bet').value === '') {
        alert('You need to put in a bet')
    }

    else {
        let bets = document.querySelector('#bet').value;
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.reel1').src = images[randomChoice1]
        document.querySelector('.reel2').src = images[randomChoice2]
        document.querySelector('.reel3').src = images[randomChoice3]

        if ((document.querySelector('.reel1').src === document.querySelector('.reel2').src) && (document.querySelector('.reel2').src === document.querySelector('.reel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }

    
})


document.querySelector('.minbet').addEventListener('click', ()=>{
    console.log(document.querySelector('#bet').value)
    if (10 > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }

    else {
        let bets = 10;
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.reel1').src = images[randomChoice1]
        document.querySelector('.reel2').src = images[randomChoice2]
        document.querySelector('.reel3').src = images[randomChoice3]

        if ((document.querySelector('.reel1').src === document.querySelector('.reel2').src) && (document.querySelector('.reel2').src === document.querySelector('.reel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }

    
})

document.querySelector('.maxbet').addEventListener('click', ()=>{
    console.log(document.querySelector('#bet').value)
    if (500 > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }

    else {
        let bets = 500;
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.reel1').src = images[randomChoice1]
        document.querySelector('.reel2').src = images[randomChoice2]
        document.querySelector('.reel3').src = images[randomChoice3]

        if ((document.querySelector('.reel1').src === document.querySelector('.reel2').src) && (document.querySelector('.reel2').src === document.querySelector('.reel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }

    
})