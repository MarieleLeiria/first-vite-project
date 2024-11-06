import styles from './Header.module.css'
import { Rocket } from '@phosphor-icons/react'
import List from './List'
import { useState } from 'react'
import Empty from './Empty'
import Input from './Input'
import Counter from './Counter'



function Header(content) {
    const [tasks, setTasks] = useState<string[]>([])


    const [newTasks, setNewTasks] = useState('')

    function HandleCreateNewTask() {
        event?.preventDefault()

        setTasks([...tasks, newTasks]);
        setNewTasks('');

    }

    function handleTaskChange(value) {
        console.log('handleTaskChange', event.target.value)
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
            <div className={styles.inputArea}>
                <Input
                    newTask={HandleCreateNewTask}
                    showNewTask={handleTaskChange}
                    aNewTask={newTasks}
                    eventOnClick={() => setTaskCount(taskCount + 1)}
                />
            </div>

            <div className={styles.checkbox}>
                <Counter taskCounter={setDoneTasks(doneTasks + 1)}
                    taskUnpending={setTaskCount(taskCount - 1)}

                    taskDoneCounter={setDoneTasks(doneTasks - 1)}
                    taskPending={setTaskCount(taskCount + 1)}
                />
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