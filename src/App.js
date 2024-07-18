// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="App">
      <div className='addTask'>
        <input></input>
        <button>Add Task</button>
      </div>
      <div className='list'>

      </div>
    </div>
  );
}

export default App;
