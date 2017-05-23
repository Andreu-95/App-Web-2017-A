/**
 * Created by poli_ on 22/5/2017.
 */

var texto = '';
var texto2 = "";
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};

texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;

// Arreglos
var arregloNumeros = [1, 2, 3, 4, 5];
var arregloStrings = ['a', 'b', 'c'];
var arregloBooleanos = [false, true];

arregloNumeros = [1, "a", true];

var matriz = [[1,2], [3,4]];

// Objeto JSON

var objetoJSON = {
    llave: 'valor',
    llave2: 'valor2'
};

objetoJSON.llave;
objetoJSON.llave2;

var objetoComplejo = {
    nombre: 'Andres',
    apellido: 'Guerra',
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.2,
    altura: 127,
    saltar: function () {
        console.log('Saltar');
    },
    correr: function () {
        console.log('Correr');
    },
    sumar: function (a, b) {
        return a + b;
    },
    imprimirNombre: function () {
        //return objetoComplejo.nombre + ' ' + objetoComplejo.apellido;
        return this.nombre + ' ' + this.apellido;
    }
};

objetoComplejo.altura;
objetoComplejo.apellido;

objetoComplejo.imprimirNombre();

objetoComplejo.titulo = "Noob";

delete objetoComplejo.nombre;

var arregloStrings = ['1', '2'];

arregloStrings.push('3');
arregloStrings.pop();

// ['1', '3', '2']
arregloStrings.splice(1, 0, '3');

// ['3', '2']
arregloStrings.splice(0, 1);