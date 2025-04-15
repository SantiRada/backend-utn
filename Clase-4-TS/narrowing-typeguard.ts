     
// Narrowing
function Validate (data : number | string) : void {
    if (typeof data === 'number')
    {
        // TRUE // data ES UN NÚMERO
        data.toString();
        
        return;
    }

    // data ES UN STRING
}

let value : (number | string) = 25;

Validate(value);

// Type Guard
interface Superheroe {
    nombre: string;
    edad: number;
    poderes: string[];
}

interface IronMan extends Superheroe {
    armadura: string;
}

interface Batman extends Superheroe {
    vehiculo: string;
}

function ValidateSuperhero (hero : IronMan | Batman) : void {
    console.log(hero.poderes[0]);
    
    if(CheckIsIronMan(hero)){
        // ACÁ ES IRON MAN

        console.log(hero.armadura);
        return;
    }

    // Si no es ironman obligatoriamente es batman
    console.log(hero.vehiculo);

}

function CheckIsIronMan (hero : Superheroe) : hero is IronMan { // Da por hecho que la variable HERO es de tipo IRONMAN 

    // Aserción de tipos
    return (hero as IronMan).armadura === 'string'; // undefined
}

function CheckIsBatman (hero : Superheroe) : hero is Batman { // Da por hecho que la variable HERO es de tipo BATMAN 

    // Aserción de tipos
    return (hero as Batman).vehiculo === 'string'; // undefined
}

// 1. Tengo un dato que no sé de qué tipo es
// 2. Quiero saber si es del tipo A para hacer X cosa
    // O si es del tipo B para hacer Z cosa

type ID = `${string}-${string}-${string}`;

// type userExample = User & {
//     id: ID;
//     name: string;
// }

// interface user {
//     id: number;
//     name: string;
// }

// // USER TIENE 2 DATOS

// interface user {
//     lastName : string;
// }

// // USER TIENE 3 DATOS