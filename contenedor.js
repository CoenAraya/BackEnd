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

     async readFile(){
        const data = await fs.promises.readFile('./productos.txt', 'utf-8')
        return data
     }

     async save(objeto) {
        try{
        const nuevoObjeto = await this.readFile()
        const pasoJSON = JSON.parse(nuevoObjeto)

        objeto.id = pasoJSON.length + 1
        pasoJSON.push(objeto)

        fs.promises.writeFile(this.productos, JSON.stringify(pasoJSON, null, 2))
     } 
        catch(error){
            console.log(error)
     }
    } 

     async getById(id){
        try{
            const nuevoObjeto = await fs.readFile()
            const pasoJSON = JSON.parse(nuevoObjeto)

            return pasoJSON.find((e) => e.id === id)

        }
        catch(error){
            console.log(error)
        }
     }

     async getAll(){
        try{
            const nuevoObjeto = await this.readFile()
            const pasoJSON = JSON.parse(nuevoObjeto)

            return console.log(pasoJSON)
        }
        catch(error){
            console.log(error)
        }
     }

     async deleteById (id){
        try{
            const nuevoObjeto = await this.readFile()
            const pasoJSON = JSON.parse(nuevoObjeto)
            
            const borrarDato = pasoJSON.find((e) => e.id == id)
            if (borrarDato){
                const itemIndex = pasoJSON.indexOf(borrarDato)
                pasoJSON.splice(1,itemIndex)
                await fs.promises.writeFile(this.productos, JSON.stringify(pasoJSON, null, 2))
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