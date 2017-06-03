/**
 * Created by poli_ on 29/5/2017.
 */

let arreglo = [1,2,3,4,5];
let resultado = arreglo.map((valor, indice, arreglo) => {
    return valor * indice;
}).some((valor) => {
    return valor < 10;
});

console.log(resultado);

// Todos cumplen -> verdadero
let resultado2 = arreglo.every((valor, indice, arreglo) => {
    return (valor < 1);
});

console.log(resultado2);

// Si alguno cumple -> verdadero
let resultado3 = arreglo.some((valor, indice, arreglo) => {
    return (valor > 6);
});

console.log(resultado3);