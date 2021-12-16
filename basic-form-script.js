const form = document.querySelector('#form1');
const email = document.querySelector('#email-input');
const country = document.querySelector('#country-input');
const zipcode = document.querySelector('#zipcode-input');
const pw1 = document.querySelector('#pw1-input');
const pw2 = document.querySelector('#pw2-input');

const emailError = document.querySelector('#email-error-p');
const countryError = document.querySelector('#country-error-p');
const zipcodeError = document.querySelector('#zipcode-error-p');
const pw1Error = document.querySelector('#pw1-error-p');
const pw2Error = document.querySelector('#pw2-error-p');

function displayEmailError() {
    emailError.textContent = 'Enter a valid email address.';
    email.classList.add('error-active');
}

function displayCountryError() {
    countryError.textContent = 'Enter a country.';
    country.classList.add('error-active');
}

function displayZipcodeError() {
    zipcodeError.textContent = 'Enter a 5-digit zipcode.';
    zipcode.classList.add('error-active');
}

function displayPw1Error() {
    pw1Error.textContent = 'Password length must be 8-30 characters.';
    pw1.classList.add('error-active');
}

function displayPw2Error() {
    pw2Error.textContent = 'Passwords do not match.';
    pw2.classList.add('error-active');
}

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        displayEmailError();
    } else if (email.validity.valid || email.validity.valueMissing) {
        emailError.textContent = '';
        email.classList.remove('error-active');
    }
})

country.addEventListener('input', () => {
    if (!country.validity.valueMissing) {
        countryError.textContent = '';
        country.classList.remove('error-active');
    }
})

zipcode.addEventListener('input', () => {
    if (zipcode.validity.patternMismatch) {
        displayZipcodeError();
    } else if (zipcode.validity.valid || zipcode.validity.valueMissing) {
        zipcodeError.textContent = '';
        zipcode.classList.remove('error-active');
    } 
})

pw1.addEventListener('input', () => {
    if (pw1.validity.tooLong || pw1.validity.tooShort) {
        displayPw1Error();
    } else if (pw1.validity.valid || pw1.validity.valueMissing) {
        pw1Error.textContent = '';
        pw1.classList.remove('error-active');
    }
})

pw2.addEventListener('input', () => {
    if ((!pw2.validity.valueMissing) && (pw2.value !== pw1.value)) {
        displayPw2Error();
    } else if (pw2.validity.valueMissing || pw2.value === pw1.value) {
        pw2Error.textContent = '';
        pw2.classList.remove('error-active');
    }
})

form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        console.log('stopped, email');
        displayEmailError();
        event.preventDefault();
    } else if (country.validity.valueMissing) {
        console.log('stopped, country');
        displayCountryError();
        event.preventDefault();
    } else if (!zipcode.validity.valid) {
        console.log('stopped, zipcode');
        displayZipcodeError();
        event.preventDefault();
    } else if (!pw1.validity.valid) {
        console.log('stopped, pw1');
        displayPw1Error();
        event.preventDefault();
    } else if (!pw2.validity.valid) {
        console.log('stopped, pw2');
        displayPw2Error();
        event.preventDefault();
    }
})
