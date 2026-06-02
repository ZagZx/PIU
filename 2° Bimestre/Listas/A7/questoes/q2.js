async function verificarPositivo(n) {
    const type = typeof n;

    if (type !== "number") {
        throw Error(`Tipo ${type} não é number.`);
    }
    else if (n < 0) {
        throw Error(`O valor ${n} deveria ser maior que 0`);
    }
    else if (n >= 0) {
        return;
    }
}


try {
    await verificarPositivo(1);
    // verificarPositivo(-1);
    // verificarPositivo("oi");
    
    console.log("O número é positivo.");
}
catch (e){
    console.log(e);
}
