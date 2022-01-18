

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
