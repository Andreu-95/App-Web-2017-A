/**
 * Created by poli_ on 26/6/2017.
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    correo: {
      type: 'email'
    },
    fechaNacimiento: {
      type: 'date'
    },

    matriculas: {
      collection: 'Matricula',
      via: 'idUsuario'
    }
  }
};
