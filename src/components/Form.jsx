import { useForm } from "../hooks/useForm";

export const Form = ({onNewTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
      description:''
  })

  const onFormSubmit = (event)=>{
    event.preventDefault();
    if(description.length <=1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }
    onNewTodo(newTodo);
    onResetForm();
     
  } 

  

  return (
    <>
      <div className="w-100 container d-flex justify-content-center">
        <form onSubmit={onFormSubmit} className="w-75 ">
            <label htmlFor= "description" className="form-text fs-4 text ms-2 text-dark">Add New Task</label>
            <br/>
            <input type="text" placeholder="what do you have to do?" name="description" value={description} className="form-control" onChange={onInputChange}></input>
            <br/>
            <div className="container d-flex  w-100 p-0 flex-row-reverse">
            <button type="submit" className="mt-1 btn btn-primary">Add</button>
            </div>
        </form>
      </div>
    </>
  )
}
