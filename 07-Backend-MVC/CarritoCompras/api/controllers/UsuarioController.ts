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

      res.redirect('/');
    });
  },

  borrarUsuario: (req, res) => {
    let params = req.allParams();

    if (params.id) {
      Usuario.destroy({id: params.id}).exec((err, usuarioBorrado) => {
        if (err) return res.serverError('Error al borrar');

        res.redirect('/');
      });
    } else {
      res.badRequest();
    }
  },

  buscarUsuario: (req, res) => {
    let params = req.allParams();

    if (params.search) {
      Usuario.find({
        or: [
              {nombre: params.search},
              {apellido: params.search}
            ]
      }).exec((err, usuarioEncontrado) => {
        if (err) return res.serverError('Error al buscar');

        if (usuarioEncontrado.length != 0) {
          return res.view('homepage', {usuarios: usuarioEncontrado});
        } else {
          return res.redirect('/');
        }
      });
    } else {
      return res.redirect('/');
    }
  },

  editarUsuario: (req, res) => {
    let params = req.allParams();

    if (params.id) {

      if (params.nombre == '') delete params.nombre
      if (params.apellido == '') delete params.apellido
      if (params.correo == '') delete params.correo
      if (params.password == '') delete params.password
      if (params.fechaNacimiento == '') delete params.fechaNacimiento

      Usuario.update({id: params.id}, params).exec((err, usuarioEditado) => {
        if (err) return res.serverError('Error al editar');
        return res.redirect('/');
      });

    } else {
      return res.redirect('/');
    }
  },

  addUsuarioCarrito: (req, res) => {
    let params = req.allParams();

    if (params.id) {
      let cookies = req.cookies.carrito;
      console.log('Cookies:', cookies);

      if (cookies == undefined) {
        let nuevoUser = [];
        nuevoUser.push(params.id);
        res.cookie('carrito', {idsCliente: nuevoUser});

        Usuario.find().exec((err, usuariosEncontrados) => {
          if (err) return res.serverError('Error en Usuarios');
          return res.view('homepage', {usuarios: usuariosEncontrados, carrito: nuevoUser});
        });
      } else {
        let cartUsers = cookies.idsCliente;

        let existsUser = cartUsers.find((idUser) => {
          return idUser == params.id;
        });

        if (existsUser) {
          return res.redirect('/');
        } else {
          cartUsers.push(params.id)
          res.cookie('carrito', {idsCliente: cartUsers});

          Usuario.find().exec((err, usuariosEncontrados) => {
            if (err) return res.serverError('Error en Usuarios');
            return res.view('homepage', {usuarios: usuariosEncontrados, carrito: cartUsers});
          });
        }
      }
    } else {
      res.badRequest('Sin parametros');
    }
  }
};
