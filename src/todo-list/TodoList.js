import Todo from './Todo'
// import {useState} from 'react' 
// import {useEffect} from 'react'

function TodoList({todos, setTodos, filter}){

    const getFilteredtodos=()=>{
        if(filter==='all')
            return todos
        if(filter==='completed')
            return todos.filter(todo=>todo.completed)
        else if(filter==='uncompleted')
            return todos.filter(todo=>!todo.completed)
    }

    return (
        <div className='todo-container'>
            <ul className ='todo-list'>
                {getFilteredtodos().map(todo=>    
                    <Todo 
                    input={todo.input}
                    key={todo.id}  
                    todos={todos} 
                    setTodos={setTodos}
                    todo={todo}/>
                )}
            </ul>
        </div>        
    )
}

export default TodoList