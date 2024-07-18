// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };
    // const newToDoList = [...toDoList, newTask];
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      return task.id !== id;
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
    });

    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;
