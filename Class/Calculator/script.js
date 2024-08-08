const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys');

const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') result = parseFloat(n1) + parseFloat(n2);
    if (operator === 'subtract') result = parseFloat(n1) - parseFloat(n2);
    if (operator === 'multiply') result = parseFloat(n1) * parseFloat(n2);
    if (operator === 'divide') result = parseFloat(n1) / parseFloat(n2);

    return result
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        //remove shading from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        if (!action) { //clicked key was a number
            console.log('number key!')
            if (
                displayedNum === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            if (previousKeyType === 'calculate') { //reset when starting a new calc
                delete calculator.dataset.firstValue;
                delete calculator.dataset.operator;
            }
            calculator.dataset.previousKeyType = 'number';

        }

        if ( //clicked an operator key
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
            firstValue = calculator.dataset.firstValue;
            operator = calculator.dataset.operator;
            secondValue = displayedNum;
            //calculator.dataset.operator = action;

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            //calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            calculator.dataset.previousKeyType = 'operator';
        }

        if (action === 'decimal') { //clicked decimal key
            console.log('decimal key!')
            if (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = '0.';
            }
            else if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
            calculator.dataset.previousKeyType = 'decimal';

        }


        if (action !== 'clear') { //set clear button to CE when any other key is pressed
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }

        if (action === 'clear') { //clicked clear key
            console.log('clear key!');
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else {
                key.textContent = 'AC'
            }
            display.textContent = 0;
            //key.textContent = 'AC';
            calculator.dataset.previousKeyType = 'clear';

        }

        if (action === 'calculate') { //clicked equal key
            console.log('equal key!')
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';

        }
    }
})