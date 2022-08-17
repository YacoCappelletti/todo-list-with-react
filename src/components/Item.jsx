

export const Item = ({todo = [], onDeleteTodo, onToggleTodo}) => {
  
  

  return (
      <li className={`list-group-item d-flex justify-content-between  ${ (todo.done) ? 'done ' : '' } `} onClick={ () => onToggleTodo( todo.id ) }>
          <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through ' : '' }`}
          >{todo.description}</span>
          <button className="btn btn-warning"  onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </li>
  )
}
