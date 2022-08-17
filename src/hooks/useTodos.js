import { useReducer, useEffect } from 'react'
import '../components/todoReducer'
import { todoReducer } from '../components/todoReducer'


const initialState = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initialState);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);
    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }
    
    const handleDeleteTodo = (id) =>{
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }





    return {
        todos, 
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,

    }
}
