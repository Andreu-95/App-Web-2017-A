module.exports = {
    attributes: {
        nombreCasual: {
            type: 'string',
            required: true
        },
        nombreInstitucional: {
            type: 'string',
            unique: true,
            required: true
        },
        direccion: {
            type: 'string',
        },
        estado: {
            type: 'string',
            enum: ['Abierto', 'Cerrado', 'Clausurado'],
            defaultsTo: 'Cerrado'
        },
        facultades: {
            collection: 'Facultad',
            via: 'idUniversidad'
        }
    }
};
