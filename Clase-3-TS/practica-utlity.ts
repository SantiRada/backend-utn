type Usuario = {
    id: number;
    name: string;
    lastName: string;
    mail: string;
    age: number;
    peliculas: {
        id: number;
        title: string;
    }
}

// type peli = Pick<Usuario, 'peliculas'>;

interface User {
    id: number;
    name: string;
    lastName: string;
}

// type basicUser = Pick<Usuario, 'id' | 'name'>;
// type basicUser = Omit<Usuario, 'id' | 'name'>;
// type basicUser = Readonly<Usuario>;
// type basicUser = Partial<Usuario>;

type basicUser = Pick<User, 'id'>;

interface UserExtend extends User{
    mail: string;
    age: number;
}

interface UserOmit extends Omit<User, 'lastName'> {
    mail: string;
    age: number;
}