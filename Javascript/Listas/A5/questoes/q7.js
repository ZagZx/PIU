class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} emitiu um som.`;
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    falar() {
        return `${this.nome} latiu: Au au!`;
    }
}

class BemTeVi extends Animal {
    constructor(nome) {
        super(nome);
    }

    falar() {
        return `${this.nome} fez: Bem te vi!`;
    }
}

let tobi = new Cachorro("Tobi");
console.log(tobi.falar());

let bemTeVi = new BemTeVi("Nome indefinido");
console.log(bemTeVi.falar());