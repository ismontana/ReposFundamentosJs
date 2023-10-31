const url = "http://127.0.0.1:5500/"

console.log('Inicia Petición 1');
fetch(url + 'respuestas.txt')
    .then(respuesta => respuesta.text())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))
    
    
    console.log('Inicia Petición 2');
    fetch(url + 'respuestas.json')
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))