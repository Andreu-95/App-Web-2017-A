/**
 * Created by poli_ on 3/6/2017.
 */
var arreglo = [
    {
        nombre: "Andres",
        apellido: "Guerra",
        nota: 10,
        id: 1
    },
    {
        nombre: "Patricio",
        apellido: "Chavez",
        nota: 9,
        id: 2
    },
    {
        nombre: "Andres",
        apellido: "Perez",
        nota: 4,
        id: 3
    },
    {
        nombre: "Carlos",
        apellido: "Paez",
        nota: 7,
        id: 4
    },
    {
        nombre: "Luis",
        apellido: "Orozco",
        nota: 2,
        id: 5
    }
];
arreglo.filter(function (valor) {
    return valor.id > 3;
});
