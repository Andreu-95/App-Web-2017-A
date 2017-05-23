/**
 * Created by poli_ on 22/5/2017.
 */
var arregloStrings = ['1', '2'];

arregloStrings.push('3');
arregloStrings.pop();

console.log(arregloStrings);

// ['1', '3', '2']
arregloStrings.splice(1, 0, '3');
console.log(arregloStrings);

// ['3', '2']
arregloStrings.splice(0, 1);
console.log(arregloStrings);