document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-calculadora-imc').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let altura = document.getElementById('altura').value;
        let peso = document.getElementById('peso').value;
        altura = parseFloat(altura);
        peso = parseFloat(peso);

        let imc = peso / (altura * altura);

        document.getElementById('resultado-valor').innerText = imc.toFixed(2);
        document.getElementById('condicao').innerText = condicao();
        document.querySelector('.resultado').style.display = 'block';

        function condicao() {
            let descricao;
            if (imc <= 18.6)
                descricao = ' Você está abaixo do peso';
            if (imc >= 18.6 && imc <= 24.9)
                descricao = ' Parabéns você está no peso ideal';
            if (imc >= 25 && imc <= 29.9)
                descricao = ' Você está com sobrepeso';
            if (imc >= 30 && imc <= 34.9)
                descricao = ' Você está com obesidade grau 1';
            if (imc >= 35 && imc <= 39.9)
                descricao = ' Você está com obesidade grau 2';
            if (imc >= 40)
                descricao = ' Você está com obesidade grau 3';

            return descricao;
        }
    })
})