/**
 * Created by poli_ on 29/5/2017.
 */

// ECMAScript
let a = 1;

let html = "<h1>Hola</h1>" + "<p>Hola amigos</p>" + "<img src='algunURL' alt=''>" + "<a href='google'>Ir a google</a>";

let nombreUsuario = "Andrés Guerra";

let htmlTemplateConStrings = `
<h1>Hola</h1>
<p>Hola amigos</p>
<p>${nombreUsuario}</p>
<img src="algunURL" alt="">
<a href="google">Ir a google</a>
`;

console.log(htmlTemplateConStrings);