document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount = getInputFieldValue('deposit-field');
    const totalDeposit = getElementFieldValue('deposit-total');
    const newDepositBalance = totalDeposit + depositAmount;
    setTextElement('deposit-total',newDepositBalance);
    const Balance = getElementFieldValue('total-balance');
    const newTotalBalance = Balance + depositAmount;
    setTextElement('total-balance',newTotalBalance);
})