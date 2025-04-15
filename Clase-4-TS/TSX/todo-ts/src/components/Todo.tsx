import { FaXmark } from "react-icons/fa6";
import { type TodoType } from '../types';

type Props = {
    data : TodoType;
    completeTodo : (id : number) => void;
}

export function Todo ({data, completeTodo} : Props) {
    return(
        <div className="todo">
            <div className="left" tabIndex={0} onClick={ () => completeTodo(data.id) }>
                <div className={ data.completed ? "toggle selected" : "toggle"}></div>
                <h4 className={ data.completed ? "title select" : "title"}>{data.title}</h4>
            </div>
            <a className="icon-delete"> <FaXmark /> </a>
        </div>
    )
}