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

let num1 = '';
let num2 = '';
let numsHolder = '';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const topDisplay = document.querySelector('#top');

numbers.forEach(number => {
  const val = number.textContent;
  number.addEventListener('click', populate.bind(this, val));
});

operators.forEach(operator => {
  const val = ' '+operator.textContent+' ';
  operator.addEventListener('click', () => {
    const span = document.createElement('span');
    span.style.color = 'rgb(8, 124, 201)';
    span.textContent = val;
    topDisplay.appendChild(span);
  });
});

function populate(val) {
  numsHolder += val;
  const span = document.createElement('span');
  span.textContent = val;
  topDisplay.appendChild(span);
  //topDisplay.textContent += numsHolder;
  console.log(val);
}

console.log(operate('div', 4,8));