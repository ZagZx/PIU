const numeros = [1, 2, 3, 4, 5];

function filtrarPares(numeros) {
    let pares = [];

    numeros.forEach((num) => {
        if (num % 2 === 0) {
            pares.push(num)
        }

    });
    return pares;
}

console.log(filtrarPares(numeros));