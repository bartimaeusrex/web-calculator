function calcYouLater(firstNum, mathOper, secondNum) {
    var calcFirst = document.getElementById('firstNum').value
    var mathOper = document.getElementById('mathOper').value
    var calcSecond = document.getElementById('secondNum').value
    var outputElement = document.getElementById('calcResults')

switch (mathOper) {
    case "+":
        calcResults = Number(calcFirst) + Number(calcSecond)
        break
    case "-":
        calcResults = Number(calcFirst) - Number(calcSecond)
        break
    case "*":
        calcResults = Number(calcFirst) * Number(calcSecond)
        break
    case "/":
        calcResults = Number(calcFirst) / Number(calcSecond)
        break
    case "%":
        calcResults = Number(calcFirst) % Number(calcSecond)
        break
    default:
        calcResults = "Oops! Try again."
}

outputElement.innerHTML = calcResults
}

