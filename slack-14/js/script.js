console.log('slack-14')

// Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer


let userNumber = parseInt(prompt('Quanti secondi deve avere il timer?'),10)
console.log(userNumber)


setInterval(() => {
    
}, 100);


setTimeout(timer, 1000)

function timer(){
    for(let i=0;i <= userNumber; i++){
        console.log(i)
    }
}