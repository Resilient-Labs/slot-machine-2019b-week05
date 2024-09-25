// Slot machine with 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost.
// Min bet does $5 and Max bet does $50.

// Start with $1000.

// Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// !money variables
let total = 1000;
const maxBet = 50;
const minBet = 5;
let winnings = document.querySelector('.winnings');

// !event for min bet
const betMin = document.querySelector('.minBet');
betMin.addEventListener('click', winResult);

// !event for max bet
const betMax = document.querySelector('.maxBet');
betMax.addEventListener('click', winResult);

const reelLeft = document.querySelector('.reelLeft');
const reelMid = document.querySelector('.reelMid');
const reelRight = document.querySelector('.reelRight');

const reel = document.querySelectorAll('.reel');

// !flashiness
function flash() {
	Array.from(reel).forEach(el => {
		el.classList.toggle('flashDelay');
	});
}
function removeFlash() {
	Array.from(reel).forEach(el => {
		el.classList.remove('flashDelay');
	});
}

// !win results
function winResult(e) {
	const bet = e.target.value;
	const result = checkForWin(bet);
	Array.from(reel).forEach(el => {
		el.classList.remove('loser');
		el.classList.remove('winner');
	});
	if (result === true) {
		total += bet * 10;
		setTimeout(() => {
			totalUpdate(total);
		}, 2900);
		flash();
		setTimeout(() => {
			displayWin();
		}, 2900);

		console.log(`${total} you won!`);
	} else {
		total -= bet;

		setTimeout(() => {
			totalUpdate(total);
		}, 2900);
		flash();
		setTimeout(() => {
			displayLose();
		}, 2900);

		console.log(`${total} you lost!`);
	}
}

// !check for win
function checkForWin() {
	const reelOne = Math.ceil(Math.random() * 5);
	const reelTwo = Math.ceil(Math.random() * 5);
	const reelThree = Math.ceil(Math.random() * 5);

	if (reelOne === reelTwo && reelTwo === reelThree) {
		return true;
	} else {
		return false;
	}
}

// !display wins or loss
function displayWin() {
	flash();

	Array.from(reel).forEach(el => {
		el.classList.remove('loser');
		el.classList.add('winner');
		console.log('winner');
	});

	console.log('yyoo');
}

function displayLose() {
	flash();
	Array.from(reel).forEach(el => {
		if (el.classList.contains('winner') === true) {
			Array.from(reel).forEach(el => {
				el.classList.replace('winner', 'loser');
				console.log('hi');
			});
		} else {
			el.classList.add('loser');
		}

		console.log('bye');
		// el.style.background = "url('../img/winner.png')";
	});
	console.log('yo');
}

// !update total in dom
function totalUpdate(total) {
	if (total > 0) {
		winnings.innerText = total;
	} else {
		winnings.innerText = 0;
		betMin.disabled = true;
		betMax.disabled = true;
	}
}
