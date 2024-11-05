import { Trash } from '@phosphor-icons/react'
import styles from './List.module.css'
import { useState } from 'react';



function List({ content = 'string', onDeleteTask, conclueTask, changeCheck }) {



    const [status, setStatus] = useState(false);
    function handleDeletetasks(content) {

        onDeleteTask(content)
        conclueTask()
    }



    function endTask() {

        let checked = !status;
        setStatus(checked);
        changeCheck(checked);

    }


    return (
        <div className={styles.tasks}>
            <div className={styles.items}>
                <input onClick={endTask} type="checkbox" id="task" name="task"></input>
                <label htmlFor="task">{content}</label>
                <button onClick={() => handleDeletetasks(content)} title='deletar tarefa'>
                    <Trash size={12} />
                </button>
            </div>
        </div>
    )
}
export default List