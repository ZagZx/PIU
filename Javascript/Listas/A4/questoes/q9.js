const numeros = [1, 2, 3, 4, 5, 6];


function somar(numeros) {
    return numeros.reduce(function(anterior, atual){
        return anterior + atual;
    });
}

console.log(somar(numeros));