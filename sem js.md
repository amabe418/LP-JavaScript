## Modelo de objetos de **Javascript**

JavaScript utiliza un modelo de objetos basado en prototipos para la creación y manipulación de objetos. En este modelo los objetos no son creados mediante la instanciación de clases, sino mediante la clonación de otros objetos o mediante la escritura de código por parte del programador. De esta forma los objetos ya existentes pueden servir de prototipos para los que el programador necesite crear.

En lenguajes basados en prototipos no hay clases explícitas y objetos heredan directamente de otros objetos con los que están vinculados a través de una propiedad, a menudo llamados prototipo como en el caso de Javascript. Hay dos métodos de construcción de nuevos objetos: La creación ex nihilo ("de la nada") de un objeto o por medio de la clonación de un objeto existente. El primero se apoya a través de algún tipo de objeto literal, declaraciones donde los objetos se pueden definir en tiempo de ejecución a través de una sintaxis especial como Prototipo y pasan directamente a una variable. Aunque la mayoría de los sistemas den apoyo a una variedad de clonación, la creación de objetos ex nihilo no es tan prominente.

En el caso de Javascript, cuando intentamos acceder a una propiedad de un objeto y no está presente en el propio objeto, JavaScript buscará esa propiedad en su prototipo. Si no la encuentra allí, buscará en el prototipo del prototipo, y así sucesivamente, hasta llegar al objeto Object.prototype, que es el último en la cadena de prototipos. Todos los objetos en JavaScript heredan propiedades y métodos de Object.prototype, lo que significa que métodos como toString(), valueOf(), hasOwnProperty(), entre otros, están disponibles para todos los objetos.

Cada función en JavaScript tiene una propiedad llamada prototype. Cuando creas un objeto utilizando el operador new con una función constructora, el objeto recién creado hereda todas las propiedades y métodos definidos en la propiedad prototype de esa función constructora.

También podemos crear funciones constructoras para crear objetos con propiedades y métodos comunes. Por ejemplo:

```javascript
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
};

var persona1 = new Persona("Paco", 30);
persona1.saludar(); // Imprime: "Hola, mi nombre es Paco"
```
Además de la herencia a través de funciones constructoras, JavaScript también proporciona el método Object.create() para crear un objeto con un prototipo específico. Este método permite establecer directamente el prototipo del objeto creado.

```javascript
var persona2 = Object.create(persona1);
persona2.nombre = "Marta";
persona2.saludar(); // Imprime: "Hola, mi nombre es Marta"
```

## ¿Al no existir clases en un lenguaje este no es orientado a objetos?

Antes de responder a esta pregunta, primero es necesario saber qué es la programación orientada a objetos y sus cuatro principios básicos. La programación orientada a objetos (POO) es un estilo de programación que se centra en objetos en lugar de funciones. En otras palabras, se centra en lo que los desarrolladores quieren manipular y no en cómo quieren manipularlo.

Los cuatro conceptos centrales de la programación orientada a objetos son:

### Encapsulación

En POO combinamos un grupo de variables y funciones relacionadas en una unidad, es decir, un objeto. Las variables se denominan propiedades y las funciones, métodos. En JS claramente tenemos encapsulación mediante objetos.

```javascript
let persona = {
   nombre: "Paco",
   edad: 30,
   saludar() {
      console.log("Hola, mi nombre es Paco y tengo 30 años");
   }
};
```

### Abstracción

Podemos ocultar algunas de las propiedades y métodos desde el exterior y mostrar solo lo esencial, lo que nos brinda un par de beneficios:

- Simplifica la interfaz de los objetos.
- Reducir el impacto del cambio.

En JS podemos ocultar de manera definitiva cualquier detalle de implementación usando clausuras. Por ejemplo:

```javascript
function Persona(nombre, edad) {
    // this.nombre = nombre // No queremos mostrar `nombre`

    this.saludar = function() {
        console.log("Hola, soy " + nombre + ", tengo " + edad + "años")
    }
}

james = Person("Bond", 77)
james.saludar() // Hola, soy Bond, tengo 77 años
```

### Herencia

Es un mecanismo que permite a un programador eliminar código redundante. Por ejemplo, elementos HTML como cuadros de texto, casillas de verificación y listas desplegables. Todos estos elementos tienen pocas propiedades en común, es decir, oculto, HTML interno, etc., y métodos, es decir, clic(),enfoque(), etc. En lugar de redefinir todas estas propiedades y métodos para cada tipo de elemento HTML, podemos definirlo una vez por un objeto genérico como un elemento HTML y hacer que otros objetos (cuadro de texto, cuadro de verificación, listas desplegables) hereden estas propiedades y métodos.

La herencia en JavaScript es diferente de otros lenguajes de programación orientada a objetos porque hereda objetos en lugar de clases. Su propósito es reutilizar las propiedades y métodos de un objeto con otros objetos heredados.

### Polimorfismo

Poli significa muchas y morph significa forma, por lo que polimorfismo simplemente significa muchas formas. Es una técnica que permite al programador deshacerse de cambios largos y declaraciones de casos. Volvamos al ejemplo de los elementos HTML. Todos los objetos (cuadro de texto, casilla de verificación, listas desplegables) deberían poder representarse en una página, ¿verdad? Pero la forma en que se representa cada elemento es diferente de los demás. Entonces, desde el punto de vista procedural, todos serían casos distintos. Pero en POO podemos implementar un método de renderizado en cada uno de estos objetos y el método de renderizado se comportará de manera diferente según el tipo de objeto al que hace referencia el espectador.

## Adiciones al lenguaje luego de **ECMAScript 6**.

### La palabra clave `let`

La palabra clave `let` permite declarar variables con tiempo de vida limitado al bloque, el tiempo de vida de una variable declarada con `var` es limitado por el scope de la función que la contiene o directamente del scope global.

```javascript
var x = 10;
// x es 10
{
  let x = 2;
  // x es 2
}
// x es 10
```

Las variables declaradas con `let` no pueden ser redeclaradas, las declaradas con `var` si.

```javascript
let x = 10
var y = 11

var y = "string" // OK
let x = 11 // No se puede redeclarar
```

Estas dos características juntas cambian por completo el comportamiento de las variables. Nótese que podrían existir o no variables en dependencia de a que rama de un `if` entre el programa.

```javascript
if (someBool) {
   var x = 1
}

// x existe si someBool es true
```

```javascript
var x = 10;
// x es 10

{
   var x = 2;
   // x es 2
}

// x es 2
```

Las variables declaradas con `var` son "elevadas" al inicio de su scope, por lo que pueden ser inicializadas en cualquier momento.

```javascript
x = 10 // OK
var x;
```

### La palabra clave `const`

La palabra clave `const` permite declarar variables con valor constante, funciona de manera similar a `let` pero los valores no pueden ser cambiados.

### Funciones flecha (lambda)

Las funciones flecha permiten definir funciones de manera más simple.

```javascript
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```

Las funciones flecha en general NO son equivalentes a las funciones definidas con `function`, la diferencia más notable es que no cuentan con su propio `this`, cualquier referencia a `this` usa el `this` del scope superior, además las funciones definidas con `function` son "elevadas", las funciones flecha no.

### El operador `...`

El operador `...` (spread) expande un iterable a sus elementos.

```javascript
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```

### Ciclo `for/of`

Este ciclo se diferencia del `for/in` en que este último itera sobre las propiedades de un objeto y `for/of` itera sobre los elementos de un iterable.

```javascript
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

// JohnDoe25

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// Equivalente a lo siguiente

txt = "";
for (let n of numbers) {
  txt += n;
}
```

### Maps

Asocian dos valores, se diferencia de los objetos por el hecho de que la llave puede ser cualquier objeto, no solo un string.

```javascript
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
```

### Sets (Conjuntos)

```javascript
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
```

### Clases (azúcar sintáctico)

```javascript
// Equivalente al ejemplo del principio
class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }

   saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
   }
}
```

### Promesas (resultados asíncronos)

```javascript
const myPromise = new Promise(function(myResolve, myReject) {
   setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(console.log) // I love You!!
```

### El tipo `Symbol`

El tipo `Symbol` funciona como un tipo primitivo con la característica especial de ser únicos, esto sumado al hecho que puede ser usado como llave nos deja definir propiedades inaccesibles a terceros.

```javascript
const person = {
   firstName: "John",
   lastName: "Doe",
   age: 50,
   eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined
```

### Parámetros con valores por defecto

```javascript
function myFunction(x, y = 10) {
   // y is 10 if not passed or undefined
   return x + y;
}
myFunction(5); // will return 15
```

### Módulos

Permite separar el programa en diferentes archivos y añade al lenguaje las construcctiones necesarias para importar y exportar objetos (requiere soporte del navegador).

```javascript
<script type="module">
import message from "./message.js";

export const name = "Jesse";
export const age = 40;

// Equivalente a lo siguiente
// const name = "Jesse";
// const age = 40;

// export {name, age};

// Luego en otro archivo
import { name, age } from "./person.js";
</script>
```