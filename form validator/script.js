let form = document.querySelector('.form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');

function showError(input, message){
    const formInfo = input.parentElement;
    formInfo.className = 'form-info error';
    const small = formInfo.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formInfo = input.parentElement;
    formInfo.className = 'form-info success';
}

function errorName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmptyInputs(inputArr){
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${errorName(input)} is required`);
        }else {
            showSuccess(input);
        }
    })
}

function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${errorName(input)} must be at least ${min} characters`)
    }else if (input.value.length > max){
        showError(input, `${errorName(input)} must be no longer than ${max} characters`)
    }else {
        showSuccess(input);
    }
}

function checkPassword(pass1, pass2){
    if (pass1.value != pass2.value) {
        showError(pass2, 'password does not match');
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    checkEmptyInputs([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 4, 8);
    checkLength(password2, 4, 8);
    checkPassword(password, password2);
})