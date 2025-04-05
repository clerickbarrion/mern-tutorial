import React, { useState } from 'react'
import axios from 'axios'

function Todo(props) {

    const [task, setTask] = useState(props.task)
    function deleteTodo(e) {
        axios.delete(`http://localhost:5000/todos/${props._id}`)
        .then(res => {
            console.log(res.data)
            e.target.parentElement.remove()
        })
        .catch(err => {
            console.error(err)
        })
    }

    function editTodo() {
        const newTask = document.getElementById(props._id).value
        setTask(newTask)
        axios.put(`http://localhost:5000/todos/${props._id}`, {task: newTask})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
        })
     }

    return (
        <>
        <li key={props._id}>
            {task}
            <input id={props._id} placeholder='edit here'/>
            <button onClick={editTodo}>Edit</button>
            <button onClick={deleteTodo}>Delete</button> 
        </li>
        </>
    )
}

export default Todo
