import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.scss'

export default function Offline() {
    return(
        <div className={styles.container}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon="times" className={styles.x} />
                <FontAwesomeIcon icon="cloud" />
            </div>

            <div className={styles.text}>
                <h1>Sem internet</h1>
                <p>
                    Tentando reconectar.
                </p>
                <FontAwesomeIcon icon="spinner" className={styles.loading} />
            </div>
        </div>
    )
}