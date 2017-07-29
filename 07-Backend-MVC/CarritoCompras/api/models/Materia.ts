/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },

    codigoMateria: {
      type: 'string',
      unique: true,
      required: true
    },

    horasPorSemana: {
      type: 'integer',
      required: true
    },

    estado: {
      type: 'string',
      enum: ['Activo', 'Inactivo'],
      defaultsTo: 'Activo'
    },

    idMateriaMatricula: {
      model: 'MateriaMatricula',
      required: true
    }
  }

};
