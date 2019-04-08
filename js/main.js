"use strict";

// Constantes
const field = document.querySelector('#field');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const counter = document.querySelector('.counter');
let acc = 0;
counter.innerHTML = acc;

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
        // El contador escribe solo si el número es mayor o menor
        acc += 1;
        counter.innerHTML = acc;
    } else {
        text.innerHTML = `¡UPS! El número es mayor`;
        acc += 1;
        counter.innerHTML = acc;
    }

    // si escribe el contador siempre, aciertes o no
    // acc = acc+1;
    // counter.innerHTML = acc;
}

// Función listener
btn.addEventListener(`click`, compare);