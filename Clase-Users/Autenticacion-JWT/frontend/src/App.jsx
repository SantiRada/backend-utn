import { useEffect, useState } from 'react';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { useAuth } from "./context/AuthContext";

export default function App() {

  const { user, auth } = useAuth();

  useEffect(() => { auth(); }, []);

  const [loadScreen, setLoadScreen] = useState('login');

  const switchSector = (value) => { setLoadScreen(value); }

  useEffect(() => { if(Object.values(user).length > 0) { switchSector('home'); } }, [user]);

  return (
    <div className="app">
      { loadScreen == 'login' && <Login switchSector={switchSector} /> }
      { loadScreen == 'register' && <Register switchSector={switchSector} /> }
      { loadScreen == 'home' && <Home /> }
    </div>
  )
}