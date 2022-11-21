const express = require('express');
const {Router} = express
const Contenedor = require("./contenedor.js")
const nuevoProducto = new Contenedor('productos.json')


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

rutaProductos.get ('/' ,  async (req, res) => {
    const datita = await nuevoProducto.getAll()
    res.json(datita);
})

rutaProductos.get ('/:id ' , async (req, res) => {
    const id = parseInt(req.params.id);
    const datita = await nuevoProducto.getById(id);
    res.json(datita);
})  

rutaProductos.put ('/' , (req, res) => {
    res.send('ok')
})
rutaProductos.delete ('/:id' , (req, res) => {
    res.send('ok')
})


aplicacion.use('/productos', rutaProductos)


const serverListen = aplicacion.listen(PUERTO, () => {
    console.log(`Aplicacion creada con exito en puerto ${serverListen.address().port}`)
});

serverListen.on('error', error => console.log (`Ha ocurrido un error: ${error}`));