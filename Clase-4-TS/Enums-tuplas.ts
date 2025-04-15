// string boolean number array<> object 
// any unknown void null never
// Tipados de función
// typeAlias // interface
// UtilityTypes // Pick<> Omit<> Partial<> Readonly<>

// ENUMS 

enum Language {
    Espaniol = "es",
    Ingles = "en",
    Italiano = "it",
    Frances = "fr"
}

let lang : Language = Language.Ingles;

//////////////////////////////////////////

let langArray : string[] = [ "Español", "Ingles", "Italiano", "Frances" ];

let currentLang : number = 1;

switch (currentLang) {
    case 0 : console.log("¡Está en español!"); break;
    case 1 : console.log("¡Está en inglés!"); break;
}

//////////////////////////////////////////

// TUPLAS
type Position = 'X' | 'O' | '';

type GameBoard = [
    [ Position, Position, Position ],
    [ Position, Position, Position ],
    [ Position, Position, Position ],
];

let gameBoard : GameBoard = [
    [ 'X', 'O', 'X' ],
    [ 'X', 'O', 'X' ],
    [ 'X', 'O', 'X' ],
];

// useState ==== [var, function]
