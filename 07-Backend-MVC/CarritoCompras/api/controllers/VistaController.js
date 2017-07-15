/**
 * Created by poli_ on 1/7/2017.
 */
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        Usuario.find().exec(function (err, usuariosEncontrados) {
            if (err)
                return res.serverError('Problema');
            return res.view('homepage', { usuarios: usuariosEncontrados });
        });
    },
    crearUsuario: function (req, res) {
        return res.view('crearUsuario');
    }
};
