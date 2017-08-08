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
            res.redirect('/');
        });
    },
    borrarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            Usuario.destroy({ id: params.id }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError('Error al borrar');
                res.redirect('/');
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
    },
    editarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            if (params.nombre == '')
                delete params.nombre;
            if (params.apellido == '')
                delete params.apellido;
            if (params.correo == '')
                delete params.correo;
            if (params.password == '')
                delete params.password;
            if (params.fechaNacimiento == '')
                delete params.fechaNacimiento;
            Usuario.update({ id: params.id }, params).exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError('Error al editar');
                return res.redirect('/');
            });
        }
        else {
            return res.redirect('/');
        }
    },
    addUsuarioCarrito: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            var cookies = req.cookies.carrito;
            console.log('Cookies:', cookies);
            if (cookies == undefined) {
                var nuevoUser_1 = [];
                nuevoUser_1.push(params.id);
                res.cookie('carrito', { idsCliente: nuevoUser_1 });
                Usuario.find().exec(function (err, usuariosEncontrados) {
                    if (err)
                        return res.serverError('Error en Usuarios');
                    return res.view('homepage', { usuarios: usuariosEncontrados, carrito: nuevoUser_1 });
                });
            }
            else {
                var cartUsers_1 = cookies.idsCliente;
                var existsUser = cartUsers_1.find(function (idUser) {
                    return idUser == params.id;
                });
                if (existsUser) {
                    return res.redirect('/');
                }
                else {
                    cartUsers_1.push(params.id);
                    res.cookie('carrito', { idsCliente: cartUsers_1 });
                    Usuario.find().exec(function (err, usuariosEncontrados) {
                        if (err)
                            return res.serverError('Error en Usuarios');
                        return res.view('homepage', { usuarios: usuariosEncontrados, carrito: cartUsers_1 });
                    });
                }
            }
        }
        else {
            res.badRequest('Sin parametros');
        }
    }
};
