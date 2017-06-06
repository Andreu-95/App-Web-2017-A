/**
 * Created by poli_ on 5/6/2017.
 */

let Passwords = require('machinepack-passwords');

exports.calculadoraUDLA = {
    sumar: (n1, n2) => {
        return n1 + n2;
    },
    restar: (n1, n2) => {
        return n1 - n2;
    },
    multiplicar: (n1, n2) => {
        return n1 * n2;
    },
    passwords: Passwords
};