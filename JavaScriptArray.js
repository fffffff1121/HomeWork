function sortMinToMax(a, b) {
	return a - b;
}

var arr_1 = [2, 6, 4, 9];
var arr_2 = [7, 4, 2, 10];
var arr_3 = [99, 1, 3, 5];

var arr_4 = ["Nice", "Click"];
var arr_5 = ["GG", "Coder"];
var arr_6 = ["This", "Is", "Array"];


var arrWithNum = [arr_1, arr_2, arr_3];

var arrWithLetter = [arr_4, arr_5, arr_6]

function readArr(arr) {

	arr.forEach(function(item, i) {
		if (!isNaN(arr[i][i])) {
			arr[i].sort(sortMinToMax);
		}
		document.write(item + "<br/>");
	});



}

readArr(arrWithNum);

readArr(arrWithLetter);