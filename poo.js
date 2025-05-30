// // // Encapsulación en JavaScript
let persona = {
    // Propiedades (datos)
    nombre: "Paco",
    edad: 30,
    email: "paco@email.com",
    
    // Métodos (comportamiento)
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    
    cumplirAnios() {
        this.edad++;
        console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años`);
    },
    
    cambiarEmail(nuevoEmail) {
        this.email = nuevoEmail;
        console.log(`Email actualizado: ${this.email}`);
    }
};

// Uso del objeto encapsulado
persona.saludar();           // "Hola, mi nombre es Paco y tengo 30 años"
persona.cumplirAnios();      // "¡Feliz cumpleaños! Ahora tengo 31 años"
// persona.cambiarEmail("nuevo@email.com");


// // abstraccion:
// function CrearPersona(nombre, edad) {
//     // Variables privadas (no accesibles desde fuera)
//     let _nombre = nombre;
//     let _edad = edad;
//     let _historialSalud = [];  // Información sensible oculta
    
//     // Métodos privados
//     function _validarEdad(nuevaEdad) {
//         return nuevaEdad >= 0 && nuevaEdad <= 150;
//     }
    
//     // Interfaz pública (lo que se expone)
//     return {
//         // Métodos públicos
//         saludar() {
//             console.log(`Hola, soy ${_nombre}, tengo ${_edad} años`);
//         },
        
//         cumplirAnios() {
//             if (_validarEdad(_edad + 1)) {
//                 _edad++;
//                 console.log(`¡Feliz cumpleaños! Ahora tengo ${_edad} años`);
//             }
//         },
        
//         // Getter controlado
//         getEdad() {
//             return _edad;
//         }
        
//         // NO exponemos _historialSalud ni _validarEdad
//     };
// }

// // Uso
// const persona = CrearPersona("Bond", 77);
// persona.saludar();        // "Hola, soy Bond, tengo 77 años"
// persona.cumplirAnios();   // "¡Feliz cumpleaños! Ahora tengo 78 años"
// console.log(persona.getEdad()); // 78

// // ❌ No podemos acceder a los detalles internos
// console.log(persona._nombre);      // undefined
// console.log(persona._historialSalud); // undefined


// // // herencia
// // // Objeto "padre" - ElementoHTML
// // function ElementoHTML(id, contenido) {
// //     this.id = id;
// //     this.contenido = contenido;
// //     this.visible = true;
// // }

// // // Métodos compartidos
// // ElementoHTML.prototype.mostrar = function() {
// //     this.visible = true;
// //     console.log(`Elemento ${this.id} ahora visible`);
// // };

// // ElementoHTML.prototype.ocultar = function() {
// //     this.visible = false;
// //     console.log(`Elemento ${this.id} ahora oculto`);
// // };

// // ElementoHTML.prototype.focus = function() {
// //     console.log(`Foco en elemento ${this.id}`);
// // };

// // // Objeto "hijo" - CajaTexto hereda de ElementoHTML
// // function CajaTexto(id, contenido, placeholder) {
// //     ElementoHTML.call(this, id, contenido);  // Llamar constructor padre
// //     this.placeholder = placeholder;
// //     this.tipo = "text";
// // }

// // // Establecer herencia
// // CajaTexto.prototype = Object.create(ElementoHTML.prototype);
// // CajaTexto.prototype.constructor = CajaTexto;

// // // Método específico de CajaTexto
// // CajaTexto.prototype.validarInput = function() {
// //     console.log(`Validando input en ${this.id}: "${this.contenido}"`);
// // };

// // // Uso
// // const textBox = new CajaTexto("txt1", "Hola Mundo", "Ingrese texto...");
// // textBox.mostrar();        // Heredado: "Elemento txt1 ahora visible"
// // textBox.focus();          // Heredado: "Foco en elemento txt1"
// // textBox.validarInput();   // Propio: "Validando input en txt1: 'Hola Mundo'"

// // // polimorfismp:
// // // Continuando el ejemplo anterior...

// // // Checkbox hereda de ElementoHTML
// // function Checkbox(id, contenido, checked) {
// //     ElementoHTML.call(this, id, contenido);
// //     this.checked = checked;
// //     this.tipo = "checkbox";
// // }
// // Checkbox.prototype = Object.create(ElementoHTML.prototype);
// // Checkbox.prototype.constructor = Checkbox;

// // // Lista desplegable hereda de ElementoHTML
// // function ListaDesplegable(id, opciones) {
// //     ElementoHTML.call(this, id, "");
// //     this.opciones = opciones;
// //     this.seleccionado = 0;
// //     this.tipo = "select";
// // }
// // ListaDesplegable.prototype = Object.create(ElementoHTML.prototype);
// // ListaDesplegable.prototype.constructor = ListaDesplegable;

// // // ⭐ POLIMORFISMO: Cada tipo implementa render() de manera diferente
// // CajaTexto.prototype.render = function() {
// //     console.log(`<input type="${this.tipo}" id="${this.id}" placeholder="${this.placeholder}" value="${this.contenido}">`);
// // };

// // Checkbox.prototype.render = function() {
// //     const checked = this.checked ? "checked" : "";
// //     console.log(`<input type="${this.tipo}" id="${this.id}" ${checked}> ${this.contenido}`);
// // };

// // ListaDesplegable.prototype.render = function() {
// //     console.log(`<select id="${this.id}">`);
// //     this.opciones.forEach((opcion, index) => {
// //         const selected = index === this.seleccionado ? "selected" : "";
// //         console.log(`  <option ${selected}>${opcion}</option>`);
// //     });
// //     console.log(`</select>`);
// // };

// // // ⭐ USO POLIMÓRFICO: Mismo método, diferentes comportamientos
// // const elementos = [
// //     new CajaTexto("txt1", "Juan", "Nombre"),
// //     new Checkbox("chk1", "Acepto términos", true),
// //     new ListaDesplegable("sel1", ["Opción 1", "Opción 2", "Opción 3"])
// // ];

// // // Sin polimorfismo necesitaríamos switch/case
// // // Con polimorfismo, un simple bucle:
// // elementos.forEach(elemento => {
// //     elemento.render();  // Cada uno se renderiza de forma diferente
// // });


const habilitable = {
    habilitar() {
      this.habilitado = true;
      console.log(`${this.id} habilitado`);
    },
    deshabilitar() {
      this.habilitado = false;
      console.log(`${this.id} deshabilitado`);
    }
  };
  
  // Aplicamos el mixin a CajaTexto
  Object.assign(CajaTexto.prototype, habilitable);
  
  // Ahora las instancias de CajaTexto tienen esas funciones
  const txt = new CajaTexto("txt1", "Hola", "Texto...");
  txt.habilitar();     // txt1 habilitado
  txt.deshabilitar();  // txt1 deshabilitado
  