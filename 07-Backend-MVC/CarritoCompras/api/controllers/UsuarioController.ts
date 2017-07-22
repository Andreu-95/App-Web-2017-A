/**
 * Created by poli_ on 22/7/2017.
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
      password: parametros.password,
      fechaNacimiento: parametros.fechaNacimiento
    };

    Usuario.create(nuevoUsuario).exec((err, newUser) => {
      if (err) return res.serverError('Error al crear');

      Usuario.find().exec((err, usuariosEncontrados) => {
        if (err) return res.serverError('Error en Usuarios');
        return res.view('homepage', {usuarios: usuariosEncontrados});
      });
    });
  },

  borrarUsuario: (req, res) => {
    let params = req.allParams();

    if (params.id) {
      Usuario.destroy({id: params.id}).exec((err, usuarioBorrado) => {
        if (err) return res.serverError('Error al borrar');

        Usuario.find().exec((err, usuariosEncontrados) => {
          if (err) return res.serverError('Error en Usuarios');
          return res.view('homepage', {usuarios: usuariosEncontrados});
        });
      });
    } else {
      res.badRequest();
    }
  }
};
