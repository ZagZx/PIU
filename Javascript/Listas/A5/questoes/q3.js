let animalProto = {
    grupo: "",
    descrever: function() {
        return `Este(a) é um(a) ${this.grupo}`;
    }
}

let peba = Object.create(animalProto);
peba.grupo = "Mamífero";

let arribaca = Object.create(animalProto);
arribaca.grupo = "Ave";


console.log(peba.descrever());
console.log(arribaca.descrever());