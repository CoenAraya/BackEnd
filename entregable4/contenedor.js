const fs = require ('fs') ;



 class Contenedor {

     constructor (product){
         this.productos = product;     

     }

     async createFile (){
        try{
            fs.writeFile(this.productos, '[]', (error) =>{
               error ? console.log(error) : console.log(`Archivo ${this.productos} creado.`);
            })
        }
        catch (error) {
            console.log(error)
        }
     }

     async writeFile(archivo, contenido) {
        try {
            /* escribir archivo */
            await fs.writeFileSync(archivo, JSON.stringify(contenido, null, 4));
        } catch (error) {
            console.log(`Error escribiendo el archivo: ${error.message}`);
        }
    }

     async readFile(product){
        const data = await fs.readFileSync( product )
        return JSON.parse(data)
     }

     async modificador(id, contenido) {
        try {
            /* existe? */

                let data = await this.readFile(this.productos);
                /* busco el producto */
                let dataId = data.filter(item => item.id === id);
                if (dataId.length === 0) {
                    /* no existe da error */
                    throw new Error(
                        `El producto no existe`
                    );
                } else {
                    /* si existe elimino el produco a editar */
                    data = data.filter(item => item.id !== id);
                    /* agrego con el mismo id */
                    dataId = { id: id, ...contenido };
                    data.push(dataId);
                    /* Uso modulo para reescribir */
                    this.writeFile(this.productos, data);
                    console.log(`Producto con id ${id} modificado`);
                    return dataId;
                }
            
        } catch (error) {
            console.log(`Error modificando el producto: ${error.message}`);
        }
    }

     async save(objeto) {
        try{
        const nuevoObjeto = await this.readFile(this.productos)

        objeto = {id: nuevoObjeto.length + 1, ...objeto}

        nuevoObjeto.push(objeto)

        this.writeFile(this.productos, nuevoObjeto)
        console.log(this.productos)
        return objeto.id
     } 
        catch(error){
            console.log(error)
     }
     } 

     async getById(id){
        try{
            const nuevoObjeto = await this.readFile(this.productos)
            const prod = nuevoObjeto.filter((e) => e.id === id)
            if (prod.length == 0){
                console.log("el producto no existe")
            } else {
                return prod
            }

        }
        catch(error){
            console.log(error)
        }
     }

     async getAll(){
        try{
            const nuevoObjeto = await this.readFile(this.productos)
            

            return nuevoObjeto

        }
        catch(error){
            console.log(error)
        }
     }

     async deleteById (id){
        try{
            const nuevoObjeto = await this.readFile(this.productos)
                       
            if (nuevoObjeto.some(item => item.id === id)){
                const nuevoObjeto = await this.readFile(this.productos)
                const datos = nuevoObjeto.filter(item => item.id !== id);
                this.writeFile(this.productos, datos)
        }
    }   
        catch(error){
            console.log(error)
        }
     }

     async deleteAll(){
        fs.promises.writeFile(this.productos, '[]')

        console.log("Los archivos han sido borrados")
     }
 }

 module.exports = Contenedor