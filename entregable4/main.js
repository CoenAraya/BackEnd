const express = require('express');
const {Router} = express
const Contenedor = require("./contenedor.js")
const nuevoProducto = new Contenedor('productos.txt')


const aplicacion = express();


// PUERTO 
const PUERTO = 8080;



// uso de json
aplicacion.use(express.json());
aplicacion.use(express.urlencoded({ extended: true }));

//crear rutas

const rutaProductos = Router();
const prod = [];

// END POINTS

rutaProductos.get ('/' ,  (req, res) => {
   
    res.send('ok');
})
rutaProductos.get ('/' , (req, res) => {
    res.send('ok')
})
rutaProductos.post ('/' , (req, res) => {
    res.send('ok')
})  
rutaProductos.put ('/' , (req, res) => {
    res.send('ok')
})
rutaProductos.delete ('/' , (req, res) => {
    res.send('ok')
})


aplicacion.use('/productos', rutaProductos)


const serverListen = aplicacion.listen(PUERTO, () => {
    console.log(`Aplicacion creada con exito en puerto ${serverListen.address().port}`)
});

serverListen.on('error', error => console.log (`Ha ocurrido un error: ${error}`));