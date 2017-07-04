/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require('jsonwebtoken');

module.exports = {
	Emitir: function (req, res) {
    var parametros = req.allParams();

    // Tiempo, datos, secreto

    if (parametros.id) {
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          id: parametros.id
        }
      }, 'mi mama me mima');

      return res.ok(token);
    } else {
      return res.badRequest('No envía ID');
    }
  },
  Validar: function (req, res) {
    var parametros = req.allParams();

    if (parametros.token) {
      var decodificar = jwt.verify(parametros.token, 'mi mama me mima');
      return res.ok('Decodificado');
    } else {
      return res.badRequest('No envía token')
    }
  }

};

