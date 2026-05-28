class ContaBancaria {
    #saldo = 0;

    getSaldo() {
        return `R$${this.#saldo}`;
    }

    setSaldo(saldo) {
        if (saldo < 0) {
            throw new Error("O saldo deve ser positivo");
        }
        this.#saldo = saldo;
    }
}

let contaCiro = new ContaBancaria();
contaCiro.setSaldo(100);
console.log(contaCiro.getSaldo());
// contaCiro.setSaldo(-100);