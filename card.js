const gameContainer = document.getElementById('game');
const section = document.querySelector('.container');
const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];
const resetButton = document.querySelector('#reset');
const startButton = document.querySelector('#start-game');
let score = document.querySelector('#score');
let shuffledColors = shuffle(COLORS);
let noClicking = false;
let clickedCard1 = '';
let clickedCard2 = '';
let counter = 0;
let myScore = 0;

//reset button functionality
resetButton.addEventListener('click', () => {
	location.reload();
});
//start button functionality
startButton.addEventListener('click', () => {
	gameContainer.innerHTML = '';
	createDivsForColors(shuffledColors);
	startButton.classList.add('no-click');
});
//starter code
function shuffle(array) {
	let counter = array.length;
	while (counter > 0) {
		let index = Math.floor(Math.random() * counter);
		counter--;
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}
//edited starter code for my card flippy divs
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		const card = createCard();
		cardBack = card.lastElementChild;
		cardBack.classList.add(color);
		card.addEventListener('click', handleCardClick);
		gameContainer.append(card);
	}
}
//create the card flippy divs... there's probably a less complicated way of doing this?
function createCard() {
	const card = document.createElement('div');
	card.classList.add('card');
	const top = document.createElement('div');
	top.classList.add('top');
	top.classList.add('front');
	card.append(top);
	const bottom = document.createElement('div');
	bottom.classList.add('top');
	bottom.classList.add('back');
	card.append(bottom);
	return card;
}
//function to provide message upon winning
function winner() {
	let congrats = document.createElement('h1');
	congrats.classList.add('colorful');
	congrats.innerText = 'YOU DID IT!';
	return congrats;
};
//checks for same color; if same, clickedCard values reset to empty string, eventListener removed.
//if different, cards flipped, clickedCard values reset
function colorCheck() {
	if (clickedCard1.lastElementChild.className != clickedCard2.lastElementChild.className) {
		setTimeout(() => {
			clickedCard1.classList.toggle('flipped');
			clickedCard2.classList.toggle('flipped');
			clickedCard1 = '';
			clickedCard2 = '';
			noClicking = false;
		}, 1000);
	} else {
		clickedCard1.removeEventListener('click', handleCardClick);
		clickedCard2.removeEventListener('click', handleCardClick);
		counter += 2;
		console.log(counter);
		clickedCard1 = '';
		clickedCard2 = '';
		noClicking = false;
		if (counter === COLORS.length) {
			console.log('nice');
			let congrats = winner();
			score.innerText = '';
			score.append(congrats);
		}
	}
}
//compare card trackers
function handleCardClick(e) {
	let myCard = e.target.parentElement;
	myScore++;
	score.innerText = myScore;
	if (noClicking) return;
	if (myCard.classList.contains('flipped')) {
		return;
	}
	if (!clickedCard1) {
		myCard.classList.toggle('flipped');
		clickedCard1 = myCard;
	} else if (!clickedCard2) {
		myCard.classList.toggle('flipped');
		clickedCard2 = myCard;
	}
	if (clickedCard1 && clickedCard2) {
		noClicking = true;
		colorCheck();
	}
}


//BELOW: the...attempts.

//to prevent excessive clicking
//...I could not get this solution to work. Went with boolean variable from solution code.
// function noClick() {
// 	const cards = document.querySelectorAll('.top');
// 	for (let card of cards) {
// 		card.classList.add('no-click');
// 	}
// }

// function click() {
// 	const cards = document.querySelectorAll('.top');
// 	for (let card of cards) {
// 		card.classList.remove('no-click');
// 	}
// }

//FIRST ATTEMPT: handleCardClick function
//have counter = 0; when counter reaches 2, call function to compare the 2 cards with class = 'flipped'
//this is very janky... let's try again.

// let num = 0;
// function handleCardClick(e) {
// 	let myCard = e.target.parentElement;
// 	if (myCard.classList.contains('flipped')) {
// 		return;
// 	}
// 	if (num === 0) {
// 		myCard.classList.toggle('flipped');
// 		num++;
// 		console.log(num);
// 	} else if (num === 1) {
// 		myCard.classList.toggle('flipped');
// 		num++;
// 		console.log(num);
// 	}
// 	if (num === 2) {
// 		colorCheck();
// 	}
// }

// function colorCheck() {
// 	let flippedCards = document.querySelectorAll('.flipped');
// 	let cards = [];
// 	flippedCards.forEach((flippedCard) => {
// 		cards.push(flippedCard);
// 	});
// 	if (cards[0].lastElementChild.className != cards[1].lastElementChild.className) {
// 		setTimeout(() => {
// 			cards[0].classList.toggle('flipped');
// 			cards[1].classList.toggle('flipped');
// 			num = 0;
// 			cards = [];
// 		}, 1000);
// 	} else {
// 		cards[0].removeEventListener('click', handleCardClick);
// 		cards[1].removeEventListener('click', handleCardClick);
// 		num = 0;
// 		cards = [];
// 	}
// }
