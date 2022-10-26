const express = require ('express');

const aplicacion = express()

const PUERTO = 8081;

const serverListen = aplicacion.listen(PUERTO, () => {
    console.log(`Aplicacion creada con exito en puerto ${serverListen.address().port}`)
});

conexionServidor.on('error', error => console.log (`Ha ocurrido un error: ${error}`))