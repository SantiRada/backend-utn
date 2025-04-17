import { useState } from 'react';
import { Filtros } from '../constants';
import { FaPlus } from "react-icons/fa";

interface Props {
    changeFilter : (filter : string) => void;
    createTodo : (data : string) => void;
    searchTodo : (data : string) => void;
}

export function Searchbar ({changeFilter, createTodo, searchTodo} : Props) {

    const [search, setSearch] = useState<string>('');

    let setSearchTodo = () => {
        searchTodo(search);
    }

    let setCreateTodo = () => {
        createTodo(search);

        setSearch('');
    }

    return(
        <div className="searchbar">
            <div className="top">
                <div className="sector-input">
                    <input
                        type="text"
                        placeholder="Buscar o crear tarea"
                        className="input"
                        onChange={ (e) => setSearch(e.target.value) }
                        value={search}
                    />
                    <button onClick={ setCreateTodo } className="btn-create"><FaPlus /> Crear Tarea</button>
                </div>
                <button onClick={ setSearchTodo } className="btn-search">Buscar</button>
            </div>
            <div className="filter-list">
                { Object.values(Filtros).map(filter => (
                    <button onClick={ () => changeFilter(filter)} className="filter-chip">{filter}</button>
                  ))
                }
            </div>
        </div>
    )
}