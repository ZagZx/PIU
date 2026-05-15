function getVacinasAtrasadas(vacinas) {
    let vacinasAtrasadas = [];

    vacinas.forEach((vacina) => {
        if (vacina.ano < 2026) {
            vacinasAtrasadas.push(vacina);
        }
        else if (vacina.ano === 2026) {
            if (vacina.mes < 5) {
                vacinasAtrasadas.push(vacina);
            }
            else if (vacina.mes === 5 && vacina.dia < 15) {
                vacinasAtrasadas.push(vacina);
            }
        }
    });

    return vacinasAtrasadas;
}


let vacinas = [ 
    { nome: 'V8', dia: 15, mes: 5, ano: 2026 }, 
    { nome: 'Antirrábica', dia: 10, mes: 4, ano: 2025 }, 
    { nome: 'Leishmaniose', dia: 20, mes: 6, ano: 2027 }, 
    { nome: 'Giárdia', dia: 15, mes: 4, ano: 2026 }, 
    { nome: 'Gripe Canina', dia: 5, mes: 5, ano: 2026 }, 
    { nome: 'Sei lá o que mais', dia: 15, mes: 6, ano: 2023 }, 
];

console.log(getVacinasAtrasadas(vacinas))