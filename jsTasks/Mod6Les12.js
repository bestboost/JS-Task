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

const textToCalculate = `555 + 7 * 6 - 3 % 6 - 3 * 9 + 2 % -6 * -6 * 9`;

const complexOperation = ['*', '%'];

function calculateSubtractBlock(subtractionBlock) {
    const charArr = subtractionBlock.split('');
    const resultBlock = [];
    let currentBlock = '';

    for ( let i = 0; i < charArr.length; i ++ ) {
        const char = charArr[i];
        if (i > 0 && char === '-' && !complexOperation.includes(charArr[i - 1])) {
            resultBlock.push(currentBlock)
            currentBlock = ''
        } else {
            currentBlock += char;
        }

        if (i === charArr.length - 1) {
            resultBlock.push(currentBlock);
        }
    }
    return resultBlock;
};

function calculateDivideBlock(divideBlock) {
    return divideBlock.split('%')
}

function calculateMultiplyBlock(multiplyBlock) {
    return multiplyBlock.split('*')
        .map(n => Number(n))
        .reduce((a, b) => a * b, 1);
}

function calculateAll(textToCalculate) {
     const parsedText = textToCalculate.replaceAll(' ', '');

    const addParts = parsedText.split('+')
    addParts.map(addPart => {
        const subtractParts = calculateSubtractBlock(addPart)
        console.log(subtractParts)

        const resultOfSubtractParts = subtractParts.map(subPart => {

            const resultOfDivideBlocks = calculateDivideBlock(subPart)
                .map(calculateMultiplyBlock)
                .reduce((a, b) => a % b)
            console.log(resultOfDivideBlocks)
            return resultOfDivideBlocks;
        }).reduсe((a, b) => a - b);
        console.log(resultOfSubtractParts)
    })
}

// console.log(calculateSubtractBlock('7*6-3%6-3*9'));
// console.log(calculateSubtractBlock('2%-6*-6*9'));

// console.log(calculateDivideBlock('2%-6*-6*9'));
// console.log(calculateMultiplyBlock('-6*-6*9'));

calculateAll(textToCalculate);