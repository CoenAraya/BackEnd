import express from 'express';
import { Contenedor } from '../contenedor/contenedorFs.js';
const rutaCarrito = express.Router();

const carritos = new Contenedor('src/db/carritos.txt');
const productos = new Contenedor('src/db/productos.txt');

//Muestra los carritos

rutaCarrito.get('/', async (peticion, respuesta) => {
  const listaCarritos = await carritos.getAll();
  respuesta.json(listaCarritos);
});

//Borra un carrito

rutaCarrito.delete('/:id', async (peticion, respuesta) => {
  const idCarrito = parseInt(peticion.params.id);
  await carritos.deleteById(idCarrito);
  respuesta.json({
    status: 'ok'
  });
});

//Muestra un producto del carrito
rutaCarrito.get('/:id/productos', async (peticion, respuesta) => {
  const idCarrito = parseInt(peticion.params.id);
  const listaProductos = await carritos.getById(idCarrito);
  respuesta.json(listaProductos.productos);
});

//Agrega un carrito
rutaCarrito.post('/', async (peticion, respuesta) => {
  const carrito = {
    timestamp: Date.now(),
    productos: []
  };
  const id = await carritos.save(carrito);
  respuesta.json(id);
});

// Agrega un producto a un carrito
rutaCarrito.post('/:id/productos', async (peticion, respuesta) => {
  const idCarrito = parseInt(peticion.params.id);
  const idProducto = peticion.body.idProducto;
  const producto = await productos.getById(idProducto);
  const carrito = await carritos.getById(idCarrito);
  carrito.productos.push(producto);
  await carritos.update(idCarrito, carrito);
  respuesta.json({
    status: 'ok'
  });
});

// Borra un producto de un carrito
rutaCarrito.delete('/:id/productos/:id_prod', async (peticion, respuesta) => {
  const idCarrito = parseInt(peticion.params.id);
  const idProducto = parseInt(peticion.params.id_prod);
  const carrito = await carritos.getById(idCarrito);
  let indexToDelete = -1;
  carrito.productos.forEach((producto, index) => {
    if (producto.id == idProducto) {
      indexToDelete = index;
    }
  });
  if (indexToDelete >= 0) {
    carrito.productos.splice(indexToDelete, 1);
  }
  await carritos.update(idCarrito, carrito);
  respuesta.json({
    status: 'ok'
  });
});



export { rutaCarrito };