
// function tabla(){

//     function multiplicar(params) {
//         for (let index = 0; index < 10; index++) {
//             const numeroR = Array[params * index]
//             console.log(numeroR)
            
//         }
//     }
//     multiplicar(5)
// }

// tabla()


// const persona = {
//     nombre: 'Diego',
//     edad: 23,
//     hobie: 'programar',
//     lugar: {
//         pais: 'colombia',
//         departamento: 'Antioquia',
//         ciudad: 'apartado'
//     },
//     saludar: function saludar() {
//       console.log('hola'+ ' ' + this.nombre)  
//     }
// }

// const {nombre, edad,lugar} = persona
// persona.saludar()
 
// function Persona(nombre,edad,cursando) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.cursando = cursando
   
// }

// Persona.prototype.getPersona = function() {
//     return  this.nombre +' '+'Tiene la edad de'+ ' '+ this.edad +' '+ 'y estas cursando el bootcam' +' '+ this.cursando
// }


// let persona = new Persona("diego",22,"Soy Henry")
// let persona2 = new Persona("Juan",29,"Contaduria")

// console.log(persona.getPersona())
// console.log(persona2.getPersona())



class Cars {
    constructor(nombre,modelo,color){
        this.nombre = nombre
        this.modelo = modelo
        this.color = color
    }
    mostrarDetalle(){
        console.log(`el veiculos es un ${this.nombre} el modelo es del ${this.modelo} y es de color ${this.color}`)
    }
}


class Propietario extends Cars {
    constructor(nombre,modelo,color,nombrePersona, edad, fechaNcimiento){
        super(nombre,modelo,color)
        this.nombrePersona = nombrePersona;
        this.edad = edad;
        this.fechaNcimiento = fechaNcimiento
    }
} 


// let car1 = new Cars("Toyota", 2022, "Negro")
// car1.mostrarDetalle()





function saludar(parametro) {
     return `hola ${parametro} !`
}

function crearSaludo(usuario, func) {
    console.log(func(usuario))
}
// crearSaludo('diego', saludar)


let arrayNumeros = [1,2,3,4,5,6,7,8,9]

// arrayNumeros.forEach(res => console.log(res))

// for (let i = 0; i < arrayNumeros.length; i++) {
//     console.log(arrayNumeros[i])
// }

let newArray = []
arrayNumeros.map(res =>  newArray.push(res * 3))
// console.log(newArray)

let newarrayNumbrePares = []
let newarrayNumbreImpares = []

for (let i = 0; i < newArray.length; i++) {
    if(newArray[i] % 2 == 0){
        newarrayNumbrePares.push(newArray[i])
    }else if(newArray[i] % 3 == 0){
        newarrayNumbreImpares.push(newArray[i])
    }
}  

// console.log(newarrayNumbrePares)
// console.log(newarrayNumbreImpares)


let resultado = arrayNumeros.reduce((acumulador, elemento) => {
     return  acumulador + elemento
})  
// console.log(resultado)


function soloNumeros(array) {
    let newArrayNumber = [];
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number"){
            newArrayNumber.push(array[i])
        }
    }
    console.log(newArrayNumber)
}

soloNumeros([1, "diego", 2,"h", 3, 4])



function stringMasLarga(string) {
    let letra = ""
    for (let i = 0; i < string.length; i++) {
        if(string[i].length > letra.length){
            letra = string[i]
        }
    }
    console.log(letra)
    
}

stringMasLarga(["diego", "juan", "felipe"])


function buscarAmigo(amigos, nombre) {
    for (let i = 0; i < amigos.length; i++) {
        if(amigos[i].nombre === nombre){
            console.log(amigos[i])
        }
        
    }
}

buscarAmigo([{nombre:"diego",edad:23 }, {nombre:"Luis", edad:25}])



function numeroSimetrico(num) {
    if(num.toString().split("").reverse().join("") == num){
        console.log(true)
    }else{
        console.log(false)
    }
}
numeroSimetrico(11711)


function pluck(array,propiedad) {
    let newArray = [];
    array.map(res => {
        newArray.push(res[propiedad])
    })
    console.log(newArray)
}
pluck([{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }], "name")



function deObjetoAmatriz(objeto) {
    let newArray = [];
    for(let clave in objeto){
        newArray.push([[clave,objeto[clave]]])
    }
    console.log(newArray)
}

deObjetoAmatriz({D: 1, B: 2, C: 3 })


function numberOfCharacters(string) {
    let newObjeto = {}
    for (let i = 0; i < string.length; i++) {
        if(newObjeto.hasOwnProperty(string[i])){
            newObjeto[string[i]] = newObjeto[string[i]] + 1;
          }else{
            newObjeto[string[i]] = 1;
          }
        
    }
    console.log(newObjeto)
}

numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")


function capToFront(s) {
    let newMayusculas = "";
    let newMinusculas = "";
    for (let i = 0; i < s.length; i++) {
        if(s[i] === s[i].toLowerCase()){
            newMinusculas += s[i]
        }else{
            newMayusculas += s[i]
        }
        
    }

    console.log(newMayusculas + newMinusculas)
}
capToFront("soyHENRY")

function asAmirror(str) {
    let newInvertida = str.split(' ')
    arrayFinal = newInvertida.map(res => {
          return  res.split('').reverse().join((''))
    })
    console.log(arrayFinal.join(' '))
}

asAmirror("The Henry Challenge is close!")

function deleteAbc(cadena) {
    let newString = "";
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
            continue;
        }else{
            newString += cadena[i]
        }
    }
    console.log(newString)
}

// deleteAbc("abcdiego")


class Persona{
    constructor(nombre,edad,hobbies,amigos){
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
    }
    addFriend(nombre, edad) {
        this.amigos.push({nombre,edad})
    }
    getSoloAmigos(){
        let newArray =[]
        for(let nombreA of this.amigos){
            newArray.push(nombreA.nombre)
        }
        console.log(newArray)
    }
    getHobbies() {
        console.log(this.hobbies)
    }
}


let persona1 = new Persona("diego", 22, ['correr', 'dormir', 'nadar'], [{ nombre: 'Martin', },{ nombre: 'Leo'}]) 
console.log(persona1)
persona1.getSoloAmigos()
persona1.getHobbies()



function filtrar(funcion) {
    let newArray = [];
    for( let productoFilter of funcion){
        if(productoFilter.price >= 50){
            newArray.push(productoFilter)
        }
    }
    console.log(newArray)
}

filtrar(productos = [{
    price: 100,
    name: 'tv'
  }, {
    price: 50,
    name: 'phone'
  }, { 
    price: 30,
    name: 'lamp'
  }])


function menoMayor(numeros) {
    let newMayor = -Infinity;
    let newMenor = Infinity;
    for (let i = 0; i < numeros.length; i++) {
        let valorActual = numeros[i]
        if(valorActual > newMayor){
            newMayor = valorActual
        }
        if(valorActual < newMenor){
            newMenor = valorActual
        }
    }
    
    console.log([newMenor, newMayor])
}

menoMayor([9,17,6,2,4])


function mismaCantidadCaracteres(strings,caracteres) {
    let newArray = [];
    for (let i = 0; i < strings.length; i++) {
        if(strings[i].length === caracteres){
            newArray.push(strings[i])
        }else{
            console.log(`no hay string con ese numero de caracter (${caracteres})`)
        }
    }
    console.log(newArray)
}


mismaCantidadCaracteres(['hi','javaScript','pedro','amigo','parque','hello','ni hao', 'guten tag'],5)

function sumaArray(array,numero) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] !== array[j]){
                newArray.push(array[i] + array[j])
            }   
        }
    }
    console.log(newArray.includes(numero))
}

sumaArray([2,5,7,10,11,15,20], 22)


function agregarPropiedad(amigos,propiedad) {
    for(let amigo of amigos){
        if(amigo[propiedad]){
            continue;
        }else{
            amigo[propiedad] = null
        }
    }
    console.log(amigos)
}

agregarPropiedad([{nombre:'Diego',edad:22}, {nombre:'juan'}],'edad')


class Animal{
    constructor(nombre,genero,actividades){
        this.nombre = nombre;
        this.genero = genero;
        this.actividades = actividades;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
    sonar(){
        console.log('hola hago sonido por que estoy vivo')
    }
}

class Perro extends Animal {
    constructor(nombre,genero,actividades,tamaño){
        super(nombre,genero,actividades)
        this.tamaño = tamaño
    }
    ladrar(){
        console.log('Guauuu Guauuuu!!!')
    }
}


let animal = new Perro("Chester","Macho",["comida","pasear","bañar"],"Mediano")
let animal2 = new Perro("Tony","Macho",["comida","pasear","bañar"],"Mediano")
let animal3 = new Perro('Patricio',"Macho",["daler comida","estar pendiente","darle agua"],"pequeño")
let animal4 = new Perro("Margarita","Hembra",["darle comer","labar el espacio","pornele agua"],"Grande")

console.log(animal2)
animal.saludar()
animal.sonar()
console.log(animal3)
console.log(animal)
console.log(animal4)
animal.ladrar()


function numeroCaracteres(string) {
    let newString = 0;
    for (let i = 0; i < string.length; i++) {
       newString += string[i].length
    }
    console.log(newString)
    
}
numeroCaracteres("hola mundo")

function numeroCuadrado(value,callback) {
    setTimeout(() => {
        for (let i = 0; i < value.length; i++) {
            callback(value[i], value[i] * value[i])
        }
    },Math.random()*0)
}
numeroCuadrado([2,3,4,5,6,7,8,9],(value,resultado)=> {
    console.log('inicia Callback')
    console.log(`Callback ${value}, ${resultado}`)
})


function nombreCompleto(nombre,callback) {
    setTimeout(() => {
        callback(nombre)
    },0|| Math.random() * 100)
}
nombreCompleto("Diego Luis Ibañez Galindo",(respuesta) => {
    console.log(`Tu nombre completo es ${respuesta}`)
})


function cuadradoPromise(value) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        },Math.random()*1000)
    })
}

cuadradoPromise(2)
 .then(obj => {
    // console.log(obj)
    console.log('Inicio de la Promesa')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(3)
 }).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(4)
 }).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(5)
 }).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(6)
 }).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    console.log('Fin Promise')
 })
  .catch(err => {
    console.log(err)
  })


function apiPersona(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
     .then( res =>  console.log(res))
}

function recorerPersona(numero){
    for (let index = 1; index <= numero; index++) {
        apiPersona(index)
        
    }
}

recorerPersona(1) 



console.log('este es reciduo' + 21 % 5)
