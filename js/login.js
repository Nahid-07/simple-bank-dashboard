document.getElementById('btn-login').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const emailInput = emailField.value;
    const passswordField = document.getElementById('password-field');
    const passwordInput = passswordField.value;
    if(emailInput === 'nahidasif@yahoo.com' && passwordInput === 'nahid1234'){
        window.location.href ='bank.html'
    }else{
        alert('Your entered email or password is wrong')
    }
});