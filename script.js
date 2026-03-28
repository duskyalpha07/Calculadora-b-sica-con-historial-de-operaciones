let fullOp = '';
let res = 0;
let hasOp = false;
let opSet = ['+', '-', 'x', '/', '^'];

function handleClick(number) {
    if (number === 'back') {


        fullOp = fullOp.toString().slice(0, -1);
        showNumber(fullOp || '0');

        return;
    }

    if (opSet.includes(number)) {

        if (hasOp == true || fullOp === '') {
            return;
        }
        hasOp = true;

    }


    if (number === '.' && fullOp.includes('.')) return;


    fullOp = fullOp + number;
    showNumber(fullOp);
}





function calculate() {
    if (!hasOp || fullOp === '') return;

    const parts = fullOp.split(/(\+|-|x|\/|\^)/gm);
    

    if (parts.length < 3 || parts[2] === '') return;



    let a = Number(parts[0]);
    let op = parts[1];
    let b = Number(parts[2]);
    let finalRes;

    switch(op) {
        case "+": finalRes = a + b; break;
        case "-": finalRes = a - b; break;
        case "x": finalRes = a * b; break;
        case "/": finalRes = b !== 0 ? a / b : "Error"; break;
        case "^": finalRes = Math.pow(a, b); break;
        default: return;
    }

    if (typeof finalRes === 'number' && !Number.isInteger(finalRes)) {
        finalRes = parseFloat(finalRes.toFixed(8));
    }



    document.getElementById("history").innerText = fullOp + " = " + finalRes;


    showNumber(finalRes);
    fullOp = finalRes.toString();
    hasOp = false;
}



function deletear() {
    res = 0;
    fullOp = '';
    showNumber('0');
    hasOp = false;
    document.getElementById("history").innerText = '';
}


function showNumber(number) {
    document.getElementById("screen").innerHTML = number;
}