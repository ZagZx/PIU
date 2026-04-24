const numeros = [1, 2, 3, 4, 5];

function filtrarPares(numeros) {
    return numeros.filter(function(num) {
        return num % 2 === 0;
    });
}

console.log(filtrarPares(numeros));