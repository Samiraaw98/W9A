// when user click h1 tag the color will turn orange
function makeOrange (eventDetails){
    console.log(eventDetails);
    test.style.color="orange"; 
}

// nav fonts will become cursive when user hovers over it 
function hoverNav (eventDetails){
    console.log(eventDetails);
    nav.style.fontFamily = "cursive";
}

function keyboardPressed(e){
    console.log(e);
}




// code starts
let test = document.getElementById('main');
test.addEventListener('click' , makeOrange);

let nav = document.getElementById("test");
nav.addEventListener('mouseover' , hoverNav);

let page = document.getElementById('press')
document.body.addEventListener('keypress', keyboardPressed);
