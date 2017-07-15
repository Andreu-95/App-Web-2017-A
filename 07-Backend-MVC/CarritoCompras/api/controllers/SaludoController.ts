/**
 * Created by poli_ on 19/6/2017.
 */
declare let module;
declare let Usuario;

module.exports = {
  welcome: (req, res) => {
    // POST
    if (req.method == "POST") {
      return res.json({saludo: "hola"});
    } else {
      return res.send("Error en método");
    }
  },

  bienvenido: (req, res) => {
    // PUT
    if (req.method == "PUT") {
      return res.send("Hola");
    } else {
      return res.send("Error en método");
    }
  },

  crearUsuarioQuemado: (req, res) => {
    let parametros = req.allParams();

    let nuevoUsuario = {
      nombre: parametros.nombre,
      apellido: parametros.apellido,
      correo: parametros.correo,
    };

    Usuario.create(nuevoUsuario).exec((err, newUser) => {
      if (err) return res.serverError('Error al crear');
      return res.ok(newUser);
    });
  }
};
