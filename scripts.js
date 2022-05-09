const highFiveGif = document.querySelector('#high-five-gif');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');
const zipcode = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span.error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.error');
const pwConfirm = document.querySelector('#password-confirmation');
const pwConfirmError = document.querySelector('#password-confirmation + span.error')

email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
zipcode.addEventListener('input', validateZip);
password.addEventListener('input', validatePassword);
pwConfirm.addEventListener('input', validateConfirm);
form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();

    if(validateEmail() && 
    validateCountry() && 
    validateZip() && 
    validatePassword() && 
    validateConfirm()) {
        console.log('Form submitted');
        highFiveGif.style.display = 'block';
    }
}

function validateEmail() {
    
    if(email.validity.valueMissing){
        showError(emailError, 'Email is required');
        return false;
    } else
    if(email.validity.typeMismatch) {
        showError(emailError, 'Email is invalid');
        return false;
    } else {
        clearError(emailError);
        return true;
    }
}

function validateCountry() {
    if(country.validity.valueMissing) {
        showError(countryError, 'Country is required');
        return false;
    } else 
    if(country.validity.typeMismatch) {
        showError(countryError, 'Country is invalid');
        return false;
    } else {
        clearError(countryError);
        return true;
    }
}

function validateZip() {
    if(zipcode.validity.valueMissing) {
        showError(zipError, 'Zipcode is required');
        return false;
    } else 
    if(zipcode.validity.typeMismatch) {
        showError(zipError, 'Zipcode is invalid');
        return false;
    } else {
        clearError(zipError);
        return true;
    }
}

function validatePassword() {

    if(password.validity.valueMissing) {
        showError(passwordError, 'Password is required');
        return false;
    } else 
    if(password.validity.typeMismatch) {
        showError(passwordError, 'Password is invalid');
        return false;
    } else
    if(password.validity.tooShort){
        showError(passwordError, 'Password is too short');
        return false;
    } else {
        clearError(passwordError);
        return true;
    }
}

function validateConfirm() {

    if(pwConfirm.validity.valueMissing) {
        showError(pwConfirmError, 'Password is required');
        return false;
    } else 
    if(pwConfirm.validity.typeMismatch) {
        showError(pwConfirmError, 'Password is invalid');
        return false;
    } else
    if(pwConfirm.validity.tooShort){
        showError(pwConfirmError, 'Password is too short');
        return false;
    } else
    if(password.value !== pwConfirm.value) {
        showError(pwConfirmError, 'Passwords don\'t match');
        return false;
    } else {
        clearError(pwConfirmError);
        return true;
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