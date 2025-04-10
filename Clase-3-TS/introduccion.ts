let nombre : string;
nombre = "Santiago";

let apellido = "Rada";
let edad = 23;
let esMayorDeEdad = edad >= 18 ? true : false;

/// TIPADOS
let texto : string;
let numero : number; // enteros, con decimales
let booleano : boolean; // true o false
let arreglo : number[]; 
// let arreglo2 : Array<number | string | boolean | object | Function | any>;
let objeto : object;

let usuario : object = {
    nombre: "",
    apellido: "",
    edad: 0,
    esMayorDeEdad: false
};

// Interface

let vacio01 : undefined;    // No hay nada y nunca va a haber nada
let vacio02 : null;         // No hay nada
let vacio03 : unknown; 
let vacio04 : any; // No es recomendable
let vacio05 : void; // No devuelve nada
let vacio06 : never; // Nunca va a haber nada, es un error

vacio03 = 23;
// vacio03.toString(); // numero // me va a dar error cuando quiera usar funciones de tipo

vacio04 = "Hola";
let hola = vacio04.toLocaleLowerCase();

// INFERENCIA
let a : boolean = true;
let b = "";
let c = a + b;

// TIPADO DE FUNCIONES
// function EjemploDeFuncion () : string {
//     console.log("Hola mundo");

//     return "";
// }

function Suma (a : number, b : number) : number {
    return a + b;
}

let resultado = Suma(2, 5);

// Type Alias
type ID = number | string; // | = afirmacion // || = pregunta

let userID : ID;
userID = 123;

type Hash = `${string}#${string}#${string}`;

let userHash : Hash;
userHash = "hola#hola#hola";

type Mail = `${string}@${string}.${string}`;

let userMail : Mail = "santy@gmail.com";

type Usuario = {
    id : ID,
    nombre : string,
    email : Mail,
    edad : number,
    esMayorDeEdad : boolean,
    ciudad : string,
    tel? : string
}

let usuarioDeEjemplo : Usuario = {
    id: "",
    nombre: "",
    email: "hola@hola.hola",
    edad: 20,
    esMayorDeEdad : true,
    ciudad : "",
    tel : ""
}

let usuarioDeEjemplo02 : Usuario = {
    id: "",
    nombre: "",
    email: "hola@hola.hola",
    edad: 20,
    esMayorDeEdad : true,
    ciudad : ""
}

// Union Types
type Pelicula = {
    readonly titulo : string, // CONST
    duracion : number,
    genero : string,
    director : Director
}

// let pelicula : Pelicula = {
//     titulo: "El señor de los anillos",
//     duracion: 3,
//     genero: "Accion",
//     director: ""
// }

type Director = {
    nombre : string,
    edad : number,
    peliculas : Pelicula[]
}

type Actor = {
    nombre : string,
    edad : number,
    peliculas : Pelicula[]
}

type DirectorActor = Director & Actor;

let dir : DirectorActor = {
    nombre : "",
    edad : 0,
    peliculas : []
}

type Listado = {
    peliculas : Pelicula[],
    directores : Director[]
}

type Film = {
    rating?: number,
    actores?: Actor[],
    estreno?: string
}

type PeliculaCompleta = Pelicula & Film; // & = afirmacion // && = pregunta

let movie : PeliculaCompleta = {
    titulo : "",
    duracion : 0,
    genero : "",
    director : {
        nombre : "",
        edad : 0,
        peliculas : []
    }
}