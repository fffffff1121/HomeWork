let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

let live_field = document.createElement('div');
field.appendChild(live_field);
live_field.classList.add('live_field');

let low_field = document.createElement('div');
document.body.appendChild(low_field);
low_field.classList.add('lowField');

let div_with_blocks;
let block;
block = document.getElementsByClassName('block');

for(let i = 0; i < 3; i++) {
    div_with_blocks = document.createElement('div');
    live_field.appendChild(div_with_blocks);
    div_with_blocks.classList.add('divBlocks');
    for(let q = 0; q < 5; q++) {
        block = document.createElement('div');
        div_with_blocks.appendChild(block);
        block.classList.add('block');
    }
}

let round = document.createElement('div');
live_field.appendChild(round);
round.classList.add('round');

let platform = document.createElement('div');
live_field.appendChild(platform);
platform.classList.add('platform');

let left = document.createElement('div');
platform.appendChild(left);
left.classList.add('leftPlatform');

let right = document.createElement('div');
platform.appendChild(right);
right.classList.add('rightPlatform');

let direction = 'right';

function move() {


}

const FPS = 60;
const INTERVAL = setInterval(move, FPS);

let platformClass = getComputedStyle(platform);

addEventListener('keydown' , function key(e) {

    if(e.keyCode == 37 ) {
        direction = 'left';
        platformClass.left = '1%';
    }
    if(e.keyCode == 39 ) {
        direction = 'right';
        platformClass.left = '67%';
    }

});
