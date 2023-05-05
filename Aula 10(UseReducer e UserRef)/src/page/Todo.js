import { useRef, useReducer } from "react";
import { TodoReducer } from "../data/TodoReducer";
import { TodoData } from "../data/TodoData";

export default function Todo(){
    const [todos, dispatch] = useReducer(TodoReducer, TodoData);
    const textoDoTodo = useRef(null);

    function adicionar(){
        dispatch({ type: "ADD_TODO", payload : { text : textoDoTodo.current.value}});
    }

    return (<>
                <h1>ToDo's</h1>
                <input type="text" ref={textoDoTodo} placeholder="Digite sua tarefa"/>
                <button onClick={adicionar}>Adicionar</button>
                <ul>
                {
                todos.map((todo) => {
                    return (<li>{todo.texto}</li>)
                    })
                }
                </ul>
            </>);
}