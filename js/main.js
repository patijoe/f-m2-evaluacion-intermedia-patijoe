"use strict";

// Constantes
const field = document.querySelector('#field');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const counter = document.querySelector('.counter');
let numRandom = getRandomInt(100);
console.log(numRandom);
const win = document.querySelector('HTML');
const btnReset = document.querySelector('.btnReset');
let acc = 0;

// Función número random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Función innerHTML
function insert (element, phrase) {
    element.innerHTML = phrase;
}

// Función compara numero random con número introducido.
function compare () {
    const fieldValueInt = parseInt(field.value);

    // Crea el párrafo con la pista  
    if (field.value === '') {
        insert (text, `Prueba suerte, introduce un número`);
    } else if(numRandom === fieldValueInt) {
        insert (text, `¡WOUUU... Eres un portento!`);
    } else if (fieldValueInt<0 ){
        insert (text, `No valen números negativos :)`);
        // Hago q el contador cuente solo cuando se falla
        acc += 1;
        insert (counter, acc);
    } else if (fieldValueInt>100){
        insert (text, `El número random es solo hasta 100 ;)`);
        acc += 1;
        insert (counter, acc);
    } else if (numRandom<fieldValueInt ){
        insert (text, `¡CACHIS! El número es menor`);
        acc += 1;
        insert (counter, acc);
    } else if (numRandom>fieldValueInt ){
        insert (text, `¡UPS! El número es mayor`);
        acc += 1;
        insert (counter, acc);

}}

// Función que permite validar número presionando enter.
function active () {
    console.log(event);
   if (event.keyCode ===13) {
       compare();
   }
}

//Función reset
function reset () {
    acc=0;
    insert (counter, acc);
    field.value = ``;
    insert (text, 'Escibe un número de prueba');
    let numRandom = getRandomInt(100);
    console.log(numRandom);

}

// Función listener
btn.addEventListener(`click`, compare);
win.addEventListener(`keypress`, active);
btnReset.addEventListener(`click`, reset);