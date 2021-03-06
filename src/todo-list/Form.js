import Button from "./Button"
import {useRef} from 'react'

function Form(props){
    const inp=useRef()

    const submitHandler=(e)=>{
        e.preventDefault()
        const input=inp.current.value
        props.setTodos([
            ...props.todos, 
            { input:input, completed:false, id:Math.floor(Math.random()*1000) }
        ])
        inp.current.value=null
    }

    const filterHandler=(e)=>props.setFilter(e.target.value)
    
    return (
        <form>
            <input ref={inp} type='text' className='todo-input' list='todo-suggestions'/>
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