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
  }
};
