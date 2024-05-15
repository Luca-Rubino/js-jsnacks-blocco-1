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

let list1, list2

list1 = [1,2,3]
list2 = [4,5,6,7,8,9]

if (list1 < list2) {
    list1.push(list2)
} else if (list1 > list2) {
    list2.push(list1)
}