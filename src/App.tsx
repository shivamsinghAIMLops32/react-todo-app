import React, { useState } from 'react';
import './App.css';
import ToDo from './ToDo';

interface ToDoInterface {
  title: string;
  description: string;
  status: string;
}

function App() {
  const [todos, setTodos] = useState<ToDoInterface[]>([
    { title: 'Buy groceries', description: 'Milk, Bread, Eggs', status: 'Pending' },
    { title: 'Clean the house', description: 'Living room and kitchen', status: 'In Progress' },
    { title: 'Finish project report', description: 'Complete the final draft', status: 'Completed' },
  ]);

  const [newTodo, setNewTodo] = useState<ToDoInterface>({
    title: '',
    description: '',
    status: 'Pending', // Default status
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.title && newTodo.description) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo({ title: '', description: '', status: 'Pending' }); // Reset input fields
    }
  };

  return (
    <div>
      <form onSubmit={addToDo}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTodo.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleInputChange}
          required
        />
        <select
          name="status"
          value={newTodo.status}
          onChange={handleInputChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, index) => (
        <ToDo 
          key={index} // Ideally, use a unique ID if available
          title={todo.title}
          description={todo.description}
          status={todo.status}

        />
      ))}
    </div>
  );
}

export default App;
