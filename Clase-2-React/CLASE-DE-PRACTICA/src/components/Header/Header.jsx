// export function Header (props) {
//     return (
//         <p>Hola desde el Header: {props.id}</p>
//     )
// }

// export function Header ({ id }) {
//     return (
//         <p>Hola desde el Header: {id}</p>
//     )
// }

import './Header.module.css'; // 1. Archivo externo

export function Header (props) {

    // 2. Estilos en línea
    // 3. Estilos en objetos
    let estilos = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px'
    };
    // 4. Estilos Modulares / Para Modulos

    return (
        <div className="container" style={estilos}>
            <p>Hola desde el Header</p>
            {props.children}
        </div>
    )
}