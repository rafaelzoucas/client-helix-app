import React from 'react'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Feedback() {

    return(
        <div className={styles.feedbackContainer}>
            <section className={styles.headerContainer}>
                <h1>Entregador exclusivo</h1>
                <Link href="/">
                    <button>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </Link>
            </section> 

            <div className={styles.content}>
                <section className={styles.codeContainer}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="motorcycle" />
                        <h3>Código para entregador exclusivo</h3>
                    </div>

                    <p>Passe o seguinte código ao entregador:</p>

                    <h1>A1B2C3</h1>
                </section>

                <div className={styles.title}>
                    <FontAwesomeIcon icon="user-plus" />
                    <h3>Solicitações</h3>
                </div>

                <section className={styles.deliveryman}>
                    <div className={styles.pictureAndName}>
                        <Image
                            width={36} 
                            height={36} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />
                        <h1>Nome Completo</h1>
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
                    <div className={styles.btnsContainer}>
                        <Link href="/">
                            <button className={styles.continue}>Confirmar</button>
                        </Link>

                        <Link href="/">
                            <button className={styles.cancel}>Recusar</button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}