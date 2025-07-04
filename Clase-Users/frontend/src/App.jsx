import { Login } from "./components/Login";
import { useAuth } from "./context/AuthContext";

export default function App() {

  const { user } = useAuth();

  if(!user) return <Login />

  return (
    <>
      { user?.type === 'admin' ? <p>Sos administrador</p> : <p>Sos un usuario</p> }
    </>
  )
}