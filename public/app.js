var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var submit = document.querySelector('#calcular');
var resultado = document.querySelector('.resultado');
function calcular(x, y) {
    return x * y;
}
;
submit.addEventListener('click', function () {
    resultado.innerHTML = calcular(parseInt(numero1.value), parseInt(numero2.value)).toString();
});
//Colocar um "+" ou "parseInt()" antes do numero1/2.value indicia que ele sempre será um número
