function sortMin(a, b) {

  return a - b;

}

function sortMax(a, b) {

  return b - a;

}

var arrBitcoins = [11, 9, 3, 8];

var priceBitcoin = 0;

function getArray(arr) {

  var minNumber = 0;
  var maxNumber = 0;

  arr.sort(sortMin);
  minNumber = arr[0];
  arr.sort(sortMax);
  maxNumber = arr[0];

  priceBitcoin = maxNumber - minNumber;
  
  return priceBitcoin;

}

document.write(getArray(arrBitcoins));