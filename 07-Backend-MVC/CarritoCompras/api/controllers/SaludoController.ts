/**
 * Created by poli_ on 19/6/2017.
 */
declare let module;

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
  }
};
