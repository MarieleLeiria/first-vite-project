import styles from './Header.module.css'
import { PlusCircle, Rocket } from '@phosphor-icons/react'
import List from './List'
import { useState } from 'react'
import Empty from './Empty'



function Header(content) {
    const [tasks, setTasks] = useState<string[]>([])


    const [newTasks, setNewTasks] = useState('')

    function HandleCreateNewTask() {
        event?.preventDefault()

        setTasks([...tasks, newTasks]);
        setNewTasks('');

    }
    function handleTaskChange(event) {
        setNewTasks(event.target.value);
    }

    function onDeleteTask(taskForDelete: string) {

        const taskskWithoutDeleteOne = tasks.filter(task => {
            return task != taskForDelete
        })

        setTasks(taskskWithoutDeleteOne)
    }
    const [taskCount, setTaskCount] = useState(0);


    const [doneTasks, setDoneTasks] = useState(0)
    function checkedTask(status: boolean) {

        if (status) {
            setDoneTasks(doneTasks + 1)
            setTaskCount(taskCount - 1)
        } else {
            setDoneTasks(doneTasks - 1)
            setTaskCount(taskCount + 1)
        }
    }



    return (
        <>
            <header className={styles.header}>
                <Rocket size={65} />
                <h1>to<strong>do</strong></h1>
            </header>
            <form onSubmit={HandleCreateNewTask} className={styles.addNewTask}>

                <input
                    name='task'
                    value={newTasks}
                    onChange={handleTaskChange}
                    placeholder='Adicione uma nova tarefa' />

                <button onClick={() => setTaskCount(taskCount + 1)} type='submit'>Criar
                    <PlusCircle size={20} />
                </button>
            </form>
            <div className={styles.checkbox}>

                <div className={styles.createTasks}>

                    <p>Tarefas criadas</p>
                    <span>{taskCount}</span>
                </div>

                <div className={styles.conclueTasks}>
                    <p>Concluidas</p>
                    <span>{doneTasks}</span>
                </div>

            </div>


            <div className={styles.tasksList}>
                {
                    tasks.map(item => (
                        <List
                            key={item}
                            content={item}
                            onDeleteTask={onDeleteTask}
                            conclueTask={() => setTaskCount(taskCount - 1)}
                            changeCheck={checkedTask}
                        />
                    ))
                }
                <Empty isHidden={taskCount > 0} />

            </div>

        </>
    )
}

export default Header