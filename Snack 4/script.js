const persone = [
    {
        nome: "Luca",
        cognome: "Pasquato",
        età: "38",
    },

    {
        nome: "Marco",
        cognome: "Rossi",
        età: "17"
    },

    {
        nome: "Luigi",
        cognome: "Asti",
        età: "25",
    },

    {
        nome: "Alessandro",
        cognome: "Lombardi",
        età: "72",
    },

    {
        nome: "Francesco",
        cognome: "Bianchi",
        età: "13"
    },

];

const nuovoArray = [];

persone.forEach(persona => {
    if(persona.età >= 18){
        nuovoArray.push(`${persona.nome +" "+ persona.cognome} può guidare`)
    }else{
        nuovoArray.push(`${persona.nome +" "+ persona.cognome} non può guidare`)
    }
});

console.log(nuovoArray);