import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import Todo from './components/Todo';
import './styles/App.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('https://cb-mern-tutorial.glitch.me/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);
 
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <Todo key={todo._id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
export default App;