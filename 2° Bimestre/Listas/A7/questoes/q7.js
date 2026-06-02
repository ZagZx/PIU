
async function getStatus(id, condicao) {
    const random = Math.random();
    let timeout = ((random * 2) + 1) * 1000;
    timeout = Math.floor(timeout);

    console.log(id, timeout);

    await new Promise(resolve => setTimeout(resolve, timeout));

    if (condicao === true) {
        return `${id} Sucesso!`;
        // console.log(`Sucesso!`);
    } else {
        throw Error(`${id} Falha!`);
    } 
}

let chamadas = [
    getStatus(1, true),
    getStatus(2, true),
    getStatus(3, true),
];

// Mostra o que tiver menor timeout

// let chamadas = [
//     getStatus(1, false),
//     getStatus(2, true),
//     getStatus(3, true),
// ];

// Mostra o elemento com menor timeout que seja true

// let chamadas = [
//     getStatus(1, false),
//     getStatus(2, false),
//     getStatus(3, false),
// ];

// Erro, todas as promises foram rejeitadas

const resultado = await Promise.any(chamadas);
console.log(resultado);