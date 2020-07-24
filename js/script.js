function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch(operator){
        case 'add':
          return add(num1, num2);
          break;
        case 'sub':
          return subtract(num1, num2);
          break;
        case 'mul':
          return multiply(num1, num2);
          break;
        case 'div':
          return divide(num1, num2);
          break;
        default:
          throw new Error('Invalid operator');   
    }
}

let num1 = 0;
let num2 = 0;

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    console.log(number.textContent);
  });
});


function populate() {

}

console.log(operate('div', 4,8));