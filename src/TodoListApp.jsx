
import { Form } from "./components/Form"
import { TaskList } from "./components/TaskList"
import { useTodos } from "./hooks/useTodos"


export const TodoListApp = () => {
    const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos()
   
   

        
    return (
        <>
            <div className="container-fluid vh-100 ">
                <div className="row text-center">
                    <h1 >Todo List</h1>
                </div>
                <div className="row mt-5 h-100 ">
                    <div className="col ">
                        <Form onNewTodo={handleNewTodo}/>
                    </div>

                    <div className="col list-item-container h-75 p-0 me-3">
                        <TaskList todos = {todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={ handleToggleTodo }/>
                    </div>
                </div>
            </div>
        </>
    )
}
