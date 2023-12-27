import "./App.css";
import { useState, useRef } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const newTask = useRef();

  const addTask = () => {
    const task = {
      id: toDoList.length ? toDoList[toDoList.length - 1].id + 1 : 1,
      name: newTask.current.value,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(
      toDoList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const completedTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <div className="AddTask">
        <input type="text" id="inputText" ref={newTask} />
        <button className="addTaskButton" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              name={task.name}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
