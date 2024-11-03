

import styles from './Input.module.css'
import { PlusCircle } from '@phosphor-icons/react'


function Input({ newTask, showNewTask, aNewTask, eventOnClick }) {

    return (
        <form onSubmit={newTask} className={styles.addNewTask}>

            <input
                name='task'
                value={aNewTask}
                onChange={() => showNewTask(aNewTask)}
                placeholder='Adicione uma nova tarefa' />

            <button onClick={() => eventOnClick} type='submit'>Criar
                <PlusCircle size={20} />
            </button>
        </form>
    )
}
export default Input