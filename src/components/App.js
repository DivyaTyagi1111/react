import Form from './Form'
import TodoList from './TodoList'
import {useState} from 'react'
import {useEffect} from 'react'
import './App.css'

function App(){

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(getLocalTodos())
    const [filter, setFilter] =useState('all')
    
    function getLocalTodos(){
        if(localStorage.getItem('todos') == null)
            return []
        return JSON.parse(localStorage.getItem('todos'))
    }

    useEffect(()=>localStorage.setItem("todos", JSON.stringify(todos)), [todos])

    return (
        <>
            <header>
                <h1>Todo List</h1>
            </header>
            <Form 
            setInput={setInput}
            input={input}
            setTodos={setTodos} 
            todos={todos}
            setFilter={setFilter}/>

            <TodoList 
            todos={todos} 
            setTodos={setTodos} 
            filter={filter}/>
        </>
    );
}

export default App