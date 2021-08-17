import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'

export default function Notification() {
    return(
        <div className={styles.notification}>
            <div className={styles.avatar} />

            <div>
                <p>
                    <strong>{'Nome Do Entregador '}</strong>
                    aceitou a sua solicitação: <strong>#12346</strong>
                </p>

                <span>Hoje 17:41</span>
            </div>
            
            <FontAwesomeIcon icon="angle-right" />
        </div>
    )
}