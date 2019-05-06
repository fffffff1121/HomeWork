var arr = [
	[1, 3, 6],
	[1, 4, 2]
];

function readArr(arr) {

	var arrWithNum = [];

	arr.forEach(function(item, i) {

		arrWithNum.push(arr[i]);

    

	});

		
 document.write(arrWithNum);
	
}

function sortMintoMax(a, b) {

	return a - b;

}

readArr(arr);