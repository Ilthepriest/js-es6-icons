const animali = [
    
        { 
            nome: 'leone',
            famiglia: 'felidi',
            classe: "mammiferi",
        },
        
        { 
            nome: 'cane',
            famiglia: 'canidi',
            classe: "mammiferi", 
        },

        { 
            nome: 'gallina',
            famiglia: 'fasianidi', 
            classe: "uccelli", 
        },
      
];

const mammiferi = animali.filter(animale => animale.classe === "mammiferi");

console.log(mammiferi);

