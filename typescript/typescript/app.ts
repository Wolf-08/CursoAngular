(function(){

function saludar (nombre: string){
    console.log('hola', nombre)
}

saludar('pedro')

//Argumentos por defecto y obligatorios
function activar (quien: string, momento?: string, objeto: string = 'batisenial'){
console.log(`${quien} activo la ${objeto} en la ${momento}`)
}
activar('Gordon','hace rato');

//Funciones flecha 
// Esta es una funcion tradicional...
const miFunciont = function (parametro : string){
    return parametro;
}
//Transformando la funcion a una funcion Flecha 
 const funcionF = (parametro : string ) => {
     return parametro;
 }
 // Lo que hace mas beneficioso a las funciones flecha es 
 // poder quitar las llaves si solo se regresa una linea de codigo 
 const funcionF2 = (parametro : string ) => parametro;

 const funcionF3 = (numeroa: number, numerob: number ) => numeroa + numerob;

 console.log(funcionF3(6,8));

 const hulk = {
     nombre : "hulk",
     smash(){
         setTimeout(()=>{
            console.log(`${ this.nombre} smashh `)
         },1000)
     }
 }
 hulk.smash();


 //DESTRUCTURACION DE UN OBJETO 
 const developer ={
     nivel : "basico",
     lenguaje : " python javascript",
     meta : "senior"
 }

 const {nivel, meta}  = developer

 console.log(nivel,meta)
 
 const EXTRAER_DATOS = ({nivel,meta}: any) =>{

    console.log(nivel + ' la meta es' + meta);

 }
 EXTRAER_DATOS(developer)

 //Destructuracion de un arreglo 
 let lenguajes: string [] = ['javascript','python','c',]
 const [uno,dos,tres] = lenguajes
  console.log(uno)
  console.log(dos)
  console.log(tres)



const EXTRAER_DATOS_ARR = ([uno,dos,tres]: string[]) =>{
    console.log( uno)
    console.log( dos)
    console.log( tres)


}
EXTRAER_DATOS_ARR(lenguajes);

console.log('Inicio')

//Las promesas necesitan como parametro una funcion flecha 
//los parametros de la funcion flecha son valores que normalmente se usan 
// cuando todo sale bien  y cuando todo sale mal resolve y reject al parecer son metodos.
const prom1 = new Promise((resolve,reject)=>{
//Definicion de la promesa
    setTimeout(()=>{
        reject('Mensaje DE FALLO')
    },1000)
});

//then es para cachar cuando se resulve correctamente la prmeso con resolve
//cath es para cachcar cuando no se resuelve la promesa con reject 
prom1.then( mensaje => console.log(mensaje))
    .catch(err => console.warn(err))
console.log('Final')

const retirarDinero = (montoRetirar:number): Promise <number>=>{
 let dineroTotal = 1000;

 return new Promise((resolve,reject)=>{

    if(montoRetirar > dineroTotal ){
        reject('Fondos Insuficientes')
    }else {
        dineroTotal -= montoRetirar;
        resolve(dineroTotal)
    }

 })

}

retirarDinero(1500).then(montoActual => console.log(`Dinero actual ${montoActual}`))
.catch(err => console.warn(err))

//Interfaces 

interface Xmen  {
    nombre: String,
    edad : number,

}

const enviarMision = (xmen: Xmen) =>{
    console.log(`Enviando a ${xmen.nombre} a la mision`)

}

const wolwerine: Xmen= {
nombre: "perro",
edad : 30,
    
}
 
enviarMision(wolwerine)

 class Avenger {

    nombre : string;
    edad: number;
    puedePelear : boolean;
    poder : string;
//Propiedad inicializada en la clase con el valor que se le manda al momento de crear el objeto 
    constructor ( nombre: string, edad: number, poder:string, puedePelear: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.poder = poder;
        this.puedePelear = puedePelear;
    }
 }

 const antman = new Avenger('spiderman',45,'piquete',true);

console.log(antman);



//Examen practica Curso de Angular- Typescript


// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto
interface HEROE {
    nombre: string;
    artesMarciales: string[];
}


const batman:HEROE = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
 
 
// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

const resultadoDobleExamen = (a:number, b:number ) => (a+b) * 2
 console.log(resultadoDobleExamen(2,3));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"


function getAvenger( nombre: string, poder?: string, arma: string = 'arco' ):string{
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + arma
  }
  return mensaje
};
 
 

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    calcularArea = ():number => this.base * this.altura;
    constructor (public base: number, public altura: number){
    }   
}

let rectangulo = new Rectangulo(4,5);
console.log(rectangulo.calcularArea())


})();

