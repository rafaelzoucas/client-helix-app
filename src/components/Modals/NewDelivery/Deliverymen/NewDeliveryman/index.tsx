import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'

export default function NewDeliveryman({onClose = () => {}}) {

    return(
        <>
            <div className={styles.newCollectAddressContainer}>
                <section className={styles.headerContainer}>
                <div className={styles.backTitle}>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="arrow-left" />
                        </button>
                        
                        <h1>Novo entregador</h1>
                    </div>

                </section> 

                <section className={styles.formContainer}>
                    <section className={styles.formContainer}>
                    <label>
                        <FontAwesomeIcon icon="motorcycle" className={styles.icon} />
                        Digite o código do entregador
                    </label>
                    <input type="text" placeholder="12345" />
                </section>
                </section>

                <section className={styles.btnsContainer}>
                    <button className={styles.cancel} onClick={onClose}>Cancelar</button>
                    <button className={styles.continue}>Adicionar novo entregador</button>
                    {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                </section>
            </div>
        </>
    )
}