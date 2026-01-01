// class FibonacciSearch{

// }

const arr = [1, 4, 7, 9, 10, 15, 21, 26, 32, 48];
const len = arr.length;
const target = 26;

let fibM2 = 0;
let fibM1 = 1;
let fibM = fibM2 + fibM1;

while (fibM < len) {
  fibM2 = fibM1;
  fibM1 = fibM;
  fibM = fibM1 + fibM2;
}

let offset = -1;

while (fibM > 1) {
  let i = Math.min(offset + fibM2, len - 1);

  if (arr[i] === target) {
    console.log("FOUND AT INDEX:", i);
  }

  if (arr[i] < target) {
    fibM = fibM1;
    fibM1 = fibM2;
    fibM2 = fibM - fibM1;
    offset = i;
  } else {
    fibM = fibM2;
    fibM1 = fibM1 - fibM2;
    fibM2 = fibM - fibM1;
  }
}

console.log(fibM2, fibM1, fibM);
