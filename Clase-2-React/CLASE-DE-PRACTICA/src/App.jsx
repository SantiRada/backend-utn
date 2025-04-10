// import { Header } from './components/Header/Header';
// import { Searchbar } from './components/Header/Searchbar';
// import { Context } from './components/Content/Context';
// import { Routes, Route, Link } from 'react-router-dom';
// // BrowserRouter, Routes, Route, Link, useParams
// import { FaReact } from 'react-icons/fa';
// import { UserContext } from './Providers/UserContext';
import { APIContent } from './components/Content/APIContent';

export default function App() {

  // let nombre = "Santiago";
  // let edad = 23;

  // let usuarios = [
  //   { nombre: "Santiago", edad: 23 },
  //   { nombre: "Juan", edad: 25 },
  //   { nombre: "Pedro", edad: 30 }
  // ];
  
  // let usuarios2 = {
  //   data: [
  //     { nombre: "Santiago", edad: 23 },
  //     { nombre: "Juan", edad: 25 },
  //     { nombre: "Pedro", edad: 30 }
  //   ]
  // };

  return (
    <>
          <APIContent />
    {/* <UserContext> */}
      {/* <Context /> */}

    {/* </UserContext> */}


      {/* { usuarios.map(usuario => (
        <p key={usuario.nombre}>{usuario.nombre} tiene {usuario.edad} años</p>
      )) } */}
      {/* { usuarios2.data && usuarios2.data.length > 0 && usuarios2.data.map(user => (
        <p key={user.nombre}>{user.nombre} tiene {user.edad} años</p>
      )) } */}
      {/* <Header id="2">{<Searchbar />}</Header> */}
      {/* <Context /> */}
      {/* <FaReact /> */}
      {/* <Link to="/buscador">Ir al buscador</Link> */}

      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/buscador" element={<Searchbar />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes> */}
    </>
  )
}