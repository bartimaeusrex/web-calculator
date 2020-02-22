


function simpleAddition(firstNum, secondNum) {
    var addFirst = document.getElementById('firstNum').value
    var addSecond = document.getElementById('secondNum').value
    var outputElement = document.getElementById('additionResults')

    var additionResults = Number(addFirst) + Number(addSecond)

    outputElement.innerHTML = additionResults
}