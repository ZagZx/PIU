const numeros = [1, 2, 3, 4, 5];

function multiplicar(numeros, fator) {
    let numeros_multiplicados = [];

    numeros.map((num) => {
        numeros_multiplicados.push(num *= fator);
    });

    return numeros_multiplicados;
}

console.log(multiplicar(numeros, 3));