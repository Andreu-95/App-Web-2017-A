/**
 * Created by poli_ on 29/5/2017.
 */
var arregloNumeros = [1, 2, 3, 4, 5];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("El valor es " + valor);
    console.log("El índice es " + indice);
    console.log("El arreglo es " + arreglo);
});
console.log(resultado);
