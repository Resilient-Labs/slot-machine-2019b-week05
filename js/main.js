let money = Number(document.querySelector("h1").innerText)
console.log(money)
let list = ['cat', 'wolf', 'giraffe', 'lion', 'squirrel']


document.querySelectorAll(".bet").forEach(x => x.addEventListener('click', (e) => {
    if (money < 5) {
        alert('You Lost!')
    }
    else {
        let bet = 0
        e.target.id == 'bet5' ? bet = 5 : bet = 50
        let div1 = document.querySelector("#pic1")
        let div2 = document.querySelector("#pic2")
        let div3 = document.querySelector("#pic3")

        div1.className = list[Math.floor(Math.random() * 5)]
        div2.className = list[Math.floor(Math.random() * 5)]
        div3.className = list[Math.floor(Math.random() * 5)]

        if (div1.className == div2.className && div1.className == div3.className && div1.className == div3.className) {
            money += bet * 10
            document.querySelector('h1').innerText = money
            alert('JACKPOTTT')
        }
        else {
            money -= bet
            document.querySelector('h1').innerText = money
        }
    }
}))
