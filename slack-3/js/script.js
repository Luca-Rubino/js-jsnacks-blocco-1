console.log('hi!')

// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

// let list, num, i

// list = []

// while (list.length < 5) {
//     num = Number.parseInt(prompt('dammi un numero'))
//     if (num = !Number.parseInt(prompt('dammi un numero')) && num % 2 == 1) {
//         list.push(num)
//     }

//     console.log(list)
// }

// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// const list1 = [1,2,3]
// console.log(list1)

// const list2 = [4,5,6,7,8,9]
// console.log(list2)

// if (list1.length < list2.length) {
//     list1.push(list2)
// } else {
//     list2.length.push(list1.length)
// }

// console.log(list1, list2)

// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// let i,sum

// const list = []
// console.log(list)

// sum = 0
// console.log(num)
// list.push(num)
// console.log(list)

// if (i=0, i < 50, i++) {
//     num = Number.parseInt(prompt('Dammi un numero'))
//     console.log(num)
//     list.push(num)
//     console.log(list)
// }

// correzione esercizio

// const list =[]
// let sum = 0

// while (sum < 50) {
//     let num = Number.parseInt(prompt('Dammi un numero'), 10)

//     if (Number.isNaN(num) !== true){
//         list.push(num)
//         sum = num
//     }
// }

// console.log(list, sum)

// Snack12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// function insertText(text1, text2) {
//     if (text1.length > text2.length) {
//         console.log(text1)
//     } else if (text1.length < text2.length){
//         console.log(text2)
//     } else
//         console.log(text1, text2)
// }

// let wordA, wordB
// wordA = prompt('dammi prima parola')
// wordB = prompt('dammi seconda parola')

// insertText(wordA, wordB)


// Snack13
// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertNumber(elementNumA, elementNumB){
    
}

let NumA, NumB
NumA = Number.parseInt(prompt('dammi primo numero')) 
NumB = Number.parseInt(prompt('dammi secondo numero'))

invertNumber(NumA, NumB)