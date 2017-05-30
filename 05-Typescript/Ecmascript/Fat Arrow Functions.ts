/**
 * Created by poli_ on 29/5/2017.
 */

function holaMundo() {
    console.log("Hola Mundo");
}

let holaMundo2 = function () {
    console.log("Hola mundo");
};

let holaMundo3 = () => {
    console.log("Hola mundo");
};

let holaMundo4 = () => console.log("Hola mundo");

let holaMundo5 = function () {
    return 5;
};

let holaMundo6 = () => {
    let a = 2;
    return a + 3;
};

let holaMundo7 = () => 5;

let saludar = nombre => "Hola " + nombre;

let saludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}`;
