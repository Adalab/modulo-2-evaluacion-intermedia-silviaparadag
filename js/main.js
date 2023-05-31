'use strict';

/* PLANTEAMIENTO INICIAL:
        1.- HTML: 
a) H1: título
b) h3 -> enunciado 
c) Form o select para los dos input:
    i- Input número aleatorio o select?
    ii- Input cantidad a  apostar
d) Butón para play
e) <p> Mensaje que va cambiando
d) <p> Saldo (Ojo en HTML no viene número...)

        2.-CSS (Al final)
a) Estilos generales de la web

        3.- JS:
a) Crear contantes de JS:
    i. input 1
    ii. input 2
    iii. botón
    iv. p mensaje
    v. p saldo
        
b) Funciones:
    i.  Función del número random
        - Generar el número ALEATORIO y guardarlo en una variable
    ii. Función de sumar el doble de lo apostado si se gana y restar si se pierde.
    iii. Función del saldo pendiente (está funcion a lo mejor puede estar dentro del evento)
     
c) Escuchar eventos:
    i.  Evento tipo 'click' sobre Play
    ii. Crear la función del evento click:
        - obtener el valor del número apostado
        - obtener el valor del número random
        - Valor del select ver si coincide con el random
        - con innerHTML cambión el contenido del mensaje.
        - con innerHTM debería guardar el resultado del saldo pendiente.
*/


// QS
const select = document.querySelector('.js_select');
const bet = document.querySelector('.js_bet');
const btn = document.querySelector('.js_btn');
const msg = document.querySelector('.js_msg');
const balance = document.querySelector('.js_balance');


// VARIABLES GLOBALES
let balanceDue = 50;
console.log(balanceDue);



// FUNCIONES
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function wonBet () {
    const numBet = parseInt(bet.value);
    balanceDue = numBet*2 + balanceDue;
    balance.innerHTML = balanceDue;
}

function lostBet () {
    const numBet = parseInt(bet.value);
    balanceDue = balanceDue - numBet;
    balance.innerHTML = balanceDue;
}

const writeMsg = (message) => {
    msg.innerHTML = message;
}

// function balanceDueResult () {
//     const updatedBalanceDue = balanceDue -  ;
// }

// Mejor usar función arrrow con variable:

const handleClickBtn = (e) => {
    e.preventDefault();
    const numSelect = select.value;
    //console.log(numSelect);
    const randomNumber = getRandomNumber(6); 
    // Esto tiene que estar aquí, para que el random aparezca cuando "hacemos el evento Click", cada vez que hagamos click.
    //console.log(randomNumber);
    if (parseInt(numSelect) === randomNumber){
        //msg.innerHTML = "Has ganado el doble de lo apostado  😀";
        writeMsg ("Has ganado el doble de lo apostado  😀"); 
        wonBet();
    } 
    else {
        //msg.innerHTML = "Has perdido lo apostado 😟";
        writeMsg ("Has perdido lo apostado 😟");
        lostBet();
    }
}

// EVENTOS
/* 
const handleClickBtn = (event) => {
    console.log('Holis');
} 
*/

btn.addEventListener('click', handleClickBtn);

/*btn.addEventListener('click', (event) => {
    console.log('Holis')
});*/
