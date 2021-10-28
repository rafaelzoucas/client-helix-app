import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'
import NewDeliveryman from './NewDeliveryman'

export default function Deliverymen({onClose = () => {}}) {
    const [isNewDeliverymanVisible, setIsNewDeliverymanVisible] = useState(false)
    const [isMenuEllipsisVisible, setIsMenuEllipsisVisible] = useState(false)

    const openNewDeliverymanModal = () => {
        setIsNewDeliverymanVisible(true)
    }

    const showMenuEllipsis = () => {
        setIsMenuEllipsisVisible(true)
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.deliverymenContainer}>
                    <section className={styles.headerContainer}>
                        <div className={styles.backTitle}>
                            <h1>Entregadores exclusivos</h1>
                        </div>

                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </section>

                    <section className={styles.deliveryman}>

                        <div>
                            <FontAwesomeIcon icon="user-circle" className={styles.picture} />

                            <div className={styles.nameAndRate}>
                                <p>João da Silva</p>

                                <div className={styles.rate}>
                                    <FontAwesomeIcon icon="star" />
                                    4.9
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <FontAwesomeIcon icon="random" className={styles.picture} />

                            <div>
                                <p>Deixar o sistema escolher o entregador</p>
                            </div>
                        </div>

                        <hr />

                        <button onClick={openNewDeliverymanModal}>+ Adicionar entregador exclusivo</button>
                    </section>
                </div>
            </div>

            {isNewDeliverymanVisible ? <NewDeliveryman onClose={() => setIsNewDeliverymanVisible(false)} /> : null}
        </>
    )
}