function getStatus(condicao) {
    if (condicao === true) {
        return Promise.resolve("Sucesso!");
    }
    
    if (condicao === false) {
        return Promise.reject("Falha!");
    }
}

getStatus(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

getStatus(false).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});