/**
 * Created by poli_ on 3/6/2017.
 */

const fs = require('fs');
const express = require('express');
const calc = require('twj-a-guerra');

var Passwords = require('machinepack-passwords');

let a = 2;
let b = 3;
let resultado = calc.calculadoraUDLA.sumar(a,b);

console.log(`Resultado: ${resultado}`);

// Encrypt a string using the BCrypt algorithm.
Passwords.encryptPassword({
    password: '1234',
}).exec({
// An unexpected error occurred.
    error: function (err) {
        console.log(`Error: ${err}`);
    },
// OK.
    success: function (result) {
        console.log(`Resultado: ${result}`);
    },
});

console.log("Empieza");

fs.readFile('texto.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log("Termina");