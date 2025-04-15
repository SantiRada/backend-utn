import './App.css'
import { SiTypescript } from "react-icons/si";
import { ListTodos } from './components/ListTodos';

export default function App() {
  return (
    <main>
      <h2>Todo <SiTypescript /></h2>
      {/* Buscador de Todos */}
      <ListTodos />
    </main>
  )
}