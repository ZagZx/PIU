const numeros = [1, 2, 3, 4, 5];

function dobrar(numeros) {
    let numeros_dobrados = [];

    numeros.map(function(num) {
        numeros_dobrados.push(num *= 2);
    });

    return numeros_dobrados;
}

console.log(dobrar(numeros));