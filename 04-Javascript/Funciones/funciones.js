/**
 * Created by poli_ on 22/5/2017.
 */
function imprimirHolaMundo () {
    console.log("Hola mundo");
}

imprimirHolaMundo();

function imprimir (texto) {
    console.log(texto);
}

imprimir("Regreso al vacío...");

function suma2Numeros (a, b) {
    return a + b;
}

console.log(suma2Numeros(1, 2));

function operar2Numeros (n1, n2, funcion) {
    n1 += 1;
    n2 += 1;

    console.log(funcion(n1, n2));
}

operar2Numeros(2, 4, function (num1, num2) {
    return num1 * num2;
});

// For Each