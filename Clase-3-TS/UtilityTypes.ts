type Estudio = {
    nombre? : string,
    ubicacion? : string,
    presupuesto? : number
}

// type Pelicula = Pick<Estudio, "nombre" | "presupuesto"> & { genero? : string }

// let peli : Pelicula = {
//     nombre: "",
//     presupuesto: 0,
//     genero: ""
// }

// type Pelicula = Exclude<Estudio, "ubicacion"> & { genero? : string };

type Actores = {
    nombre: string,
    edad: number,
    nacionalidad: string,
    genero: string
}

type Pelicula = Omit<Estudio, "ubicacion"> & Pick<Actores, "genero"> & {
    director: string,
};

type Rating = {
    plataforma : "metacritic" | "IMDB" | "RT",
    valor : number
}

type Genero = {
    Clave: "Terror" | "Acción" | "Romance" | "Ciencia Ficción" | "Suspenso"
};

type Pelicula2 = Pick<Estudio, "nombre"> & Partial<Rating> & Omit<Actores, "edad"> & Readonly<Genero>;
// type // Omit

let ejemploDePelicula : Pelicula2 = {
    nombre: "",
    nacionalidad: "",
    genero: "",
    plataforma: "metacritic",
    Clave : "Terror"
}

type EjemploDeGenero = Pelicula2["Clave"];
type Ejemplo2 = Pick<Pelicula2, "Clave" | "nombre">;








// Interface // Exclude // 