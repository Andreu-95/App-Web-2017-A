/**
 * Created by poli_ on 29/7/2017.
 */
module.exports = {

  attributes: {

    horaFechaInicio: {
      type: 'datetime'
    },

    horaFechaFin: {
      type: 'datetime'
    },

    estado: {
      type: 'string',
      enum: ['Matriculado', 'Pendiente', 'Denegado'],
      defaultsTo: 'Pendiente'
    },

    idPeriodoAcademico: {
      model: 'PeriodoAcademico',
      required: true
    },

    idUsuario: {
      model: 'Usuario',
      required: true
    },

    materiasMatriculas: {
      collection: 'MateriaMatricula',
      via: 'idMatricula'
    }
  }

};
