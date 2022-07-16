import notepad from '../assets/notepad.svg';

import { TasksBoardHeader } from './TasksBoardHeader';
import { ClosedTask } from './ClosedTask';
import { OpenTask } from './OpenTask';

import styles from '../styles/TasksBoard.module.css';

type Task = {
  id: string;
  text: string;
  closed: boolean;
}

interface TasksBoardProps {
  tasks: Task[];
  createTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}


export function TasksBoard({ tasks, createTasks }: TasksBoardProps) {
  function changeTaskStatus(taskId: string) {
    const newTasks = tasks.map((task) => (
      task.id === taskId ? {
        ...task,
        closed: !task.closed
      } : task
    ))

    createTasks(newTasks)
  };

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    console.log(newTasks)
    createTasks(newTasks)
  }

  return (
    <div className={styles.tasksBoardWrapper}>
      <TasksBoardHeader tasks={tasks} />
      {
        (tasks.length >= 0) ?
          (
            <div className={styles.tasksWrapper}>
              {
                tasks.map(
                  (task) => {
                    return task.closed ?
                      (
                        <ClosedTask
                          key={task.id}
                          task={task}
                          changeTaskStatus={changeTaskStatus}
                          deleteTask={deleteTask}
                        />
                      ) :
                      (
                        <OpenTask
                          key={task.id}
                          task={task}
                          changeTaskStatus={changeTaskStatus}
                          deleteTask={deleteTask}
                        />
                      )
                  }
                )
              }
            </div>
          ) :
          (
            <div className={styles.tasksBoardEmpty}>
              <img src={notepad} />
              <div className={styles.tasksBoardEmptyMessage}>
                <p><span>Você ainda não tem tarefas cadastradas</span></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )
      }
    </div >
  )
}