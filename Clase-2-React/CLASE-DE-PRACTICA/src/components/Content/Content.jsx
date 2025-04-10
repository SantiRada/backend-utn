import { useState, useEffect } from 'react';

export function Content () {

    const [nombre, setNombre] = useState("Santiago");
    const [lastName, setLastName] = useState("Rada");

    let users = [ "Santiago", "Leonardo", "Eugenio", "Ivan", "Daniel" ];
    let lastNameUsers = [ "Rada", "Garcia", "Tour", "Balmer", "Alabarze" ];
    let [pos, setPos] = useState(0);

    let ChangeName = () => {
        if (pos >= users.length - 1) {
            setPos(0);
            
            setNombre(users[0]);
        }
        else {
            setPos(pos + 1);

            setNombre(users[pos + 1]);
        }

    }

    useEffect(() => {
        // MyFunc();
        setPos(0);
        setNombre(users[pos]);
        setLastName(lastNameUsers[pos]);
    }, []);

    useEffect(() => {

        setLastName(lastNameUsers[pos]);

    }, [pos]);

    return(
        <>
        <h1>Nombre: {nombre} {lastName}</h1>
        <a onClick={ () => ChangeName()}>Cambiar nombre</a>
        </>
    )
}