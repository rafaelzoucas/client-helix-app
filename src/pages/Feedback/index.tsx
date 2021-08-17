import React from 'react'
import { useState } from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Feedback() {

    return(
        <div className={styles.feedbackContainer}>
            <section className={styles.headerContainer}>
                <h1>Sugestões</h1>
                <Link href="/">
                    <button>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </Link>
            </section> 

            <section className={styles.formContainer}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <h3>Ajude-nos a melhorar a nosso app</h3>
                </div>

                <form action="">
                    <span>Escreva o que poderia melhorar ou que você sente falta no app</span>
                    <textarea placeholder="Poderia melhorar em..." />
                </form>
            </section>

            <section className={styles.btnsContainer}>
                <Link href="/">
                    <button className={styles.cancel}>Cancelar</button>
                </Link>

                <Link href="/">
                    <button className={styles.continue}>Enviar feedback</button>
                </Link>
                {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
            </section>
        </div>
    )
}