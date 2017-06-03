/**
 * Created by poli_ on 3/6/2017.
 */
var Usuario = (function () {
    // ? -> opcional...deben ir al final
    function Usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    /*
    constructor(public nombre: string, private apellido: string) {
    }
     */
    Usuario.prototype.imprimirNombre = function (saludo, titulo) {
        return saludo + ", " + titulo + " " + this.nombre + " " + this.apellido;
    };
    return Usuario;
}());
var andres = new Usuario("Andrés", "Guerra");
console.log(andres.imprimirNombre("Heil", "Führer"));
