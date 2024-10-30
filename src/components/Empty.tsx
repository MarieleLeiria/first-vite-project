import styles from './Empty.module.css'
import { ClipboardText } from '@phosphor-icons/react'

function Empty({ isHidden }: { isHidden: boolean }) {


    return (
        <main>

            <div style={{
                display: isHidden ? "none" : "flex"
            }} className={styles.anyTasks}>

                <ClipboardText size={56} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong><br></br>
                    Crie tarefas e organize seus itens a fazer</p>
            </div>

        </main >

    )

}

export default Empty