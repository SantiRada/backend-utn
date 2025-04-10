interface Productos {
    code: number;
    nombre: string;
    precio: number;
    cantidad: number;
    material: string;
    talle: number;
}

// type Productos = {
//     nombre : string,
//     precio : number,
//     cantidad : number
// }

interface Productos {
    color: string;
}

let listado : Productos[] = [ {
    code: 2475,
    nombre: 'Camisa',
    precio: 1000,
    cantidad: 10,
    material: 'Coton',
    talle: 1,
    color: 'Rojo',
} ];

interface Calzado extends Productos {
    cordones : boolean;
    taco : boolean;
}

/*
    Narrowing
    Type guard
    Tipado desde HTML // Tipo de dato que recibo desde contenido HTML
    Aserción de tipos
    Instalar Typescript // Compilación
    .TSX
*/