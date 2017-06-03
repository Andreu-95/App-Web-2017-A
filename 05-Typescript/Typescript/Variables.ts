/**
 * Created by poli_ on 3/6/2017.
 */

// nombreVariable: tipoVariable
let numero: number = 2;

// numero = "Dos";

let verdad: boolean = true;

// verdad = 0;

verdad = null;

verdad = undefined;

verdad = false;

let nombre: string = "Andres";

nombre = `Yo no soy ${verdad}`;

let arregloNumeros1: Array<number> = [1,2];

let arregloNumeros2: number[] = [1,2];

interface usuarioInt {
    nombre: string,
    apellido: string,
    nota: number,
    id: number
}

let andres: usuarioInt = {
    nombre: "Andres",
    apellido: "Guerra",
    nota: 10,
    id: 1
};

var juego = {};
juego = 2;
juego = "string";

let juego: any = 2;
juego = "nombre";
juego = {};

const amigo = "Amigo";

// amigo = "Wuey";
