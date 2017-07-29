/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        idDepartamento: {
            model: 'Departamento',
            required: true
        },
        periodosAcademicos: {
            collection: 'PeriodoAcademico',
            via: 'idCarrera'
        }
    }
};
