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

//Check REquired Fields

function checkRequired(inputArr) {
    inputArr.foreach(function(input) {

        if (input.value.trim() === "") {
            showError(input, is `${getFieldName(input)} required.`);
        }
        else {
            showSuccess(input);
        }
    });
}

//Check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} can only be a maximum of ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

//Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
id.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, confirmpassword]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);

    /*if(username.value === '') {
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
    } */
});