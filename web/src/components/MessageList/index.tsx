import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={Logo} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}></p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitorbarbosa123.png" alt="" />
                        </div>
                        <span>Vitor Barbosa</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}></p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitorbarbosa123.png" alt="" />
                        </div>
                        <span>Vitor Barbosa</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}></p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitorbarbosa123.png" alt="" />
                        </div>
                        <span>Vitor Barbosa</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}