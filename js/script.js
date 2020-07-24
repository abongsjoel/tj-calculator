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
let numString = '';
const valHolder = [];

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const topDisplay = document.querySelector('#top');

numbers.forEach(number => {
  const val = number.textContent;
  number.addEventListener('click', populate.bind(this, val));
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    let val = '';
    if(numString !== ''){   // Do nothing when we start by clicking on an operator
      val = operator.textContent;   
    } 
    populate(val);
  });
});

function populate(val) {
  const span = document.createElement('span');
  if(!isNaN(Number(val))){    //Its a number
    numString += val; 
  } else {
    span.style.color = 'rgb(8, 124, 201)';
    val = ' '+val+' ';
  }
  span.textContent = val;
  topDisplay.appendChild(span);
  console.log("Value of numstring",numString);
}

console.log(operate('div', 4,8));