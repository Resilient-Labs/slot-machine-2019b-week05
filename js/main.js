// total money var
let total = 1000
// event min

document.querySelectorAll('button').forEach(e => e.addEventListener('click', checkForWin))


// if(checkForWin = true){
//     return total +=  5
// } else{
//     return total -=  5
// }
//     //checkforwin
//     //if(won)
//         //addmoneytotal
//     //else
//         //removemoneytotoal
//     //updatedom
// //event max


// if(checkForWin = true){
//     return total += 10
// } else{
//     return total -= 10
// }
//     //checkforwin
//     //if(won)
//         //addmoneytotal
//     //else
//         //removemoneytotoal
//     //updatedom

// checkforwin
function checkForWin() {
    let left = spin()
    let middle = spin()
    let right = spin()
    let betamount = parseFloat(this.getAttribute('data-bet'))
    document.getElementById('left').style.backgroundImage = left
    document.getElementById('middle').style.backgroundImage = middle
    document.getElementById('right').style.backgroundImage = right
    if (left == middle && middle == right) {
        total += betamount
        document.getElementById('results').innerHTML = total
        document.getElementById('winner').innerHTML = 'Winner!'
} else {
    total -= betamount
    document.getElementById('results').innerHTML = total
    document.getElementById('winner').innerHTML = 'Loser!'
}
console.log(left);
console.log(middle);
console.log(right);
}
function spin(){
    let result = Math.ceil(Math.random() * 3)
    
	if(result<=1){
		return  'url(images/cherry.jpg)'
	}
	else if(result<=2){
		return 'url(images/bar.png';
	} else{
        return 'url(images/seven.jpg'
    }

}

