
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
            <button className='checked' onClick={checkHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className='deleted' onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo