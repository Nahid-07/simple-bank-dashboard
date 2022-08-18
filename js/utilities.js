function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputValue;
}
function getElementValue(element){
    const depositAmountField = document.getElementById(element);
    let depositAmountString = depositAmountField.innerText;
    let depositAmount = parseFloat(depositAmountString);
    return depositAmount;
}
function setValue (elementId,depositBalance){
    const elementField = document.getElementById(elementId);
    elementField.innerText = depositBalance;
}