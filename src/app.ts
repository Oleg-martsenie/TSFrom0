const numero1 = document.querySelector('#numero1') as HTMLInputElement;
const numero2 = document.querySelector('#numero2') as HTMLInputElement;
const submit = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

function calcular(x: number, y: number) {
    return x * y;
};

submit.addEventListener('click', function() {
    resultado.innerHTML = calcular(parseInt(numero1.value), parseInt(numero2.value)).toString()
})

//Colocar um "+" ou "parseInt()" antes do numero1/2.value indicia que ele sempre será um número