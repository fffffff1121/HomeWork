var arrBitcoins = [20, 3, 8];

var priceBitcoin = 0;

function getArray(arr) {

	var minNumber = Math.min.apply(Math, arr);
	var maxNumber = Math.max.apply(Math, arr);
	return priceBitcoin = maxNumber - minNumber;

}

document.write(getArray(arrBitcoins));