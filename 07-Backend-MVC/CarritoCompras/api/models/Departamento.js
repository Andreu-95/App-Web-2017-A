/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        idFacultad: {
            model: 'Facultad',
            required: true
        },
        carreras: {
            collection: 'Carrera',
            via: 'idDepartamento'
        }
    }
};
