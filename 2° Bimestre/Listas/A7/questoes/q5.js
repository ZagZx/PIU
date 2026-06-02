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

const resultado = await Promise.all(chamadas);

console.log(resultado);

// Para no erro
// não exibe a lista com o resultado das chamadas