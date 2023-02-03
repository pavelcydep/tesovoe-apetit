const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const form = document.getElementById('form');
const button = document.getElementById('button');
const buttonClear = document.getElementById('buttonClear');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPassword2 = document.getElementById('password2');
const errorMessage = document.getElementById('error');
const errorPassword = document.getElementById('errorPassword');
const errorPasswordlenght = document.getElementById('errorPasswordlenght');

function isValidEmail() {
    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.borderColor = 'green';
        errorMessage.textContent = "";

        return true;
    } else {
        inputEmail.style.borderColor = 'red';
        errorMessage.textContent = "Не правильный формат email";

        return false;
    }

}

function isValidPassword() {
    if (inputPassword.value == inputPassword2.value) {
        inputPassword.style.borderColor = 'green';
        errorPassword.textContent = "";

        return true;
    } else {
        inputPassword.style.borderColor = 'red';
        errorPassword.textContent = "Пароли не совпадают"

        return false;
    }
}

function isValidPasswordLenght() {
    {
        if (inputPassword.value.length > 6) {
            inputPassword.style.borderColor = 'green';
            errorPasswordlenght.textContent = "";

            return true;
        } else {
            inputPassword.style.borderColor = 'red';

            errorPasswordlenght.textContent = "Длина пароля не менее 6 символов"
            return false;
        }
    }
}


function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}




button.addEventListener('click', function(event) {
    console.log(inputPassword.value.length);
    if (isValidEmail() && isValidPassword() && isValidPasswordLenght() == true) {
        const formData = new FormData();
        let name = document.getElementById('inputName').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password2', password2);
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onload = function(e) {
            if (this.status == 200) {
                alert(this.response);
            }
        };
        HttpRequest.open("POST", '/assets/php/index.php', true);
        HttpRequest.send(formData);


    }
});
buttonClear.addEventListener('click', function() {
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    inputPassword2.value = "";
});