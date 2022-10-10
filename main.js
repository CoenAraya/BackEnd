//Entrega Clases



class Usuario {


    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []

    }


}

// creacion de usuario
const usuario = new Usuario ("jorge", "armando")

//funciones

const getFullName = (usr)=> {
    console.log(`${usr.nombre} ${usr.apellido}`)
    
}

const addMascota = (nombre)=> {

     usuario.mascotas.push (nombre)
    }

const countMascota = (usr) => {
    
    console.log(usr.mascotas.length)
}

const addBook = (nom, aut) => {
    usuario.libros.push ({libro: nom , autor: aut})
}

const getBookNames = (e) => {
    
    e.libros.forEach((e) => console.log(e.libro))
}

//nombre + apellido del usuario
getFullName(usuario);

//agrega mascotas al array mascotas
addMascota("lali")
addMascota("rene")
addMascota("braulio")

//cuenta la cantidad de mascotas que tiene el usuario
countMascota(usuario)

//agrega libros al usuario
addBook("el buen libro", "Bart" )
addBook("capitan monolito", "Rorge" )
addBook("mas barato por docena", "Cimes" )


// informa nombre de libros del ausuario
getBookNames(usuario)

console.log(usuario)

