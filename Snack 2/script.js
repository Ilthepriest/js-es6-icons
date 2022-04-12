// const arrayIniziale = ["grogu", "MANDO", "Luke"];

// console.log(arrayIniziale);

//  arrayIniziale.splice(0,1,"Grogu")
//  arrayIniziale.splice(1,1,"Mando")

// console.log(arrayIniziale);


function ucFirst(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

const names = ["grogu", "MANDO", "Luke"];

//map perché devo avere un nuovo array

const capitalizedNames = names.map(ucFirst)

console.log(capitalizedNames);