import styles from '../styles/TasksBoardHeader.module.css';

interface Task {
  id: string;
  text: string;
  closed: boolean;
}

interface TasksBoardHeaderProps {
  tasks: Task[]
}


export function TasksBoardHeader({ tasks }: TasksBoardHeaderProps) {
  const numClosedTasks = tasks.reduce(
    (acc, task) => task.closed ? ++acc : acc,
    0
  )

  return (
    <header className={styles.tasksHeaderWrapper}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span>
          {tasks.length}
        </span>
      </div>

      <div className={styles.finishedTasks}>
        <strong>Concluídas</strong>
        {
          tasks.length > 0 ?
            (
              <span>
                {numClosedTasks} de {tasks.length}
              </span>
            ) :
            (
              <span>
                0
              </span>
            )
        }
      </div>
    </header >
  )
}