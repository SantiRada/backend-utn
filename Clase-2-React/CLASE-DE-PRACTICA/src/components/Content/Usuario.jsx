import { Nombre, Mail, Edad } from "./../../Providers/UserContext";

export function Usuario () {

    let nombre = Nombre();
    let mail = Mail();
    let edad = Edad();

    return (
        <>
            <p>Hola {nombre}</p>
        </>

    )
}