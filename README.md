# Memory-Game
Springboard Memory Game Exercise

Press START to play.
(START begins the program).
This program creates a series of cards which, when clicked, reveal a color. 
Match all color pairs to win.
Press RETRY to try again.
(RETRY refreshes the page).

Functionality:

-app.js (runs program)
-header.js (changes color of .colorful elements)
-style.css (needed for card flip animation, etc)
-index.html (displays program)

1. createCard() creates a CARD (div with two div children that flip to reveal colors)
2. createDivsForColors() calls createCard() and creates 10 CARDS with colors from the shuffledColors array.
3. handleCardClick() keeps track of up to two clicked cards, flips them, and compares them using colorCheck(). If the two cards are the same color, they stay flipped and cannot be clicked again. If they are not, they turn back over.
4. When all cards are flipped, game over; winner() creates a special message for you.
