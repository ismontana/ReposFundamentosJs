let name = "Ismontana";
let lastname = 'Kong';
let age = '19';

console.log("Soy " + name + ' y mi apellido es ' + lastname);

console.log("I'm " + name + ' ' + lastname);
console.log('I\'m ' + name + ' ' + lastname);

// Imprimir Soy Ismontana Kong y tengo 19 años
// Strings Templates o Strings Literals
//  placeholder ${}
console.log(`Soy ${ name } ${ lastname } y tengo ${ age } años`)

// Metodos y atributos para Strings
const texto = "Este Es UN TeXtO";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10))