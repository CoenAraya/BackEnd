//DEL LADO DEL USER
import express from 'express';
import { Contenedor } from '../contenedor/contenedorFs.js';
const rutaProducto = express.Router();

const productos = new Contenedor('src/db/productos.txt');

//Ingreso del admin
const admin = (peticion, respuesta, next) => {
  const isAdmin = peticion.headers.isAdmin;
  if (isAdmin === 'admin123') {
    next();
  } else {
    respuesta.status(401).send({ error : -1, descripcion: `ruta ${peticion.url} no autorizada` });
  }
};

//Endpoints

//Muestra todos los productos
rutaProducto.get('/', async (peticion, respuesta) => {
  const listaProductos = await productos.getAll();
  respuesta.json(listaProductos);
});

//Muestra un producto
rutaProducto.get('/:id', async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const productoPorId = await productos.getById(idProducto)
  respuesta.json(productoPorId);
});

//Guarda un producto
rutaProducto.post('/', admin, async (peticion, respuesta) => {
  const data = peticion.body;
  await productos.save(data);
});

//Modifica un producto
rutaProducto.put('/:id', admin, async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const producto = peticion.body;
  await productos.update(idProducto, producto);
  respuesta.json(producto);
});

//Borra un producto
rutaProducto.delete('/:id', admin, async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  await productos.deleteById(idProducto)
});

export { rutaProducto };