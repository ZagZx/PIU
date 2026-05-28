class Funcionario {
    #nome;
    #salarioBase;

    constructor(nome, salarioBase) {
        this.#nome = nome;
        this.#salarioBase = salarioBase;
    }

    #calcularBonus() {
        return this.#salarioBase * 0.1;
    }

    salarioTotal() {
        return this.#calcularBonus() + this.#salarioBase;
    }

    getNome() {
        return this.#nome;
    }
}

let ciro = new Funcionario("Ciro Games", 10000);

// console.log(ciro.#nome);
console.log(ciro.getNome());
console.log(ciro.salarioTotal());