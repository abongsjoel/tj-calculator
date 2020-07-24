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
        case '+':
          return add(num1, num2);
          break;
        case '-':
          return subtract(num1, num2);
          break;
        case 'x':
          return multiply(num1, num2);
          break;
        case '/':
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
const equal = document.querySelector('#equal');

numbers.forEach(number => {
  const val = number.textContent;
  number.addEventListener('click', populate.bind(this, val));
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    let val = '';
    if(numString !== '' || num1 !== ''){   // Do nothing when we start by clicking on an operator
      val = operator.textContent; 
      if(valHolder.length === 0){
        num1 = Number(numString);
        numString = '';
        valHolder.push(num1);
        valHolder.push(val);
      } else if("Here", typeof valHolder[valHolder.length-1] !== "number"){
        valHolder.pop();
        valHolder.push(val);
        topDisplay.removeChild(topDisplay.lastElementChild);
      }
   
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

equal.addEventListener('click', () => {
  num2 = Number(numString);
  const operator = valHolder.pop();
  const val = operate(operator, num1, num2);
  console.log(val);
})

