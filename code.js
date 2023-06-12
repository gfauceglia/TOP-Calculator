function add(n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  if (n2 === 0) {
    return NaN;
  }
  return n1 / n2;
}

function operate(n1, n2, oper) {
  switch(oper) {
    case '+':
      return add(n1,n2);
    case '-':
      return substract(n1,n2);
    case '*':
      return multiply(n1,n2);
    default:
      return divide(n1,n2);
  }
}

let display = document.querySelector('.results');

function populateDisplay(string) {
  display.textContent += string;
  return display.textContent;
}

function clearDisplay(n) {
  document.querySelector('.results').textContent = n;
  return;
}

let n1, n2, oper, temp;

document.getElementById('clear').addEventListener('click', () => clearDisplay(0));

document.getElementById('backspace').addEventListener('click', () => {
  // ver ultima modificacion y ponerle el valor de temp
});

document.querySelectorAll('.btn-number').forEach(btn => {
  btn.addEventListener('click', () => {
    n = parseInt(btn.dataset.n);
    switch (display.textContent) {
      case '0':
      case '+':
      case '-':
      case '*':
      case '/':
        clearDisplay(n);
        break;
      default:
        populateDisplay(n);
        break;
    };
    if (oper) {
      n2 = parseFloat(display.textContent);
    } else {
      n1 = parseFloat(display.textContent);
    }
  });
});

document.querySelectorAll('.btn-operator').forEach(btn => {
  btn.addEventListener('click', () => {
    operator = btn.dataset.operator;
    clearDisplay(operator);
    oper = operator;
  });
});

document.querySelector('.btn-equal').addEventListener('click', () => {
  if (typeof(n1) == 'number' && typeof(n2) == 'number' && oper){
    let result = operate(n1, n2, oper);
    clearDisplay(result);
    temp = result,
    n1 = undefined,
    n2 = undefined,
    oper = '';
  }
})

document.querySelector('.btn-dot').addEventListener('click', () => {
  populateDisplay('.');
})

populateDisplay('0');
