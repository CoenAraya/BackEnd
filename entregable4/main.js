const express = require('express');
const {Router , request} = express;
const rutaProductos = Router();
const Contenedor = require("./contenedor.js")
const nuevoProducto = new Contenedor('productos.json')
const aplicacion = express();




// PUERTO 
const PUERTO = 8080;



// uso de json
aplicacion.use(express.json());
aplicacion.use(express.urlencoded({ extended: true }));

//crear rutas


const prod = [];

//hago publica la carpeta
aplicacion.use(express.static(__dirname + '/public'));

// END POINTS

rutaProductos.get ('/' , async (req, res) => {
   
    const data =  await nuevoProducto.getAll();
    res.json(data)
})

rutaProductos.get ('/:id' , async (req, res) => {
    const id = parseInt(req.params.id);
    const datita = await nuevoProducto.getById(id);
<<<<<<< HEAD
    res.json(datita);
})  

rutaProductos.put ('/' , (req, res) => {
    res.send('ok')
})
rutaProductos.delete ('/:id' , (req, res) => {
    res.send('ok')
=======
    res.json(datita)
>>>>>>> 0ca53be39536d960930e64377c2f54993127fc7c
})

rutaProductos.post("/", async (req, res) => {

    const data = req.body;
    console.log(data);
    const newproduct = await nuevoProducto.save(data);
    !data && res.status(204).json(notFound);
    res.status(201).json(data);
});


rutaProductos.put ('/:id' , async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const productoEditado = await nuevoProducto.modificador(id, data);
    !productoEditado && res.status(404).json(notFound);
    res.status(200).json(productoEditado);
})

rutaProductos.delete ('/:id' , async (req, res) => {
    const id = parseInt(req.params.id);
    const producto = await nuevoProducto.getById(id);
    const eliminarProducto = await nuevoProducto.deleteById(id);
    
    res.status(200).json(producto);
})

module.exports = rutaProductos;

aplicacion.use('/productos', rutaProductos)


const serverListen = aplicacion.listen(PUERTO, () => {
    console.log(`Aplicacion creada con exito en puerto ${serverListen.address().port}`)
});

serverListen.on('error', error => console.log (`Ha ocurrido un error: ${error}`));