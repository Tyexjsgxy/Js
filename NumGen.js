const num1 = Math.floor(Math.random() * 100) + 10;// here the numbers get generated
const num2 = Math.floor(Math.random() * 100) + 10;
const num3 = Math.floor(Math.random() * 100) + 10;
const num4 = Math.floor(Math.random() * 100) + 10;
const num5 = Math.floor(Math.random() * 100) + 10;
const num6 = Math.floor(Math.random() * 100) + 10;
const num7 = Math.floor(Math.random() * 100) + 10;
const num8 = Math.floor(Math.random() * 100) + 10;


const result = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num1 * num2 * num3  // HERE THE NUMBERS GOT MULTIPLY TO GET A BIGGER NUMBER
let result2 = result * Math.floor(Math.random() * 10) + 1; 

if (result2 < 10000) { // here checks if the number is to small
  let result2 = result2 * 100;
}

else { // here the number is sent to the terminal
  console.log(result2)
}