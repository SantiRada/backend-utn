import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider ({children}) {
    
    const [user, setUser] = useState({});

    const auth = async () => {
        try {
            const response = await fetch('http://localhost:3020/users/auth', {
                credentials: 'include'
            });
    
            if (response.ok) {
                const data = await response.json();
                setUser(data.data);
            }else{
                console.log("Not Response");
            }
        } catch (err) {
            console.log("No parece haber usuarios: ", err);
        }
    }

    const login = async (mail, password) => {
        try {
            const result = await fetch('http://localhost:3020/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ mail, password })
            });
    
            const data = await result.json();

            if (data.success) { setUser(data.data); }
            else { console.log("Usuario incorrecto"); }
        } catch(err) {
            console.log(err);
        }
    }
    
    const register = async (mail, name, password) => {
        try {
            const result = await fetch('http://localhost:3020/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ mail, name, password })
            });
    
            const data = await result.json();

            if (data.success) { setUser(data.data); }
            else { console.log("Usuario incorrecto"); }
        } catch(err) {
            console.log(err);
        }
    }

    const closeSession = async () => {
        try {
            const response = await fetch('http://localhost:3020/users/closeSession', {
                method: 'POST',
                credentials: 'include'
            });

            if(response.ok){
                console.log("¡Sesión cerrada!");
            }
        } catch (err) {
            console.log("Error al cerrar la sesión: ", err);
        }
    }

    return (
        <AuthContext.Provider value={{user, login, register, auth, closeSession}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);