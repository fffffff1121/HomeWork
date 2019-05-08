var arr = [
	[1, 3, 6],
	[1, 4, 2]
];

function readArr(arr) {

	var arrWithNum = [];

	arr.forEach(function(item, i) {
 
    arrWithNum.push(...item);  

	});

 //До sort() , arrWithNum = 1,3,6,1,4,2

 arrWithNum.sort(sortMintoMax);

 //После , тоже самое - 1,3,6,1,4,2

 document.write(arrWithNum);
	
}

function sortMintoMax(a, b) {

	return a - b;

}

readArr(arr); // 1,3,6,1,4,2