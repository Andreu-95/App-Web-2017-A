/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },

    idUniversidad: {
      model: 'Universidad'
    },

    departamentos: {
      collection: 'Departamento',
      via: 'idFacultad'
    }
  }

};
