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
