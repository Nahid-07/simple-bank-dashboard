document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
    if(isNaN(withdrawAmount)){
        alert('please enter a valid number');
        return;
    }
    const balance = getElementValue('total-balance');
    if(withdrawAmount>balance){
        alert('Sorry! currently you do not have enough money to deposite');
        return;
    }
    const withdrawAmountTotal = getElementValue('withdraw-total');
    const totalWithdraw = withdrawAmountTotal + withdrawAmount;
    setValue ('withdraw-total',totalWithdraw);
    const totalBalance = balance - withdrawAmount;
    setValue ('total-balance',totalBalance);
    
});