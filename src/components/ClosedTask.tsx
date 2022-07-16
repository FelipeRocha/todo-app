import { useState } from "react";
import { CheckCircle, Trash } from "phosphor-react";

import styles from '../styles/ClosedTask.module.css'

interface Task {
  id: string
  text: string;
  closed: boolean;
}

interface ClosedTaskProps {
  task: Task;
  changeTaskStatus: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function ClosedTask({ task, deleteTask, changeTaskStatus }: ClosedTaskProps) {
  function handleOnClick() {
    changeTaskStatus(task.id)
  }

  function handleOnDeleteTask() {
    deleteTask(task.id)
  }
  return (
    <div className={styles.closedTask}>
      <button
        className={styles.checkedButton}
        onClick={handleOnClick}
      >
        <CheckCircle
          size={20}
          weight="fill"
          className={styles.checkedIcon}
        />
      </button>

      <div className={styles.text}>
        <p>{task.text}</p>
      </div>

      <button
        className={styles.deleteButton}
        onClick={handleOnDeleteTask}
      >
        <Trash
          size={18}
          className={styles.deleteIcon}
        />
      </button>
    </div>
  )
}