let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

let live_field = document.createElement('div');
field.appendChild(live_field);
live_field.classList.add('live_field');

let block;
for(let i = 0; i < 5; i++) {
    block = document.createElement('div');
    live_field.appendChild(block);
    block.classList.add('block');
}

block = document.getElementsByClassName('block');

//Делаем шарик

let round = document.createElement('div');
live_field.appendChild(round);
round.classList.add('round');

round = document.addEventListener('div');

let RoundStyle = getComputedStyle(round);

let start = Date.now();
const FPS = 50;
let O = 0;

let n = 100000000;
for(let i = 0; i < n; i++){
        O += i;
    }

function move() {
    
    function go() {
        round.style.left = O/5 + "px";
    }
}

const INTERVAL = setInterval(move, FPS);