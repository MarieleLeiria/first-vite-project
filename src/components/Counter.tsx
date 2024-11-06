import styles from './Counter.module.css'


function Counter({ taskCounter, taskDoneCounter, taskPending, taskUnpending }) {

    function numberOfPendingCounter() {
        taskCounter()
        taskUnpending()
    }
    function numberOfConclueCounter() {
        taskDoneCounter()
        taskPending()
    }
    return (
        <>

            <div className={styles.createTasks}>

                <p>Tarefas criadas</p>
                <span>{conclued}</span>
            </div>

            <div className={styles.conclueTasks}>
                <p>Concluidas</p>
                <span>{taskDoneCounter}</span>
            </div>
        </>
    )
}
export default Counter
