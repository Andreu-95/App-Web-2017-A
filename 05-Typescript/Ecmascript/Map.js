/**
 * Created by poli_ on 29/5/2017.
 */
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor * indice;
});
console.log(resultado);
