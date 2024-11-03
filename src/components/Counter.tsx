import styles from './Counter.module.css'


function Counter({ taskCounter, taskDoneCounter }) {
    return (
        <>

            <div className={styles.createTasks}>

                <p>Tarefas criadas</p>
                <span>{taskCounter}</span>
            </div>

            <div className={styles.conclueTasks}>
                <p>Concluidas</p>
                <span>{taskDoneCounter}</span>
            </div>
        </>
    )
}
export default Counter
