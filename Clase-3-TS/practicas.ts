/* Carrito
    Cantidad de productos
    Total de productos
    Monto final
*/

type Carrito = {
    productos : Productos[],
    montoFinal : number
}
type Productos = {
    nombre : string,
    precio : number,
    cantidad : number,
    tipo? : "Calzado" | "Pantalones" | "Camisas",
    talle? : number
}

let listadoDeProductos : Productos[] = [];

listadoDeProductos.push({
    nombre: "Camisa",
    precio: 1000,
    cantidad: 2
});
listadoDeProductos.push({
    nombre: "Camisa",
    precio: 1000,
    cantidad: 2
});

let montoFinal = 0;

for (let i = 0; i < listadoDeProductos.length; i++) {  montoFinal += listadoDeProductos[i].precio; }

let carrito : Carrito = {
    productos: listadoDeProductos,
    montoFinal: montoFinal
}

// Productos específicos
// Zapatilla // Talle
// Taza // Color
// Camisa // Tela

type Calzado = Productos & {
    color : string,
    taco? : boolean
}

type Taza = Productos & {
    color : string
}

type Camisa = Productos & {
    tela : string
}

let zapas : Calzado = {
    nombre: "",
    precio: 0,
    cantidad: 0,
    talle: 40,
    color: "Negro"
}

// Pelicula
//  titulo // genero // estreno // actores // directores // creditos // rating // 
// 

type Pelicula = {
    readonly titulo : string,
    readonly genero : Genero[],
    readonly estreno? : Date,
    directores : Directores[],
    actores : Actores[],
    creditos? : Colaboradores[],
    rating : Rating[],
    duracion : Duracion,
    estudio? : Estudio,
    inversion? : Precio,
    ganancia? : Precio,
    plataformas? : Plataforma[]
}

type Duracion = `${number} Minutos`;

type Precio = `$${string}`;

type Plataforma = "MAX" | "Prime Video" | "Disney+" | "Netflix" | "";

type Estudio = {
    nombre : string,
    ubicacion : string,
    presupuesto : number
}

type Rating = {
    plataforma : "metacritic" | "IMDB" | "RT",
    valor : number
}

type Genero = "Terror" | "Acción" | "Romance" | "Ciencia Ficción" | "Suspenso";

type Directores = {
    nombre: string,
    edad: number,
    peliculas : Pelicula[],
}

type Colaboradores = {
    nombre: string,
    edad: number,
    trabajo: string
}

type Actores = {
    nombre: string,
    edad: number,
    nacionalidad: string,
    genero: string
}

let TomHanks : Actores = {
    nombre: "Tom Hanks",
    edad: 65,
    nacionalidad: "Estadounidense",
    genero: "Masculino"
}

let stevenSpielberg : Directores = {
    nombre: "Steven Spielberg",
    edad: 75,
    peliculas: []
}

let anillos : Pelicula = {
    titulo : "El señor de los anillos",
    directores : [ stevenSpielberg ],
    actores : [ TomHanks ],
    genero : [ "Terror" ],
    rating : [
        { plataforma: "metacritic", valor : 7 },
        { plataforma: "IMDB", valor : 7.5 },
    ],
    duracion : `${180} Minutos`,
}

// stevenSpielberg.peliculas.push(anillos);

// UTILITY TYPES
type Turnos = {
    hora: string,
    paciente: Paciente,
    especialista: Especialista,
    especialidad: "" | "" | "" | "" | "",
    obraSocial? : ObraSocial["numeroAfiliado"]
};

type Especialista = Pick<Paciente, "nombre" | "edad" | "telefono" | "email"> & Pick<Turnos, "especialidad"> & { numeroMedico : number };

type Paciente = {
    nombre : string,
    edad : number,
    telefono : number,
    email: string,
    historialMedico : HistorialMedico,
    obraSocial? : ObraSocial,
    turnos : Turnos[],
    sintomas : string,
    fechaNacimiento : string
};

type ObraSocial = Pick<Paciente, "nombre" | "telefono"> & {
    numeroAfiliado: string,
    plan : Planes,
    direccion : string
};

type Planes = {
    nombre : "rubi" | "diamante" | "zafiro",
    descripcion : string,
    precio : number
};

type HistorialMedico = {
    enfermedades : string[],
    medicamentos : string[],
    procedimientos : string[],
    fechaUltimaConsulta : string
};

