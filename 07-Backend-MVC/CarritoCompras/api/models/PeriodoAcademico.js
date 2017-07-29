/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        fechaInicio: {
            type: 'date',
            required: true
        },
        fechaFin: {
            type: 'date',
            required: true
        },
        idCarrera: {
            model: 'Carrera',
            required: true
        },
        matriculas: {
            collection: 'Matricula',
            via: 'idPeriodoAcademico'
        }
    }
};
