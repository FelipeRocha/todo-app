import { Circle, Trash } from "phosphor-react";

import styles from '../styles/OpenTask.module.css'
import { useState } from "react";

interface Task {
  id: string;
  text: string;
  closed: boolean;
}

interface OpenTaskProps {
  task: Task;
  changeTaskStatus: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function OpenTask({ task, changeTaskStatus, deleteTask }: OpenTaskProps) {
  const [isOnHover, setIsOnHover] = useState(false);
  const [isTaskCollapsed, setIsTaskCollapsed] = useState(false);

  function handleOnMouseEnter() {
    setIsOnHover(true);
  }

  function handleOnMouseLeave() {
    setIsOnHover(false);
  }

  function handleOnClick() {
    changeTaskStatus(task.id)
  }

  function handleOnDeleteTask() {
    deleteTask(task.id)
  }

  function handleOnClickTask() {
    setIsTaskCollapsed((state) => !state)
  }

  return (
    <div className={styles.openTask}>
      <button
        className={styles.uncheckedButton}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleOnClick}
      >
        {
          isOnHover ?
            (
              <Circle
                size={20}
                weight="duotone"
                className={styles.uncheckedIcon}
              />
            ) :
            (
              <Circle
                size={20}
                className={styles.uncheckedIcon}
              />
            )
        }
      </button>
      <div
        className={styles.text}
        onClick={handleOnClickTask}
      >
        <p className={isTaskCollapsed ? styles.textCollapsed : ''}>
          {task.text}
        </p>
      </div>
      <button className={styles.deleteButton} onClick={handleOnDeleteTask}>
        <Trash size={18} className={styles.deleteIcon} />
      </button>
    </div>
  )
}