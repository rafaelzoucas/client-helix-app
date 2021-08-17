import React from 'react'
import styles from './styles.module.scss'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DeliverymanProfile({onClose = () => {}}) {
    return(
        <div className={styles.profileContainer}>
            <section className={styles.headerContainer}>
                <div className={styles.backTitle}>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="arrow-left" className={styles.faIcon} />
                    </button>
                    <h1>{'Perfil do entregador'}</h1>
                </div>

                <div className={styles.buttonsHeader}>
                    <button>
                        <FontAwesomeIcon icon="bell"  className={styles.faIcon} />
                    </button>
                </div>
            </section>

            <section className={styles.profile}>
                <div className={styles.pictureAndName}>
                    <Image 
                        width={80} 
                        height={80} 
                        src="/img/icons/profile-user.svg"
                        alt="Profile"
                    />
                    <h1>Nome</h1>
                </div>

                <div className={styles.averages}>
                    <div className={styles.average}>
                        <h1>2.628</h1>
                        <span>Entregas</span>
                    </div>

                    <div className={styles.average}>
                        <div className={styles.currentRate}>
                            <h1>4.8</h1>

                            <span>
                                <FontAwesomeIcon icon="star" />
                            </span>
                        </div>
                        <span>Avaliações</span>
                    </div>

                    <div className={styles.average}>
                        <h1>15 min</h1>
                        <span>Por entrega</span>
                    </div>
                </div>
            </section>
        </div>
    )
}