// // Answer (uncomment the code in HTML )
// const select = document.querySelector('select');
// console.log(select);
// select.addEventListener("change", (e) => {
//     // console.log(e.currentTarget.value);
//     document.getElementById("state").textContent =
//         e.currentTarget.value;
// });

// Calculator
const operations = ['+', '-', '*', '/', '^'];

const select = document.createElement('select');

select.innerHTML = operations
    .map(operation =>
        `<option value="${operation}">${operation}</option>`)
    .join('');   
        
const firstInput = document.createElement('input');
firstInput.type = 'number';
firstInput.value = 0;

const secondInput = document.createElement('input');
secondInput.type = 'number';
secondInput.value = 0;

const result = document.createElement('span');
result.textContent = ' = 0';

document.body.append(firstInput, select, secondInput, result);   

const objMap = {
    '+': function add(a, b) { return a + b },
    '-': function subtract(a, b) { return a - b },
    '*': function multiply(a, b) { return a * b },
    '/': function divide(a, b) { return a / b },
    '^': function pow(a, b) { return a ** b }
}

const render = () => {
    const firstValue = Number(firstInput.value);
    const operation = select.value;
    const secondValue = Number(secondInput.value);
    result.textContent = ` = ${objMap[operation](firstValue, secondValue)}`;
}

firstInput.onchange = render;
// (the same - firstInput.addEventListener("change", render); )
select.onchange = render;
secondInput.onchange = render;
