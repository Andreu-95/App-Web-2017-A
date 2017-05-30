/**
 * Created by poli_ on 29/5/2017.
 */
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor * indice;
}).some(function (valor) {
    return valor < 10;
});
console.log(resultado);
// Todos cumplen -> verdadero
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor < 1);
});
console.log(resultado2);
// Si alguno cumple -> verdadero
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor > 6);
});
console.log(resultado3);
