/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {
    attributes: {
        notaPrimerBimestre: {
            type: 'float'
        },
        notaSegundoBimestre: {
            type: 'float'
        },
        notaSupletorio: {
            type: 'float'
        },
        estado: {
            type: 'string',
            enum: ['Estudiando', 'Jalado', 'Supletorio', 'Exonerado'],
            defaultsTo: 'Estudiando'
        },
        idMatricula: {
            model: 'Matricula',
            required: true
        },
        materias: {
            collection: 'Materia',
            via: 'idMateriaMatricula'
        }
    }
};
