import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider ({children}) {
    
    const [user, setUser] = useState();

    const login = async (mail, password) => {
        try {
            const result = await fetch('http://localhost:3010/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail, password })
            });
    
            const data = await result.json();

            if (data.success) { setUser(data.data); }
            else { console.log("Usuario incorrecto"); }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);