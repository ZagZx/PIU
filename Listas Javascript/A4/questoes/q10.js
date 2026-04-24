const numeros = [1, 2, 3, 4, 5, 6];


function somar(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

console.log(somar(numeros));