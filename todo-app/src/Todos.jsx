import './todos.css'
import TodoItem from './TodoItem'
import { useState } from 'react'
export default () => {

    const [todos, settodos] = useState([])

    const [description, setdescription] = useState('')

    const [id, setid] = useState(0)


    const addTodo = () => {
        let data = {
            id: id,
            description: description
        }

        settodos(prev => [...prev, data])
        setdescription('')
        console.log(todos);
        setid(id + 1)
    }


    const deleteTodo = (id) => {
        settodos(prev => prev.filter(t => t.id !== id))
    }

    return (
        <>
            <div className="todos mt-5">
                <div className="container">

                    <h3 className='mt-3' >Todos</h3>

                    <div className="todo_form  mt-3 ">
                        <input value={description} onChange={(e) => setdescription(e.target.value)} type="text" placeholder="todo description" />
                        <button onClick={() => addTodo()} >add</button>
                    </div>

                    {
                        todos.map(item => {
                            return (
                                <TodoItem todo={item} onDelete={() => deleteTodo(item.id)} />
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}