const pessoa = [
    ["Nome", "Alex"],
    ["Idade", 10],
    ["Já foi à disney", false]
];

for (let i in pessoa) {
    console.log(`${pessoa[i][0]}: ${pessoa[i][1]}`);
}