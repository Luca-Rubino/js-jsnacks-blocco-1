console.log('slack-16')

// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = {
    nome: 'palla',
    peso: 10
}

palla['peso'] = prompt('quanto deve pesare la palla?')

console.log(palla)