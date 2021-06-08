var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");


function loadFlip() {
    setTimeout(flip, 500, card1);
    setTimeout(flip, 1000, card2);
    setTimeout(flip, 1500, card3);
}

function flip(cardNum) {
    cardNum.style.transform = 'rotateY(180deg)';
}