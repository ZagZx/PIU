class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }
}

let retangulo = new Retangulo(10, 6);

console.log(retangulo.area())