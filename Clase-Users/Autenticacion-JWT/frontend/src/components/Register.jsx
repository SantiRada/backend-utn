import { useAuth } from "../context/AuthContext";
import { useState } from 'react';

export function Register ({switchSector}) {
    const { register } = useAuth();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handleForm = async () => {
        try {
            console.log("test register");
            const response = await register(email, name, pass);
        } catch (err) {
            console.log("Error de Registro: ", err);
        }
    }

    return (
        <div className="form">
            <input
                type="text" 
                placeholder="Nombre de Usuario"
                onChange={ (e) => setName(e.target.value) }
                value={ name }
                />
            <input
                type="email" 
                placeholder="Correo electrónico"
                onChange={ (e) => setEmail(e.target.value) }
                value={ email }
                />
            <input
                type="text" 
                placeholder="Contraseña"
                onChange={ (e) => setPass(e.target.value) }
                value={ pass }
                />
            <div className="buttons">
                <a onClick={() => switchSector('login')} className="button-2">Iniciar Sesión</a>
                <a onClick={ handleForm } className="button">Registrarse</a>
            </div>
        </div>
    )
}