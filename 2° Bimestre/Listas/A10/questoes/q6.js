// essa já não é uma função pura?
// - não altera variáveis globais
// - retorna um novo valor
// - mesmo resultado caso o parâmetro não mude

// TODO: Altere a função abaixo para que ela se torne uma função pura.
// Classifica a pessoa pela idade.
function faixaEtaria(idade) {
    if (idade < 18)
        return "Menor"
    if (idade < 60)
        return "Adulto"
    else
        return "Idoso"
}

// Testes (NÃO ALTERE)
f0 = faixaEtaria(0)
console.assert(f0 === "Menor", `Esperava f(0) = "Menor", recebeu ${f0}`);
f17 = faixaEtaria(17)
console.assert(f17 === "Menor", `Esperava f(17) = "Menor", recebeu ${f17}`);
f18 = faixaEtaria(18)
console.assert(f18 === "Adulto", `Esperava f(18) = "Adulto", recebeu ${f18}`);
f59 = faixaEtaria(59)
console.assert(f59 === "Adulto", `Esperava f(59) = "Adulto", recebeu ${f59}`);
f60 = faixaEtaria(60)
console.assert(f60 === "Idoso", `Esperava f(60) = "Idoso", recebeu ${f60}`);
f70 = faixaEtaria(70)
console.assert(f70 === "Idoso", `Esperava f(70) = "Idoso", recebeu ${f70}`);