function verificarPositivo(n) {
    const type = typeof n;

    if (type !== "number") {
        return Promise.reject(`Tipo ${type} não é number.`);
    }
    else if (n < 0) {
        return Promise.reject(`O valor ${n} deveria ser maior que 0`);
    }
    else if (n >= 0) {
        return Promise.resolve();
    }
}

verificarPositivo(2).then(() => {
    console.log("O número é positivo.");
}).catch((error) => {
    console.log(error);
});