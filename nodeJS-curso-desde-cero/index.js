const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Mundo con express y Node</h1>')
    res.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});
/**
 * Creando un servidor con el modulo http del nucleo de node
 */
/*
const http = require('http');

const colors = require('colors');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde NodeJS</h1>');
    res.end();
    
}).listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});
*/ 
/**
 * Estructura típica  en el desarrollo dentro de NodeJS
 * Código Asincrono
 */
/*
const fs = require('fs');

fs.writeFile('./texto.txt', 'Línea uno de mi archivo creado desde Node.js', function(err) {
    if(err){
        console.log(err);
    }
   console.log('Archivo creado Exitosamente!!!!!!!')
});

console.log('Última línea de código!!!!!')
*/
/**
 * Utilizando modulo Operating System  de Node
 */
/*
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
*/

/**
 * Mostrando como exportar  modulos  completos  y  también funciones, variables 
 */
/*
const math = require('./math.js');

console.log(math);
*/