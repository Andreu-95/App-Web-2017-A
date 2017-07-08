/**
 * Created by poli_ on 1/7/2017.
 */
declare let module;

module.exports = {
  vistaOculta: (req, res) => {
    return res.view('Oculto/sorpresa');
  },
  homepage: (req, res) => {
    let usuarioModelo = {
      nombre: 'Andres',
      apellido: 'Guerra',
      id: 1
    };

    return res.view('homepage', {usuario: usuarioModelo});
  }
};
