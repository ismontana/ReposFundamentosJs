// Funciones de Orden Superior
// High Order Functions
// Funciones que reciben como parametros
// Más funciones

const myFunctionWithBigName = () => {
    console.log('Función inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta función uno');
}

const funTwo = (nombre) => {
    console.log("yarbis hablale al " + nombre);
    console.log('Ejecuta función dos');
}
funOne();
funTwo('ismontana');

const funThree = (otherFunction) => {
    console.log('Inicia función tres');
    otherFunction();
    console.log('Termina función tres');
}

funThree(funOne);
funThree(() => console.log('Función de flecha'));