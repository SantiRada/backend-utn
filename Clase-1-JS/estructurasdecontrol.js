// let a = 10;
// let b = 15;

// let c = a == b ? true : false;

// if (a == b) { c = true; }
// else { c = false; }

// if (a == b || !c) {
    
// }

// if(a != b && !c){

// }

// // if(!c){
// //     if () {

// //     } else {

// //     }
// // }

// switch (a) {
//     case 10: console.log("A es 10"); break;
//     case 11: console.log("A es 11"); break;
//     case 12: console.log("A es 12"); break;
//     case 13: console.log("A es 13"); break;
//     case 14: console.log("A es 14"); break;
//     case 15: console.log("A es 15"); break;
//     case 16: console.log("A es 16"); break;
// }

///////////////////////////////////////////////////////////////
// ARRAYS Y OBJETOS ///////////////////////////////////////////
///////////////////////////////////////////////////////////////
// [] = corchetes // {} = llaves // () = parentesis 

// let frutas = [ "banana", "tomate", "manzana", "pera", "sandia" ];

// frutas.push("pera");
// frutas.pop();
// frutas.shift(); // elimina la posición [0] 
// frutas.unshift("sandia");

// frutas[frutas.length] = "pera"; // MALA PRÁCTICA

// BUCLES - for clásico - for in - for of - while - do while

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for(let fruta in frutas){
//     console.log("IN: " + frutas[fruta]);
// }

// for(let fruta of frutas){
//     console.log("OF: " + fruta);
// }

// let usuario = {
//     nombre: "Juan",
//     apellido: "Ramirez",
//     edad: 25,
//     frutaFavorita: frutas[3]
// };

// for(let key in usuario){
//     console.log(usuario[key]);
// }

// let newArray = Object.entries(usuario);

// console.log(newArray);

// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i][0] + ": " + newArray[i][1]);
// }

// let arrayDeObjetos = [
//     {
//         nombre: "Juan",
//         edad: 25,
//         ciudad: "Bogotá"
//     },
//     {
//         nombre: "Pedro",
//         edad: 30,
//         ciudad: "Medellín"
//     },
//     {
//         nombre: "Ana",
//         edad: 20,
//         ciudad: "Cali"
//     }
// ];

// for(let i = 0; i < arrayDeObjetos.length; i++){
//     for (let user in arrayDeObjetos[i]){
//         console.log(user + ": " + arrayDeObjetos[i][user]);
//     }
//     console.log("----------------------------");
// }

// WHILE - DO WHILE
// let pass = "hola1234";
// while (pass.length > 7) {
//     console.log("La contraseña debe tener menos de 7 caracteres");
// }

// let password;
// do {
//     if(password != undefined){
//         console.log("La contraseña no es válida");
//     }

//     password = prompt("Digite su contraseña");
// } while (password.length > 6);

// FUNCIONES DE ITERACION DE ARRAYS (map y forEach)

// for (let i = 0; i < array.length; i++) { } // Permite manipular la cantidad de iteraciones que hacemos
// for(let i in arrayDeEjemplo) { } // No se puede manipular la cantidad de iteraciones // Solo obtenemos el indice
// for(let dato of arrayDeEjemplo) { } // Solo obtenemos el valor sin indice

// let movies = [ "El Señor de los Anillos", "El Padrino", "El Rey León", "El Señor de los Anillos 2", "El Señor de los Anillos 3" ];

// MAP se utiliza para recorrer arrays y trabajar info
// movies.map( movie => console.log(movie));

// // FOREACH se utiliza para recorrer elementos con potencial interacción
// movies.forEach((movie, i) => console.log(i + ": " + movie));