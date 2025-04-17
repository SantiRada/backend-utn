import { useState, useRef, useEffect } from 'react';
import { FaXmark } from "react-icons/fa6";
import { type TodoType } from '../types';

type Props = {
    data : TodoType;
    completeTodo : (id : number) => void;
    removeTodo : (id : number) => void;
    changeTitleTodo : (id : number, title : string) => void;
}

export function Todo ({data, completeTodo, removeTodo,changeTitleTodo} : Props) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [editting, setEditting] = useState<boolean>(false);
    const [text, setText] = useState<string>(data.title);

    let handleBlur = () => { setEditting(false); }
    let handleDoubleClic = () => { setEditting(true); }
    let handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'return') {
            changeTitleTodo(data.id, text);
            setEditting(false);
        }
    }

    useEffect(() => {
        if (editting && inputRef.current) { inputRef.current.focus(); }
    }, [editting]);

    return(
        <div className="todo">
            <div className="left" tabIndex={0}>
                <div onClick={ () => completeTodo(data.id) } className={ data.completed ? "toggle selected" : "toggle"}></div>
                { editting ?
                    <input
                        type="text"
                        className={data.completed ? "title select" : "title"}
                        ref={inputRef}
                        value={text}
                        onBlur={ handleBlur }
                        onChange={ (e) => setText(e.target.value) }
                        onKeyDown={ (e) => handleKeyDown(e) }
                        /> :
                    <h4 onDoubleClick={ handleDoubleClic } className={ data.completed ? "title select" : "title"}>{text}</h4>
                }
            </div>
            <a onClick={() => removeTodo(data.id)} className="icon-delete"> <FaXmark /> </a>
        </div>
    )
}