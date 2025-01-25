const form = document.getElementById('form-numeros');

let formEhValido = false;

function validaNumero(valorB) {
    const valorA = parseInt(numeroA.value);
    const valorBNumber = parseInt(valorB);

    if (valorBNumber > valorA) {
        return true;
    }
    console.log('retorno: ' + formEhValido);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');

    const valorA = numeroA.value;
    const valorB = numeroB.value;
    const mensagemSucesso = `Número A: <b>${valorA} | </b> número B: <b>${valorB} | </b> Form Válido`;
    const mensagemErro = `Número A: <b>${valorA}</b> número B: <b>${valorB}</b> Form Inválido`;

    formEhValido = validaNumero(numeroB.value);
    if (formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.backgroundColor = 'green';
        containerMensagemSucesso.style.display = 'block';
        numeroB.style.border = '';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        const containerMensagemError = document.querySelector('.success-message');
        containerMensagemError.innerHTML = mensagemErro;
        containerMensagemError.style.backgroundColor = 'red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formEhValido = validaNumero(e.target.value);

    if (!formEhValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});