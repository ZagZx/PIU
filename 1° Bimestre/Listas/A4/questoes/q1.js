const numeros = [1, 2, 3, 4, 5];

function parOuImpar(numeros) {
    numeros.forEach(function(num) {
        if (num % 2 === 0) {
            console.log(`${num} é par`);
            return;
        }
        console.log(`${num} é impar`);
    });
}

parOuImpar(numeros);