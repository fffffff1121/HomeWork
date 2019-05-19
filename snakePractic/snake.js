var field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

var x = 1,
	y = 10;

for (let i = 0; i < 100; i++) {
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

//Create snake

var coordinates = createRandCoordinates(10, 3, 10, 1);;
console.log(coordinates);

var snakeBody = [setCoordinates(coordinates[0], coordinates[1]),
	setCoordinates(`${coordinates[0] - 1}`, coordinates[1]),
	setCoordinates(`${coordinates[0] - 2}`, coordinates[1])
];
console.log(snakeBody);
snakeBody.forEach(function(currentValue, index) {
	snakeBody[index].classList.add('snakeBody');
});
snakeBody[0].classList.add('snakeHead');

createApple();

let moveTo = 'right';



function move() {
	var snakeCoordinates = [snakeBody[0].getAttribute("px"), snakeBody[0].getAttribute("py")];
	snakeBody[0].classList.remove('snakeHead');
	snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
	snakeBody.pop();

	
	
	if (moveTo == 'right') {
		if (snakeCoordinates[0] < 10) {
		    snakeBody.unshift(setCoordinates(`${+snakeCoordinates[0] + 1}`, snakeCoordinates[1]));
		} else {
			snakeBody.unshift(setCoordinates(1, snakeCoordinates[1]));
		}
	}
	if (moveTo == 'left') {
		if (snakeCoordinates[0] > 1) {
      snakeBody.unshift(setCoordinates(`${+snakeCoordinates[0] - 1}`, snakeCoordinates[1]));
    } else {
      snakeBody.unshift(setCoordinates(10, snakeCoordinates[1]));
    }
	}
	if (moveTo == 'up') {
		if (snakeCoordinates[1] < 10) {
			snakeBody.unshift(setCoordinates(snakeCoordinates[0], `${+snakeCoordinates[1] + 1}`));
		} else {
			snakeBody.unshift(setCoordinates(snakeCoordinates[0], 1));
		}
	}
	if (moveTo == 'down') {
		if (snakeCoordinates[1] > 1) {
			snakeBody.unshift(setCoordinates(snakeCoordinates[0], `${snakeCoordinates[1] - 1}`));
		} else {
			snakeBody.unshift(setCoordinates(snakeCoordinates[0], 10));
		}
	}

	
	
	for (i = 1; i < snakeBody.length; i++) {
		if (snakeBody[i].classList.contains('apple')) {
			snakeBody[i].classList.remove('apple');
			createApple();
			break;
		}
	}

	if (snakeBody[0].classList.contains('apple')) {
		snakeBody[0].classList.remove('apple');
		snakeBody.push(setCoordinates(snakeCoordinates[0], snakeCoordinates[1]));
		snakeBody[snakeBody.length - 1].classList.add('snakeBody');
		createApple();
	}

	var field = document.getElementsByClassName('field');

	if (snakeBody[0].classList.contains('snakeBody')) {
		clearInterval(interval);

		field[0].parentNode.removeChild(field[0]);

		var lose = document.createElement('h1');
		document.body.appendChild(lose);
		lose.classList.add('lose');
		document.querySelector('.lose').innerHTML = 'You lose!';

		var time = setTimeout(function() {

			window.location.reload();

		}, 1500)


	}

	snakeBody.forEach(function(currentValue, index) {
		snakeBody[index].classList.add('snakeBody');
	});

	snakeBody[0].classList.add('snakeHead');

}

var interval = setInterval(move, 150);

//Key

document.addEventListener("keydown", function key(e) {
	if (e.keyCode == 87 && moveTo != 'down') {
		moveTo = 'up';
	}
	if (e.keyCode == 83 && moveTo != 'up') {
		moveTo = 'down';
	}
	if (e.keyCode == 65 && moveTo != 'right') {
		moveTo = 'left';
	}
	if (e.keyCode == 68 && moveTo != 'left') {
		moveTo = 'right';
	}
});


//Fucntion

function setCoordinates(px, py) {
	return document.querySelector('[px = "' + px + '"][py = "' + py + '"]');
}

function randNum(min, max) {
	return (Math.floor(Math.random() * (max - min) + min));
}

function createRandCoordinates(max_1, min_1, max_2, min_2) {
	var px = randNum(max_1, min_1);
	var py = randNum(max_2, min_2);
	return [px, py];
}

function createApple() {
	var appleCoordinates = createRandCoordinates(10, 1, 10, 1);
	var apple = setCoordinates(appleCoordinates[0], appleCoordinates[1]);
	console.log(apple);
	apple.classList.add('apple');
}
