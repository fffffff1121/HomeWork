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

var coordinates = createCoordinates();
console.log(coordinates);

var snakeBody = [document.querySelector('[px = "' + coordinates[0] + '"][py = "' + coordinates[1] + '"]'),
	document.querySelector('[px = "' + (coordinates[0] - 1) + '"][py = "' + coordinates[1] + '"]'),
	document.querySelector('[px = "' + (coordinates[0] - 2) + '"][py = "' + coordinates[1] + '"]')
];
console.log(snakeBody);
for (i = 0; i < snakeBody.length; i++) {
	snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('snakeHead');

var moveTo = 'right';

function move() {
	var snakeCoordinates = [snakeBody[0].getAttribute("px"), snakeBody[0].getAttribute("py")];
	snakeBody[0].classList.remove('snakeHead');
	snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
	snakeBody.pop();

	if (moveTo == 'right') {
		if (snakeCoordinates[0] < 10) {
			snakeBody.unshift(document.querySelector('[px = "' + (+snakeCoordinates[0] + 1) + '"][py = "' + snakeCoordinates[1] + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "1"][py = "' + snakeCoordinates[1] + '"]'));
		}
	}
	if (moveTo == 'left') {
		if (snakeCoordinates[0] > 1) {
			snakeBody.unshift(document.querySelector('[px = "' + (+snakeCoordinates[0] - 1) + '"][py = "' + snakeCoordinates[1] + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "10"][py = "' + snakeCoordinates[1] + '"]'));
		}
	}
	if (moveTo == 'up') {
		if (snakeCoordinates[1] < 10) {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "' + (+snakeCoordinates[1] + 1) + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "1"]'));
		}
	}
	if (moveTo == 'down') {
		if (snakeCoordinates[1] > 1) {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "' + (+snakeCoordinates[1] - 1) + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "10"]'));
		}
	}

    

	for (var i = 0; i < snakeBody.length; i++) {
		snakeBody[i].classList.add('snakeBody');
	}
	snakeBody[0].classList.add('snakeHead');


}



var interval = setInterval(move, 150);

//Нажатие клавиш

document.addEventListener("keydown", function key(e) {
	if (e.keyCode == 87 && moveTo != 'down') {
		moveTo = 'up';
		console.log(true);
	} else if (e.keyCode == 83 && moveTo != 'up') {
		moveTo = 'down';
		console.log(true);
	} else if (e.keyCode == 65 && moveTo != 'right') {
		moveTo = 'left';
		console.log(true);
	} else if (e.keyCode == 68 && moveTo != 'left') {
		moveTo = 'right';
		console.log(true);
	}
});

//создание яблока

function createApple() {
	function coordinatesApple() {
		var px = (Math.floor(Math.random() * (10 - 1) + 1));
		var py = (Math.floor(Math.random() * (10 - 1) + 1));
		return [px, py];
	}
	var appleCoordinates = coordinatesApple();
	var apple = document.querySelector('[px = "' + appleCoordinates[0] + '"][py = "' + appleCoordinates[1] + '"]');
	console.log(apple);
    apple.classList.add('apple');
}
createApple();