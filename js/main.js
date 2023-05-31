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
    ii. Función del saldo pendiente (está funcion a lo mejor puede estar dentro del evento)
     
c) Escuchar eventos:
    i.  Evento tipo 'click' sobre Play
    ii. Crear la función del evento click:
        - obtener el valor del número apostado (ev.currentTarget?
        - obtener el valor del número randoM (ev.currentTarget) 
        - Valor del selet ver si coincide con el SELECT
        - con innerHTML cambión el contenido del mensaje.
        - con innerHTM debería guardar el resultado del saldo pendiente.
*/


// CONSTANTES
const select = document.querySelector('.js_select');
const bet = document.querySelector('.js_bet');
const btn = document.querySelector('.js_btn');
const msg = document.querySelector('.js_msg');
const balance = document.querySelector('.js_balance');

const numSelect = select.value;


//console.log(numBet);
//const balanceDue = parseInt(balance.innerHTML);
//console.log(balanceDue);


// FUNCIONES
/* La función del enunciado */
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(6);
console.log(randomNumber);

function wonBet () {
    const numBet = parseInt(bet.innerHTML);
    const addBet = numBet*2 + balance;
    return addBet;
}
function lostBet () {
    const numBet = parseInt(bet.innerHTML);
    const subBet = balance - subBet;
    return addBet;
}

function handleClickBtn (e) {
    e.preventDefault();
    if (numSelect === randomNumber){
        wonBet();
        msg.innerHTML = "Has ganado el doble de lo apostado :)";
    } 
    else {
        lostBet();
        msg.innerHTML = "Has pedido lo apostado";
    }
}

// EVENTOS

btn.addEventListener('click', handleClickBtn);




