import './App.css'

import { useState }  from 'react';
import { Filtros } from './constants';

import { SiTypescript } from "react-icons/si";
import { ListTodos } from './components/ListTodos';
import { Searchbar } from './components/Searchbar';

export default function App() {

  let [useFilter, setUseFilter] = useState<string>(Filtros.Todos);
  let [create, setCreate] = useState<string>('');
  let [search, setSearch] = useState<string>('');
  
  let changeFilter = (filter : string) => { setUseFilter(filter); }

  let createTodo = (data : string) => {
    setCreate(data);
  }

  let searchTodo = (data : string) => {
    setSearch(data);
  }

  return (
    <main>
      <h2>Todo <SiTypescript /></h2>
      <Searchbar changeFilter={changeFilter} createTodo={createTodo} searchTodo={searchTodo} />
      <ListTodos filter={useFilter} create={create} search={search} />
    </main>
  )
}