module.exports = {
    welcome: function (req, res) {
        // POST
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en método");
        }
    },
    bienvenido: function (req, res) {
        // PUT
        if (req.method == "PUT") {
            return res.send("Hola");
        }
        else {
            return res.send("Error en método");
        }
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombre: parametros.nombre,
            apellido: parametros.apellido,
            correo: parametros.correo,
            password: parametros.password,
            fechaNacimiento: parametros.fechaNacimiento
        };
        Usuario.create(nuevoUsuario).exec(function (err, newUser) {
            if (err)
                return res.serverError('Error al crear');
            Usuario.find().exec(function (err, usuariosEncontrados) {
                if (err)
                    return res.serverError('Error en Usuarios');
                return res.view('homepage', { usuarios: usuariosEncontrados });
            });
        });
    },
    borrarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            Usuario.destroy({ id: params.id }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError('Error al borrar');
                Usuario.find().exec(function (err, usuariosEncontrados) {
                    if (err)
                        return res.serverError('Error en Usuarios');
                    return res.view('homepage', { usuarios: usuariosEncontrados });
                });
            });
        }
        else {
            res.badRequest();
        }
    },
    buscarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.search) {
            Usuario.find({
                or: [
                    { nombre: params.search },
                    { apellido: params.search }
                ]
            }).exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError('Error al buscar');
                if (usuarioEncontrado.length != 0) {
                    return res.view('homepage', { usuarios: usuarioEncontrado });
                }
                else {
                    return res.redirect('/');
                }
            });
        }
        else {
            return res.redirect('/');
        }
    }
};
