console.log('hi!')

// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

num1 = parseInt(prompt('scrivi un numero'))
num2 = parseInt(prompt('scrivi un numero'))

if (num1 > num2){
    console.log(num1)
} else {
    console.log(num2)
}

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

userName = (prompt('Come ti chiami?'))

if (isNaN(userName)){
    console.log(userName + ': Sei sulla lista')
} else {
    console.log('Non sei sulla lista')
}
