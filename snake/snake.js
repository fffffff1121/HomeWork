var field = document.createElement('div'); //Создаем поле для змейки
document.body.appendChild(field); //Вносим поле в body         
field.classList.add('field'); //Добавляем класс field для поля 

for (var i = 0; i < 100; i++) {
	var element = document.createElement('div'); //Создаем 100 блоков с помощью цикла
	field.appendChild(element); //Вносим все 100 блоков в блок field(поле)
	element.classList.add('element'); //Добавляем класс для блока
}

var element = document.getElementsByClassName('element'); //Просмотр и нахождение блоков для дальнейшей работы с ними

var x = 1, //Координата ячейки по горизонтали
	y = 10; //Координата ячейки по вертикали(рядам)

for (var i = 0; i < element.length; i++) {
	element[i].setAttribute('px', x); //Устанавливаем атрибут x для ячейки с помощью цикла
	element[i].setAttribute('py', y); //Устанавливаем атрибут y для ячейки с помощью цикла
	x++;
	if (x > 10) {
		x = 1; //Каждый новый ряд обновляет ячейки по горизонтали 
		y--; //Уменьшение значения ячейки по вертикали(ряду)
	}
}

function generateSnake() {

	var px = Math.round(Math.random() * (10 - 3) + 3); //Генерация случайного числа для PosX
	var py = Math.round(Math.random() * (10 - 1) + 1); //Генерация случайного числа для PosY

	return [px, py]; //Возращает массив из двух координат px и py
}

var coordinatXY = generateSnake(); //Переменная с массивом , [x, y]

console.log(coordinatXY); //Проверка координат

var snakeBody = [document.querySelector('[px = "' + coordinatXY[0] + '"][py = "' + coordinatXY[1] + '"]'),
	document.querySelector('[px = "' + (coordinatXY[0] - 1) + '"][py = "' + coordinatXY[1] + '"]'),
	document.querySelector('[px = "' + (coordinatXY[0] - 2) + '"][py = "' + coordinatXY[1] + '"]')
];

console.log(snakeBody); //Сверяем координаты ячейки с координатами coordinatXY

for (var i = 0; i < snakeBody.length; i++) {

	snakeBody[i].classList.add('snakeBody'); //Для каждого элемента массива с телом змеи , добавляем класс snakeBody

}

snakeBody[0].classList.add('snakeHead'); //Для головы змеи добаляем отдельный класс snakeHead

var apple;

function createApple() {
	function generateApple() {
		var px = Math.round(Math.random() * (10 - 3) + 3); //Генерация случайного числа для PosX
		var py = Math.round(Math.random() * (10 - 1) + 1); //Генерация случайного числа для PosY
		return [px, py]; //Случайные координаты для яблок
	}

	var appleXY = generateApple(); //Генерируем координаты для яблока в переменную appleXY

	apple = document.querySelector('[px = "' + appleXY[0] + '"][py = "' + appleXY[1] + '"]');
	//Создаем ячейку для яблока с отдельными координатами на поле 

	while (apple.classList.contains('snakeBody')) { //Если координаты яблока и координаты змеи совпадают , сгенирировать новые

		var appleXY = generateApple();

		apple = document.querySelector('[px = "' + appleXY[0] + '"][py = "' + appleXY[1] + '"]');

	}

	apple.classList.add('apple'); //Создание класса для яблока
}

createApple();

var direction = "right";
var steps = false;

function move() {
	var snakeCoordinates = [snakeBody[0].getAttribute("px"), snakeBody[0].getAttribute("py")]; //Создаем массив с координатами змеи
	snakeBody[0].classList.remove('snakeHead'); //Удаляем класс head из тела змеи
	snakeBody[snakeBody.length - 1].classList.remove('snakeBody'); //Удаляем класс из последнего элемента массива
	snakeBody.pop(); //Удаляем последний элементы(кусок змеи) из массива вовсе

	if (direction == 'right') {
		if (snakeCoordinates[0] < 10) {
			snakeBody.unshift(document.querySelector('[px = "' + (+snakeCoordinates[0] + 1) + '"][py = "' + snakeCoordinates[1] + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "1"][py = "' + snakeCoordinates[1] + '"]'));
		}
	} else if (direction == 'left') {
		if (snakeCoordinates[0] > 1) {
			snakeBody.unshift(document.querySelector('[px = "' + (+snakeCoordinates[0] - 1) + '"][py = "' + snakeCoordinates[1] + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "10" ][py = "' + snakeCoordinates[1] + '"]'));
		}
	} else if (direction == 'up') {
		if (snakeCoordinates[1] < 10) {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "' + (+snakeCoordinates[1] + 1) + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '" ][py = "1"]'));
		}
	} else if (direction == 'down') {
		if (snakeCoordinates[1] > 1) {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '"][py = "' + (+snakeCoordinates[1] - 1) + '"]'));
		} else {
			snakeBody.unshift(document.querySelector('[px = "' + snakeCoordinates[0] + '" ][py = "10"]'));
		}
	}

    if(snakeBody[0].getAttribute('px') == apple.getAttribute('px') && snakeBody[0].getAttribute('py') == apple.getAttribute('py')) {

        apple.classList.remove('apple');
        var a = snakeBody[snakeBody.length - 1].getAttribute("px");
        var b = snakeBody[snakeBody.length - 1].getAttribute("py");
        snakeBody.push(document.querySelector('[px = "' + a + '"][py = "' + b + '"]'));
        createApple();
    }
    if(snakeBody[0].classList.contains('snakeBody')) {
    
        location.reload()

    }
	snakeBody[0].classList.add('head'); //Добавляем первому элементу массива класс head
	for (var i = 0; i < snakeBody.length; i++) {

		snakeBody[i].classList.add('snakeBody'); //Для каждого элемента массива с телом змеи , добавляем класс snakeBody

	}
	steps = true;
}

var IntervalMove = setInterval(move, 150);


window.addEventListener('keydown', function(e) {

    if(steps == true) {

		if (e.keyCode == 37 && direction != "right") {

			direction = "left";
			steps = false;

		} else if (e.keyCode == 38 && direction != "down") {

			direction = "up";
			steps = false;

		} else if (e.keyCode == 39 && direction != "left") {

			direction = "right";
			steps = false;

		} else if (e.keyCode == 40 && direction != "up") {

			direction = "down";
			steps = false;

		}
    }


});



