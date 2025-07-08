import { useAuth } from "../context/AuthContext";
import { useState } from 'react';

export function Login ({switchSector}) {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleForm = async () => {
        try {
            await login(email, pass);
        } catch (err) {
            console.log("Error de Registro: ", err);
        }
    }

    return (
        <div className="form">
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
                <a onClick={() => switchSector('register')} className="button-2">Registrarse</a>
                <a onClick={ handleForm } className="button">Iniciar Sesión</a>
            </div>
        </div>
    )
}