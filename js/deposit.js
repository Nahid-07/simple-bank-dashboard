document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-field');
    if(isNaN(depositAmount)){
        alert('please enter a valid number');
        return;
    }
    const depositAmountTotal = getElementValue('deposit-total');
    const totalDeposit = depositAmountTotal + depositAmount;
    setValue ('deposit-total',totalDeposit)
    const balance = getElementValue('total-balance');
    const totalBalance = balance + totalDeposit;
    setValue('total-balance',totalBalance);

});

