

function doMath() {
    var n1 = Number(document.getElementByID('num1').value);
    var n2 = Number(document.getElementByID('num2').value);

    var sum = addFormula(n1,n2);
    var sub = subtractFormula(n1,n2);

    console.log(sum);
    console.log(sub);
}

function addFormula(x,y){
    return x + y;
}

function subractFormula(x,y){
    return x - y;
}

document.getElementById('calcButton').addEventListener('click',doMath)

doMath();