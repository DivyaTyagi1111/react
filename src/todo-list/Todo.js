import Button from './Button'

function Todo({input, todo, setTodos, todos}){

    const deleteHandler=(e)=>{
        e.preventDefault()
        setTodos(todos.filter(el=>el.id!==todo.id))
    }

    const checkHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id)
                return{...item, completed:!item.completed}
            return item
        }))
    }

    return(
        <div className={`todo-div ${todo.completed && 'completed'}`}>
            <li className='todo-item'>
                {input}
            </li>
            <Button className='checked' onClick={checkHandler}/>
            <Button className='deleted' onClick={deleteHandler}/>
        </div>
    )
}

export default Todo