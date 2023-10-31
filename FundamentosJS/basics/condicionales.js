//Condicional If
//if(exp){}
let age = 18;
if(age >= 18){
    console.log('Es mayor de edad');
}

//if(exp){} else {}
if(age >=18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}
// if ternario (exp)? true: false;
age >=18? console.log('Es mayor'): console.log('Es menor');

//if(exp){} else if (exp) else {}
let ppt = Math.random();
if(ppt < 0.33){
    console.log('Cayo Piedra');
} else if (ppt < 0.66){
    console.log('Cayo Papel');
} else {
    console.log('Cayo Tijera');
}

// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
    console.log('Es Domingo');
    break;
    case 1:
    console.log('Es Lunes');
    break;
    case 2:
    console.log('Es Martes');
    break;
    case 3:
    console.log('Es Miercoles');
    break;
    case 4:
    console.log('Es Jueves');
    break;
    case 5:
    console.log('Es Viernes');
    break;
    default:
    console.log('Es Sábado');
}

// Truthy and Falsy
// '' == false
console.log('' === false)
// 'a' == true
console.log('a' === true)
// 0 == false
console.log(0 === false)
// 1 == true
console.log(1 === true)

let username = '';
let defaultname;

if(username){
    defaultname = username;
} else {
    defaultname = 'Extraño';
}
console.log(defaultname);

username = 'Peter';
defaultname = username || 'Extraño';
console.log(defaultname);