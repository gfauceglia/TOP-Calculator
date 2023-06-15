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

let n1, n2, oper, temp, result;

document.getElementById('backspace').addEventListener('click', () => {
  if (typeof(temp) != 'undefined') {
    clearDisplay(temp)
  }
});

document.querySelectorAll('.btn-number').forEach(btn => {
  btn.addEventListener('click', () => {
    n = btn.dataset.n;
    temp = display.textContent;
    switch (temp) {
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
  });
});

document.querySelectorAll('.btn-operator').forEach(btn => {
  btn.addEventListener('click', () => {
    temp = display.textContent;
    // Sees if there is a result stored.
      // If it has, saves the current display in n2, makes the operation
      // and stores the result in n1

      // If not, saves the display in n1
    // In both cases, stores the clicked operator button as a new operator
    if (result) {
      n2 = parseFloat(display.textContent);
      n1 = result;
    } else {
      n1 = parseFloat(display.textContent);
    }
    oper = btn.dataset.operator;
    clearDisplay(oper);
  });
});

document.querySelector('.btn-equal').addEventListener('click', () => {
  if (typeof(n1) == 'number' && oper) {
    temp = display.textContent;
    n2 = parseFloat(temp);
    result = operate(n1, n2, oper);
    clearDisplay(result.toFixed(9));
    oper = '';
  }
})

document.getElementById('clear').addEventListener('click', () => {
  clearDisplay(0);
  n1 = undefined;
  n2 = undefined;
  temp = undefined;
  result = undefined;
  oper = ''
}
);

populateDisplay('0');
