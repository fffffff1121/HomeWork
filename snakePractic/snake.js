//

var field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

var x = 1,
	y = 10;

for (var i = 0; i < 100; i++) {
	var block = document.createElement('div');
	field.appendChild(block);
	block.classList.add('block')
	block.setAttribute('px', x);
	block.setAttribute('py', y);
	x++;
	if (x > 10) {
		x = 1;
		y--;
	}
}

var block = block.getElementsByClassName('block');

//Создание змеи 

function createCoordinates() {
	var px = (Math.floor(Math.random() * (10 - 3) + 3));
	var py = (Math.floor(Math.random() * (10 - 1) + 1));
	return [px, py];
}

var Coordinates = createCoordinates();
console.log(Coordinates);

var snakeBody = [document.querySelector('[px = "' + Coordinates[0] + '"][py = "' + Coordinates[1] + '"]'),
	document.querySelector('[px = "' + (Coordinates[0] - 1) + '"][py = "' + Coordinates[1] + '"]'),
	document.querySelector('[px = "' + (Coordinates[0] - 2) + '"][py = "' + Coordinates[1] + '"]')
];
console.log(snakeBody);
for (i = 0; i < snakeBody.length; i++) {
	snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('sneakHead');

function move() {
	snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
	snakeBody.pop();


}

var interval = setInterval(move, 300);