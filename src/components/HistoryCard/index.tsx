import React, { useState } from 'react'
import styles from './styles.module.scss'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import HistoryDetails from '../Modals/HistoryDetails'

library.add(fas)

export default function HistoryCard() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    function openModal() {
        setIsModalVisible(true)
        disableBodyScroll(document)
        console.log(isModalVisible)
    }

    // console.log(isModalVisible)

    return (
        <>
            <div className={styles.historyCardContainer} onClick={openModal}>
                <div className={styles.resume}>
                    <section className={styles.dateContainer}>{/* dateContainerIsToday */}
                        <h1>16</h1>
                        <span>qua</span>
                    </section>
                    
                    <section className={styles.resumeContainer}>
                        <strong>12 entregas</strong>
                        <span>1 imprevisto</span>
                        <span>35 min</span>
                    </section>
                </div>
                
                <FontAwesomeIcon icon="angle-right" />

            </div>

            {isModalVisible ? (
                <HistoryDetails 
                    onClose={() => {
                        setIsModalVisible(false)
                        enableBodyScroll(document)
                    }}
                />
            ) : null}
        </>
    )
}