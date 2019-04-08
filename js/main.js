"use strict";

// Constantes
const field = document.querySelector('#field');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

// Función número random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


  
// Función compara numero random con número introducido.
function compare () {
    const numRandom = getRandomInt(100);
    console.log(numRandom);

    // Crea el párrafo con la pista  
    if(numRandom === parseInt(field.value)) {
        text.innerHTML = (`¡WOUUU... ERES un portento!`);
    } else if (numRandom>parseInt(field) ){
        text.innerHTML = `¡CACHIS! El número es menor`;
    } else {
        text.innerHTML = `¡UPS! El número es mayor`;
    }
}

// Función contador
const acc = 0;


// Función listener
btn.addEventListener(`click`, compare);