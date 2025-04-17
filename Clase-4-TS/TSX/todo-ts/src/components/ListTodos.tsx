import { Todo } from './Todo';
import { type TodoType } from '../types';
import { useEffect, useState } from 'react';

import { Filtros } from '../constants';

import { FaTrashAlt } from "react-icons/fa";

interface Props {
    filter : string;
    create : string;
    search : string;
}

export function ListTodos ({filter, create, search}: Props) {

    const database : TodoType[] = [
        {
            id: 1,
            title: "ir de compras",
            completed: false
        },
        {
            id: 2,
            title: "ir al gym",
            completed: true
        },
        {
            id: 3,
            title: "Ver la clase de nuevo",
            completed: false
        },
        {
            id: 4,
            title: "practicar typescript",
            completed: false
        },
    ];
    
    const [filteredData, setFilteredData] = useState(database);
    const [data, setData] = useState(database); // Lista completa
    
    // COMPLETAR TODO ESPECÍFICO
    let completeTodo = (id : number) : void => {
        let newTodo : TodoType[] = data.map(todo => {
            if (todo.id == id) {
                return { ...todo, completed: !todo.completed }
            }else{
                return { ...todo }
            }
        });

        setFilteredData(newTodo);
        setData(newTodo);

        updateData();
    }

    let changeTitleTodo = (id: number, title : string) => {
        let newTodos = data.map(item => {
            if(item.id == id){
                return { ...item, title: title }
            }else{
                return item;
            }
        })

        setData(newTodos);
    }

    // ELIMINAR TODO ESPECÍFICO
    let removeTodo = (id : number) : void => {
        // map => recorrer el array
        // filter => recorro el array con una condición y devuelvo un array 
        // find => recorre el array pero devuelve un solo dato según una condicion //// undefined
        if (data.find(item => item.id == id) != undefined) {
            let newTodos = data.filter(item => item.id != id);
            
            setFilteredData(newTodos);
            setData(newTodos);
        }
        // if (data.includes(id)) { }
    }

    // APLICAR FILTROS 
    let searchData = (list : TodoType[]) => { return list.filter(item => item.title.toLowerCase().includes(search.toLowerCase())); }

    let filterData = (list : TodoType[]) => {
        let newTodos : TodoType[] = [];

        switch (filter) {
            case Filtros.Todos: newTodos = list; break;
            case Filtros.Completados:
                newTodos = list.filter(todo => todo.completed == true);
                break;
            case Filtros.Pendientes: 
                newTodos = list.filter(todo => todo.completed == false);
                break;
        }

        return newTodos;
    }

    let updateData = () => {
        let newTodos : TodoType[] = [];

        if (search && filter) {
            newTodos = searchData(data);
            newTodos = filterData(newTodos);
        } else {
            newTodos = filterData(data);
        }

        setFilteredData(newTodos);
    }
    useEffect(() => { updateData(); }, [filter, search, data]);

    // CREAR TAREA
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if(create != ''){
            let verifyTodo : (TodoType | undefined) = data.find(item => item.title.toLocaleLowerCase() == create.toLocaleLowerCase()); // undefined

            console.log("Verificacion: " + verifyTodo);
            console.log("Tipado: " + typeof verifyTodo);

            if(typeof verifyTodo == 'undefined'){
                let newTodos :TodoType[] = [...data, {
                    id: data.length + 1,
                    title: create,
                    completed: false
                }];
    
                setFilteredData(newTodos);
                setData(newTodos);
            } else {
                setError('Este tarea ya existe.');
                setTimeout(() => { setError(''); }, 3000);
            }
        }
    }, [create]);

    // ELIMINAR TAREAS COMPLETADAS
    let removeCompleteTodos = () => {
        let newTodos = data.filter(item => item.completed == false);

        setFilteredData(newTodos); // Algunos elementos
        setData(newTodos); // Listado completo
    }

    return(
        <div className="list">
            { error && <p className="error">{error}</p> }
            {filteredData.map((todo, i) => (
                <Todo key={i} changeTitleTodo={changeTitleTodo} data={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
            ))}
            <div className="space-btn">
                <button title="Eliminar TODOs completados" className="btn-trash" onClick={removeCompleteTodos}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}