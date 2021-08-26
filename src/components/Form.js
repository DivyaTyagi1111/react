import Button from "./Button"

function Form(props){

    const inputHandler=(e)=>props.setInput(e.target.value)

    const submitHandler=(e)=>{
        e.preventDefault()
        props.setTodos([
            ...props.todos, 
            { input:props.input, completed:false, id:Math.floor(Math.random()*1000) }
        ])
        props.setInput('')
    }

    const filterHandler=(e)=>props.setFilter(e.target.value)
    
    return (
        <form>
            <input type='text' value={props.input} onChange = {inputHandler} className='todo-input' list='todo-suggestions'/>
            <datalist id='todo-suggestions' autoComplete='off'>
                {props.todos.map(todo=>(
                    <option key={todo.id} value={todo.input}/>
                ))}
            </datalist>
            <Button className='todo-button' onClick={submitHandler} type='submit'/>
            <div className = 'todos'>
                <select name='todos' className ='todo-filter' onChange={filterHandler}>
                    <option value = 'all'>All</option>
                    <option value = 'completed'> Completed</option>
                    <option value = 'uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;