document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = getInputFieldValue('withdraw-field');
    const totalWithdraw = getElementFieldValue('withdraw-total');
    const newWithdrawBalance = totalWithdraw + withdrawAmount;
    setTextElement('withdraw-total',newWithdrawBalance);
    const balance = getElementFieldValue('total-balance');
    const newTotalBalance = balance - withdrawAmount;
    setTextElement('total-balance',newTotalBalance);
})