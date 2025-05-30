// // let

//  var x = 10;
//  {
//    let x = 2;  // x es 2 solo aquí
//  }
// // // x sigue siendo 10

// let y = 5;
// let y = 6; // Error: no se puede redeclarar

// const
// const PI = 3.14159;
PI = 3.14; // Error: no se puede reasignar

const persona = { nombre: "Juan" };
persona.nombre = "Pedro"; // OK: modifica contenido
persona = {}; // Error: no se puede reasignar

// // arrow function

// Función tradicional
var suma = function(a, b) { return a + b; }

// Función flecha
const suma = (a, b) => a + b;

// En callbacks
[1,2,3].map(x => x * 2); // [2,4,6]

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const persona = {nombre: "Ana"};
const completa = {...persona, edad: 25};

// // for of

const numeros = [10, 20, 30];

// for/in (índices)
for (let i in numeros) {
  console.log(i); // "0", "1", "2"
}

// for/of (valores)
for (let numero of numeros) {
  console.log(numero); // 10, 20, 30
}

// maps
const mapa = new Map();
mapa.set("nombre", "Carlos");
mapa.set(42, "número");
mapa.set({id: 1}, "objeto");

console.log(mapa.get("nombre")); // "Carlos"
console.log(mapa.size); // 3

// // sets
const conjunto = new Set([1, 2, 2, 3, 3]);
console.log([...conjunto]); // [1, 2, 3]

conjunto.add(4);
console.log(conjunto.has(2)); // true
console.log(conjunto.size); // 4

// class
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      return `Hola, soy ${this.nombre}`;
    }
  }
  
//   const juan = new Persona("Juan", 30);

// //  clases

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Éxito!"), 1000);
  });
  
  promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));  

// //simbolos
const id = Symbol('id');
const persona = {
  nombre: "María",
  [id]: 12345
};

// console.log(persona.nombre); // "María"
// console.log(Object.keys(persona)); // ["nombre"] 

// // parametros por defecto:

function saludar(nombre = "Usuario", idioma = "es") {
    return idioma === "es" ? `Hola ${nombre}` : `Hello ${nombre}`;
}

//   console.log(saludar()); // "Hola Usuario"
//   console.log(saludar("Ana", "en")); // "Hello Ana"

// modulos
// archivo: utils.js
export const PI = 3.14159;
export function calcular(x) { return x * PI; }
export default function saludar() { return "Hola"; }

// archivo: main.js
import saludar, { PI, calcular } from './utils.js';