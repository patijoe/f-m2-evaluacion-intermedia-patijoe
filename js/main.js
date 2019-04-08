"use strict";

// Constantes
const field = document.querySelector('#field');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const counter = document.querySelector('.counter');

// Función número random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const numRandom = getRandomInt(100);
console.log(numRandom);
  
// Función compara numero random con número introducido.
function compare () {


    // Crea el párrafo con la pista  
    if(numRandom === parseInt(field.value)) {
        text.innerHTML = (`¡WOUUU... Eres un portento!`);
    } else if (numRandom<parseInt(field.value) ){
        text.innerHTML = `¡CACHIS! El número es menor`;
    } else {
        text.innerHTML = `¡UPS! El número es mayor`;
    }
}

// Función contador
const acc = 0;

function countClick () {
   if (parseInt(field.value) !== numRandom) {
    acc = acc + 1;
   } else {
       acc = acc;
   } 
}

counter.innerHTML = countClick(acc);


// Función listener
btn.addEventListener(`click`, compare);