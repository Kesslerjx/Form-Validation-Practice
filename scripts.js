const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zip');
const password = document.querySelector('#password');
const pwConfirm = document.querySelector('#password-confirmation');

email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
zipcode.addEventListener('input', validateZip);
password.addEventListener('input', validatePassword);
pwConfirm.addEventListener('input', validateConfirm);

function validateEmail(event) {

    let email = event.target;
    
    if(email.validity.valueMissing){
        showError(getErrorElement(event), 'Email is required');
    } else
    if(email.validity.typeMismatch) {
        showError(getErrorElement(event), 'Email is invalid');
    } else {
        clearError(getErrorElement(event));
    }
}

function validateCountry(event) {
    if(country.validity.valueMissing) {
        showError(getErrorElement(event), 'Country is required');
    } else 
    if(country.validity.typeMismatch) {
        showError(getErrorElement(event), 'Country is invalid');
    } else {
        clearError(getErrorElement(event));
    }
}

function validateZip(event) {
    if(zipcode.validity.valueMissing) {
        showError(getErrorElement(event), 'Zipcode is required');
    } else 
    if(zipcode.validity.typeMismatch) {
        showError(getErrorElement(event), 'Zipcode is invalid');
    } else {
        clearError(getErrorElement(event));
    }
}

function validatePassword(event) {
    console.log(password);
    console.log(password.value);
    if(password.validity.valueMissing) {
        showError(getErrorElement(event), 'Password is required');
    } else 
    if(password.validity.typeMismatch) {
        showError(getErrorElement(event), 'Password is invalid');
    } else
    if(password.validity.tooShort){
        showError(getErrorElement(event), 'Password is too short');
    } else {
        clearError(getErrorElement(event));
    }
}

function validateConfirm(event) {

    if(pwConfirm.validity.valueMissing) {
        showError(getErrorElement(event), 'Password is required');
    } else 
    if(pwConfirm.validity.typeMismatch) {
        showError(getErrorElement(event), 'Password is invalid');
    } else
    if(pwConfirm.validity.tooShort){
        showError(getErrorElement(event), 'Password is too short');
    } else
    if(password.value !== pwConfirm.value) {
        showError(getErrorElement(event), 'Passwords don\'t match');
    } else {
        clearError(getErrorElement(event));
    } 
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.className = 'error active';
}

function clearError(errorElement) {
    errorElement.textContent = '';
    errorElement.className = 'error';
}

function getErrorElement(event) {
    return event.target.parentElement.querySelector(`#${event.target.id} + span.error`);
}