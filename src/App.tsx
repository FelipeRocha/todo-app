import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { InputTask } from './components/InputTask';
import { TasksBoard } from './components/TasksBoard';
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';


interface Task {
  id: string;
  text: string;
  closed: boolean
}

function App() {


  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      closed: true
    },
  ]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <InputTask createTasks={setTasks} />
          <TasksBoard tasks={tasks} createTasks={setTasks} />
        </div>
      </div>
    </div>
  )
}

export default App
