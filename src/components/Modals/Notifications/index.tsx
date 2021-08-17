import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'
import Notification from '../../Notification'

export default function Notifications({onClose = () => {}}) {
    return(
        <>
            <div className={styles.notificationsContainer}>
                <section className={styles.headerContainer}>
                    <h1>{'Notificações'}</h1>

                    <div className={styles.buttonsHeader}>
                        <button>
                            <FontAwesomeIcon icon="search" className={styles.faIcon} />
                        </button>

                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="times"  className={styles.faIcon} />
                        </button>
                    </div>
                </section>

                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </>
    )
}