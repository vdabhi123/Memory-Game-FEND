/*
 * Create a list that holds all of your cards
 */

const icons = ["fa fa-diamond","fa fa-diamond",
"fa fa-paper-plane-o","fa fa-paper-plane-o",
"fa fa-anchor","fa fa-anchor",
"fa fa-bolt","fa fa-bolt",
"fa fa-cube","fa fa-cube",
"fa fa-leaf","fa fa-leaf",
"fa fa-bicycle","fa fa-bicycle",
"fa fa-bomb","fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");
let openedCards = [];
let matchedCards = [];

// Function to initialize the Game
function init(){

// Create the Cards
 
for(i = 0;i < icons.length; i++){
    const card = document.createElement("li"); 
    card.classList.add("card");
    card.innerHTML =`<i class="${icons[i]}"</i>`;
    cardsContainer.appendChild(card);

    // Add Clicl Event to each card
    click(card);
}
}

function click(card){
    // Card Click Event
    card.addEventListener('click', function(){

        const currentCard = this;
        const previousCard = openedCards[0];
        // console.log(card.innerHTML);
        // flipping and show the hidden figure

        if(openedCards.length === 1){   

            card.classList.add("open","show","disabled");
            openedCards.push(this);

            
            // Comparing the 2 Open Cards
            if(currentCard.innerHTML === previousCard.innerHTML){

                console.log("Matched!"); 
                
                // on Match Color Change

                currentCard.classList.add("match");
                previousCard.classList.add("match");

                // Pushing matched value in matched Array
                matchedCards.push(currentCard,previousCard);
                openedCards = [];
                IsOver();

            }else{
             //If card dont match theey flash in very fast, hence a delay is needed
             setTimeout(function() {
                currentCard.classList.remove("open","show","disabled");
                previousCard.classList.remove("open","show","disabled");
                console.log("Doesnt Match! Try Again");
            }, 500);

                openedCards = [];

            }
        }else{
            card.classList.add("open","show","disabled");
            openedCards.push(this);
        }

        // Add new move
        addMoves();
        moves++;
    });
}


// Game Over Method

    function IsOver(){
         if(matchedCards.length === icons.length){
             console.log("Voila !!! Game Over")
             alert("Voila !!! Game Over")
         }
    }
// Add Moves
function addMoves(){
    let moves = 0;
    function addMoves(){
        moves++;  
    }



// Restart Button
const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click',function(){
        // Delete all Cards
        cardsContainer.innerHTML = "";

        // Call Init to create New Cards
        init();

        // Reset any realted variables
        matchedCards = [];
    });
}
// Initializing the game first Time:

init(); 












/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}






/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */