async function getStatus(condicao) {
    if (condicao === true) {
        return "Sucesso!";
        // console.log("Sucesso!");
    } else {
        throw Error("Falha!");
    } 
}

let chamadas = [
    getStatus(true),
    getStatus(false),
    getStatus(true),
];


const resultado = await Promise.allSettled(chamadas);
console.log(resultado);

// Mostra os resultados de sucesso e o erro