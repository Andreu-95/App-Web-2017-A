/**
 * Created by poli_ on 3/6/2017.
 */
class Usuario {
    public nombre: string;
    private apellido: string;

    // ? -> opcional...deben ir al final
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    /*
    constructor(public nombre: string, private apellido: string) {
    }
     */

    imprimirNombre (saludo: string, titulo?: string): string {
        return `${saludo}, ${titulo} ${this.nombre} ${this.apellido}`;
    }
}

let andres: Usuario = new Usuario("Andrés", "Guerra");

console.log(andres.imprimirNombre("Heil", "Führer"));