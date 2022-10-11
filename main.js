//Page del profesor

//https://github.com/arielkaizen/Programacion_backend




//Entrega Clases



class Usuario {


    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []

    }

    //Metodos

    getFullName () {
        return `${this.nombre} ${this.apellido}`
        
    }

    addMascota (nombre){

        this.mascotas.push (nombre)
       }

    countMascota (usr){
    
        console.log(usr.mascotas.length)
    }

    addBook (nom, aut){
        this.libros.push ({libro: nom , autor: aut})
    }
    
    getBookNames (){
    
        this.libros.forEach((e) => console.log(e.libro))
    }
}


// creacion de usuario
const usuario = new Usuario ("jorge", "armando")


//agrega mascotas al array mascotas
usuario.addMascota("lali")
usuario.addMascota("rene")
usuario.addMascota("braulio")

//cuenta la cantidad de mascotas que tiene el usuario
usuario.countMascota(usuario)

//agrega libros al usuario
usuario.addBook("el buen libro", "Bart" )
usuario.addBook("capitan monolito", "Rorge" )
usuario.addBook("mas barato por docena", "Cimes" )


// informa nombre de libros del ausuario
usuario.getBookNames(usuario)

console.log(usuario)

