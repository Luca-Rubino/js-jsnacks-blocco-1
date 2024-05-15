console.log('hi!')

// // L'utente inserisce due numeri in successione, con due prompt.
// // Il software stampa il maggiore.

// num1 = parseInt(prompt('scrivi un numero'))
// num2 = parseInt(prompt('scrivi un numero'))

// if (num1 > num2){
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

// let guestList = ['Mario', 'Aldo', 'Luca', 'Peppe', 'Antonio', 'Chiara']

// let userName = (prompt('Come ti chiami?'))

// if (isNaN(userName), guestList.includes() ){
//     console.log(userName + ': Sei sulla lista')
// } else {
//     console.log('Non sei sulla lista')
// }

// // Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero,se è dispari inseriscilo nell'array.

// guestList = []
// let userNumber = prompt('Dammi un numero')

// if (userNumber % 2 == 0) {
//     guestList.indexOf(userNumber) 
// }
// console.log(userNumber)

// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

let list, num

list = []

num = Number.parseInt(prompt('dammi un numero'))

while (isNaN(num)) {
    num = Number.parseInt(prompt('dammi un numero'))
}
