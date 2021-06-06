var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");


function loadFlip() {
    flip(card1);
    setTimeout(flip, 500, card2);
    setTimeout(flip, 1000, card3);
}

function flip(cardNum) {
    cardNum.style.transform = 'rotateY(180deg)';
}