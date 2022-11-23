//LADO DEL SV
import express from 'express';

//RUTAS A UTILIZAR
import { rutaProducto } from './routes/productos.js';
import { rutaCarrito } from './routes/carrito.js';

const aplicacion = express();

const port = process.env.PORT || 8080;


aplicacion.use(express.json());
aplicacion.use(express.urlencoded({ extended: true }));


aplicacion.use('/api/productos', rutaProducto);
aplicacion.use('/api/carrito', rutaCarrito);

//Midleware de rutas no implementadas
aplicacion.use((peticion, respuesta, next) => {
  if (!peticion.route) {
    respuesta.status(404).send({ error : -2, descripcion: `ruta ${peticion.url} no encontrada` });
  } else {
    next();
  }
})

//SV
const servidor = aplicacion.listen(port, () => {
  console.log(`Servidor escuchando: ${servidor.address().port}`);
});

servidor.on('error', error => console.log(`Error: ${error}`));


