const Contenedor = require('./contenedor.js')

const nuevoProducto = new Contenedor('productos.json')

const testEjercicio = async () => {

    //agregando objetos al archivo
    await nuevoProducto.save( {titulo: 'El gran libro', precio: 200}),
    await nuevoProducto.save( {titulo: 'Las ventajas de ser invisible', precio: 5100}),
    await nuevoProducto.save( {titulo: 'Mas claro que la luz', precio: 700}),
    await nuevoProducto.save( {titulo: 'El sigle', precio: 1200})
    
    //muestra un objeto segun el id
    const prodID = await nuevoProducto.getById(2);
    console.log(prodID)



    //mostrar array
    const todos = await nuevoProducto.getAll();
    console.log(todos)



    await nuevoProducto.deleteById(1)

    // borrar todo (desactivaractivar)
    // /await nuevoProducto.deleteAll()

}


testEjercicio()

