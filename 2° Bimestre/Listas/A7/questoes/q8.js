
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

// Mostra o elemento com menor timeout

const resultado = await Promise.race(chamadas);
console.log(resultado);