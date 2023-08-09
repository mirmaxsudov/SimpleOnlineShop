function checkPassword() {

    const password = document.getElementById('password').value;

    if (password.length !== 8) 
        alert('Password must be at least 8 characters');
    else if (!/[a-z]/.test(password))  
        alert('Should be at least 1 lowercase letter');
    else if (!/[A-Z]/.test(password)) {
        alert('Should be at least 1 uppercase letter');
    } else if (!/[1-9]/.test(password)) {
        alert('Should be at least 1 number');
    } else {
        alert('Password is Correct!!!');
    }
}