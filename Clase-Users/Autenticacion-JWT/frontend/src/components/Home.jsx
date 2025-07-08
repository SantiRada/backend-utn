import { useAuth } from "../context/AuthContext"

export function Home () {

    const { user, closeSession } = useAuth();

    return (
        <div className="home">
            <p>Iniciaste sesión {user.name}</p>
            <a className="button-2" onClick={() => closeSession()}>Cerrar Sesión</a>
        </div>
    )
}