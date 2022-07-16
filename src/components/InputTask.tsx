import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


import styles from '../styles/InputTask.module.css';

interface Task {
  id: string;
  text: string;
  closed: boolean;
}

interface InputTaskProps {
  createTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function InputTask({ createTasks }: InputTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    createTasks((state) => [{
      id: uuidv4(),
      text: newTaskText,
      closed: false
    }, ...state]);

    setNewTaskText('');
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity('Esse texto não é válido!');
    } else if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Esse campo é obrigatório!');
    } else {
      event.target.setCustomValidity('');
    }
    setNewTaskText(event.target.value);
  }

  function handleNewTaskTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity('Esse texto não é válido!');
    } else if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Esse campo é obrigatório!');
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleCreateTask}
    >
      <input
        placeholder='Adicione uma nova tarefa'
        value={newTaskText}
        onChange={handleNewTaskTextChange}
        onInvalid={handleNewTaskTextInvalid}
        pattern="^\S+$|^\S+.*\S+$"
        required
      />
      <button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}