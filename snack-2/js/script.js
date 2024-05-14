console.log('Hi!')

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [1, 2, 3, 4, 5]
let somma=0
for(let index=1; index < numbers.langth;index++){
    if (index % 2 === 1){
        somma+=numbers[index]
    }
}


console.log (numbers, somma)


// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// let n = prompt('Inserisci un numero');

// console.log(([nArray = (Math.floor(Math.random()))*10+1])*n);

let userNumber = Number.parseInt(prompt('Inserisci un numero'),10);
if (userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)){
    userNumber=12;
    console.warn('numero non valido')
}

for (let index=0; index<userNumber;index++){
    const tempArray = [];

    for (let k=0; k<10; k++){
        tempArray.push(Math.floor(Math.random() * 100) +1);
    }

    console.log(tempArray)
}

// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const primoDiv = (Document.createElement("div#primo"));

primoDiv.innerHTML = "Primo";
const secondoDiv = (Document.createElement("div#secondo"));

secondoDiv.innerHTML = "Primo";