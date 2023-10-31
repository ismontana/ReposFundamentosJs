// Funciones en JavaScript
/*
function nombre(params){
    body function
}
const nombre = funtion (params){
    body function
}
*/
// Funciones sin parametros, y sin retorno
function saludo(){
    console.log('HellooooooooOOoO');
}
saludo();

// Funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Holii ' + name);
}
saludaA('Ismael la fonkin bestialidad bbrrrrr');

// Funciones con parametros y con retorno
const fact = function(num){
    if(num === 0) return 1;
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Arrow Functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnChino = () =>{
    console.log('Ni Hao')
}
saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('hola');

// con 1 parametro sin retorno
const minuscula = (word) => {
    console.log(word.toUpperCase());
}
minuscula('HELLO');

// Dos o más parámetros y con retorno
const fullName = (firtName, lastName) => {
    return firtName + ' ' + lastName;
}
const nombreCompleto = fullName('Ismael', 'Bestialidad');
console.log(nombreCompleto);

// Si el return es la unica linea que se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
    return num * 2;
}*/

// Funciones con parametros opcionales
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${ user }`);
}

welcomeToMexico();
welcomeToMexico("Yo?????");

// Parametros con nombre
const welcomeToUtt = (user = 'Invitado',
                        city = 'México') => {
                    console.log(`Bienvenido ${ user } de ${ city }`)
}
welcomeToUtt();
welcomeToUtt('Novita', 'Honduras');
welcomeToUtt(city = 'Apizaco', user = 'Aquaman')