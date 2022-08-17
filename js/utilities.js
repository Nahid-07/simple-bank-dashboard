function getInputFieldValue(inputField){
    const inputFieldId = document.getElementById(inputField);
    const inputFieldString = inputFieldId.value;
    const inputValue = parseFloat(inputFieldString);
    inputFieldId.value = '';
    return inputValue
}
function getElementFieldValue(elementField){
    const element = document.getElementById(elementField);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
function setTextElement(elementId,newTotalDeposit){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newTotalDeposit;
}