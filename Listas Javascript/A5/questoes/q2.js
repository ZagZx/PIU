function apresentar() {
    return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`;

}

function Pessoa(nome, idade) { 
    this.nome = nome;
    this.idade = idade;
    this.apresentar = apresentar;
}

let ciro = new Pessoa("Ciro Games", 18); // acabou de fazer 18
let alcino = new Pessoa("Alcino", 29);

console.log(ciro.apresentar());
console.log(alcino.apresentar())