/**
 * Created by poli_ on 29/5/2017.
 */
// ECMAScript
var a = 1;
var html = "<h1>Hola</h1>" + "<p>Hola amigos</p>" + "<img src='algunURL' alt=''>" + "<a href='google'>Ir a google</a>";
var nombreUsuario = "Andrés Guerra";
var htmlTemplateConStrings = "\n<h1>Hola</h1>\n<p>Hola amigos</p>\n<p>" + nombreUsuario + "</p>\n<img src=\"algunURL\" alt=\"\">\n<a href=\"google\">Ir a google</a>\n";
console.log(htmlTemplateConStrings);
