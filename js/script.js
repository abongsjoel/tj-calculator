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
let valHolder = [];

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const topDisplay = document.querySelector('#top');
const bottomDisplay = document.querySelector('#bottom');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const dot = document.querySelector('#dot');
const back = document.querySelector('#back');
let isDotClicked = false;

numbers.forEach(number => {
  const val = number.textContent;
  number.addEventListener('click', populate.bind(this, val));
});

dot.addEventListener('click', () => {
  if(!isDotClicked){
    populate('.');
    isDotClicked = true;
  }
})

clear.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  numString = '';
  valHolder = [];
  topDisplay.textContent = '';
  bottomDisplay.textContent = '';
})

back.addEventListener('click', () => {
  if(numString){
    const stringArr = numString.split('');
    stringArr.pop();
    numString = stringArr.join('');
    console.log(numString);
  } else if(valHolder.length !== 0 && typeof valHolder[valHolder.length-1] !== "number"){
    console.log("before pop", valHolder)
    valHolder.pop();
    numString = num1;
    num1 = '';
    valHolder = [];
    console.log("after pop", valHolder)
  }
  topDisplay.removeChild(topDisplay.lastElementChild);
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    let val = '';
    if(numString !== '' || num1 !== ''){   // Do nothing when we start by clicking on an operator
      val = operator.textContent; 
      console.log("length of valHolder is", valHolder.length);
      if(valHolder.length === 0){
        num1 = Number(numString);
        numString = '';
        valHolder.push(num1);
        valHolder.push(val);
      } else if(typeof valHolder[valHolder.length-1] !== "number"){ //last value of valHolder is an operator
        if(numString === ''){
          console.log("double operators");
          valHolder.pop();
          valHolder.push(val);
          topDisplay.removeChild(topDisplay.lastElementChild);
        } else {
          const result = performOperation();
          bottomDisplay.textContent = result;
          num1 = result;
          valHolder.push(num1);
          valHolder.push(val);
        }
      } 
    }
    populate(val);
    isDotClicked = false;
    console.log("end of operator", valHolder);
    console.log("value of numString", numString);
    console.log("value of num1", num1);
  });
});

function populate(val) {
  const span = document.createElement('span');
  if(!isNaN(Number(val)) || val === '.'){    //Its a number or a decimal point
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
  bottomDisplay.textContent = '';
  const result = performOperation();
  topDisplay.textContent = '';
  populate(result);

})

function performOperation() {
  num2 = Number(numString);
  numString = '';
  const operator = valHolder.pop();
  valHolder = [];
  result = operate(operator, num1, num2)
  result = isFloat(result) ? result.toFixed(2) : result;
  return result;
}

function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}
