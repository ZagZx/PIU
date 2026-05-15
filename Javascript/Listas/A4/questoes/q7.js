const numeros = [1, 2, 3, 4, 5, 6];

function filtrar(numeros, divisor) {
    return numeros.filter(function(num) {
        return num % divisor === 0;
    });
}

console.log(filtrar(numeros, 3));