import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Head>
        <title>To-Do-App</title>
      </Head>
      <div className="container">
        <div className="todo-app">
          <h2>To-Do List</h2>
          <div className="row">
            <input type="text" id="input-box" placeholder="Add task" value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask}>+</button>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}&nbsp;&nbsp;&nbsp;
                  <button onClick={() => removeTask(index)}>rmv</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
