//brings in every ID from the DOM (HTML file)
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');


// Show Input Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check Email Validity
function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
id.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Hey, Input a username please!');
    }
    else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'I need an email');
    }

    else if(!isEmailValid(email.value)) {
        showError(email, 'Hey, that email is invalid! :)');
    }

    else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Nope, Input a password please!');
    }
    else {
        showSuccess(password);
    }

    if(confirmpassword.value === '') {
        showError(confirmpassword, 'Confirm the password :(');
    }
    else {
        showSuccess(confirmpassword);
    }
});