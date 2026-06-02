async function getStatus(condicao) {
    if (condicao === true) {
        return "Sucesso!";
    } else {
        throw Error("Falha!");
    } 
}

try {
    let resultado = await getStatus(true);
    console.log(resultado);
} 
catch (e) {
    console.log(e);
}