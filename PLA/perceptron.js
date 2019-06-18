//  Perceptron Learning Algorithm  -
//  PLA
//  11.06.2019

//  Create array with random numbers , from 0 to 1

let array = [[0, 1, 1],
             [1, 1, 0],
             [0, 0, 1]];

// Create 3 random weight , from -1 to 1

let w1 = Math.floor(-1 + Math.random() * (1 + 1 - (-1)));
let w2 = Math.floor(-1 + Math.random() * (1 + 1 - (-1)));
let w3 = Math.floor(-1 + Math.random() * (1 + 1 - (-1)));

let array_weigth = [w1, w2, w3];

let xw1 = (array[0][0] +  array[0][1] +  array[0][2]) * w1;
let xw2 = (array[1][0] +  array[1][1] +  array[1][2]) * w2;
let xw3 = (array[2][0] +  array[2][1] +  array[2][2]) * w3;

let y;

if( (xw1 * xw2 * xw3) >= 0 ){
    y = 1;
}else{
    y = 0;
}

console.log(xw1);
console.log(xw2);
console.log(xw3);

console.log(y);