import { Routes, Route, Link } from 'react-router-dom';
import './style.css';

import { Visualizar } from './components/Visualizar';
import { Crear } from './components/Crear';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Visualizar</Link>
        <Link to="/crear">Crear</Link>
        <Link to="/actualizar">Actualizar</Link>
        <Link to="/reemplazar">Reemplazar</Link>
        <Link to="/eliminar">Eliminar</Link>
        <Link to="/aslkdhas">Ejemplo 404</Link>
      </nav>

      <Routes>
        <Route path="/" element={ <Visualizar /> } />
        <Route path="/crear" element={ <Crear /> } />
        <Route path="/actualizar" element={<p>Ejemplo</p>} />
        <Route path="/reemplazar" element={<p>Ejemplo</p>} />
        <Route path="/eliminar" element={<p>Ejemplo</p>} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </>
  )
}