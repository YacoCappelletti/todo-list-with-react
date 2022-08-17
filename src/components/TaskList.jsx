import { Item } from "./Item"





export const TaskList = ({todos=[], onDeleteTodo, onToggleTodo }) => {

  return (
    <>
        <ul className="list-group ">
           
              {/* {todos.map((todo) => (
                <Item key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={ onToggleTodo }/>
              ))} */}
              {todos.map((todo) => {
                if(!todo.done){
                  return (<Item key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={ onToggleTodo }/>)
                }
              })}

              {todos.map((todo) => {
                if(todo.done){
                  return (<Item key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={ onToggleTodo }/>)
                }
              })}
         
        </ul>
    </>
  )
}
