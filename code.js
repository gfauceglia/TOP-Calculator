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

display = document.querySelector('.results');

function populateDisplay(string) {
  display.textContent += string;
  return display.textContent;
}

function clearDisplay(n) {
  document.querySelector('.results').textContent = n;
  return;
}

document.getElementById('clear').addEventListener('click', () => clearDisplay(0));

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
  });
});

document.querySelectorAll('.btn-operator').forEach(btn => {
  btn.addEventListener('click', () => {
    operator = btn.dataset.operator;
    clearDisplay(operator);
  });
});

document.querySelector('.btn-equal').addEventListener('click', () => {
  clearDisplay('result');
})

document.querySelector('.btn-dot').addEventListener('click', () => {
  populateDisplay('.');
})

populateDisplay('0');
