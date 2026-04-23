function validarNome(nome) {
    if (typeof nome !== "string") {
        throw new Error("Nome deve ser string");
    }
}
function validarIdade(idade) {
    if (!Number.isInteger(idade)) {
        throw new Error("Idade deve ser inteiro");
    }
}
function validarFoiADisney(foiADisney) {
    if (typeof foiADisney !== "boolean") {
        throw new Error("Foi à disney deve ser booleano")
    }
}

function validarPessoa(pessoa) {
    validarFoiADisney(pessoa.foiADisney);
    validarIdade(pessoa.idade);
    validarNome(pessoa.nome);
}

const pessoa = {
    nome: "Alex",
    idade: 10,
    foiADisney: false
}

validarPessoa(pessoa);

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Já foi à Disney: ${pessoa.foiADisney}`);