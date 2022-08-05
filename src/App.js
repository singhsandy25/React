import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodos;
  if(localStorage.getItem('todos')) {
    initTodos = JSON.parse(localStorage.getItem('todos'))
  } else {
    initTodos = [];
  }

  const onDelete = (todo) => {
    setTodos(todos.filter(s => s.id !== todo.id))
  }

  const addTodo = (todo) => { 
    setTodos([...todos, todo]);
  }

  const [todos, setTodos] = useState(initTodos
    // [
    // {id: 1, title: 'Get Thing Done 1', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
    // {id: 2, title: 'Get Thing Done 2', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
    // {id: 3, title: 'Get Thing Done 3', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
    // {id: 4, title: 'Get Thing Done 4', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
  // ]
  );

  useEffect(() => {
    console.log('here', todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todo App" searchBar={true}/>
        <Routes>
          <Route path='/' element={
            <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos ={todos} onDelete = {onDelete}/>
            </>
            }
          />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
