const form = document.getElementById('form');
const nome = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

})

function checkInputs() {
    const nameValue = nome.value;
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '') {
        errorValidation(nome, 'Preencha esse campo!');
    } else {
        successValidation(nome);
    }
    if (telValue === '') {
        errorValidation(tel, 'Preencha esse campo');
    } else {
        successValidation(tel);
    }
    if (emailValue === '') {
        errorValidation(email, 'Preencha esse campo');
    } else {
        successValidation(email);
    }

}

function errorValidation(input, message) {
    const controllerForm = input.parentElement; // Pegando o elemento pai do input 
    const small = controllerForm.querySelector('small'); // pegando o small da div 

    small.innerText = message;
    controllerForm.className = 'controller-form error';

}

function successValidation(input) {
    const controllerForm = input.parentElement;

    controllerForm.className = 'controller-form success';
}