import { Todo } from './Todo';
import { type TodoType } from '../types';
import { useState } from 'react';

export function ListTodos () {

    const database : TodoType[] = [
        {
            id: 1,
            title: "Todo #1",
            completed: false
        },
        {
            id: 2,
            title: "Todo #2",
            completed: true
        },
        {
            id: 3,
            title: "Todo #3",
            completed: false
        },
    ];

    let completeTodo = (id : number) : void => {
        let newTodo : TodoType[] = data.map(todo => {
            if (todo.id == id) {
                return { ...todo, completed: !todo.completed }
            }else{
                return { ...todo }
            }
        });

        setData(newTodo);
    }

    const [data, setData] = useState(database);

    return(
        <div className="list">
            {data.map((todo, i) => (
                <Todo key={i} data={todo} completeTodo={completeTodo} />
            ))}
        </div>
    )
}