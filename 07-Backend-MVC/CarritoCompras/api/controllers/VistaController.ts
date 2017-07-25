/**
 * Created by poli_ on 1/7/2017.
 */
module.exports = {
  vistaOculta: (req, res) => {
    return res.view('Oculto/sorpresa');
  },
  homepage: (req, res) => {
    Usuario.find().exec((err, usuariosEncontrados) => {
      if (err) return res.serverError('Problema');
      return res.view('homepage', {usuarios: usuariosEncontrados});
    });
  },
  crearUsuario: (req, res) => {
    return res.view('crearUsuario');
  },
  editarUsuario: (req, res) => {
    let params = req.allParams();

    if (params.id) {

      Usuario.findOne({id: params.id}).exec((err, usuarioEncontrado) => {
        if (err) return res.serverError('No se encontró id');

        if (usuarioEncontrado.fechaNacimiento) {
          var day = usuarioEncontrado.fechaNacimiento.getDate() + 1;
          if (day < 10) day = '0' + day;
          var month = usuarioEncontrado.fechaNacimiento.getMonth() + 1;
          if (month < 10) month = '0' + month;
          var year = usuarioEncontrado.fechaNacimiento.getFullYear();

          usuarioEncontrado.fechaNacimiento = year + '-' + month + '-' + day;
        }

        return res.view('editarUsuario', {editado: usuarioEncontrado});
      });
    } else {
      return res.redirect('/');
    }
  }
};
