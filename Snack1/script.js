const automobili = [
    {
        marca: "fiat",
        modello: "Punto",
        alimentazione: "metano",
    },    

    {    
        marca: "Audi",
        modello: "A1",
        alimentazione: "diesel",
    },

    {   
         marca: "Mercedes",
        modello: "Classe A",
        alimentazione: "diesel",
    },

    {   
        marca: "Ferrari",
        modello: "Enzo",
        alimentazione: "benzina",
    },

    {   
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "gpl",
    },

    {   
        marca: "Citroen",
        modello: "C3",
        alimentazione: "gpl",
    },

    {   
        marca: "Tesla",
        modello: "Model 3",
        alimentazione: "elettrica",
    },

    {   
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "metano",
    },

    {   
        marca: "Toyota",
        modello: "Yaris",
        alimentazione: "elettrica",
    },

    {   
        marca: "Lamborghini",
        modello: "Aventador",
        alimentazione: "benzina",
    },
    
]

const  autoBenzina = automobili.filter(car => car.alimentazione === "benzina");

console.log(autoBenzina);

const  autoDiesel = automobili.filter(car => car.alimentazione === "diesel");

console.log(autoDiesel);

const  autoGplMetanoElettriche = automobili.filter(car =>car.alimentazione !== "diesel" &&  car.alimentazione !=="benzina");

console.log(autoGplMetanoElettriche);

