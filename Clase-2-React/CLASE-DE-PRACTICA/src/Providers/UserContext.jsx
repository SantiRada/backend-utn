import React from 'react';
// { useContext }

export const userContext = React.createContext();
export const mailContext = React.createContext();
export const ageContext = React.createContext();

// EL CONTENIDO SE RETORNA COMO ETIQUETA POR LO QUE NO PUEDE MANIPULARSE
export function Nombre () {
    return (
        <userContext.Consumer>
            {nombre}
        </userContext.Consumer>
    )
}
export function Mail () {
    return (
        <mailContext.Consumer>
            {mail}
        </mailContext.Consumer>
    )
}

export function UserContext(props){

    let [nombre, setNombre] = React.useState("Santiago");

    let MyFunc = () => {

    }

    return (
        <userContext.Provider value={{ nombre, setNombre, MyFunc }}>
            <mailContext.Provider value={{mail: "ejemplo@mail.com"}}>
                <ageContext.Provider value={{edad: 23}}>
                    {props.children}
                </ageContext.Provider>
            </mailContext.Provider>
        </userContext.Provider>
    )
}

// PERMITE RECONOCER EL CONTENIDO PARA CALCULOS O MANEJO DE INFO
// export let Nombre = () => useContext(userContext);
// export let Mail = () => useContext(mailContext);
// export let Edad = () => useContext(ageContext);
