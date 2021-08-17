import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'

export default function NewCollectAddress({onClose = () => {}}) {

    return(
        <>
            <div className={styles.newCollectAddressContainer}>
                <section className={styles.headerContainer}>
                <div className={styles.backTitle}>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="arrow-left" />
                        </button>
                        
                        <h1>Solicitar entregador</h1>
                    </div>

                </section> 

                <section className={styles.formContainer}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <h3>Adicionar novo endereço</h3>
                    </div>

                    <form action="">
                        <span>Apelido para o novo endereço</span>
                        <input type="text" placeholder="Meu endereço principal" />
                        <span>Rua com número</span>
                        <input type="text" placeholder="Rua Do Meu Endereço, 123" />
                        <span>Referência (opcional)</span>
                        <input type="text" placeholder="Próximo ao Bar do Zé" />
                    </form>
                </section>

                <section className={styles.btnsContainer}>
                    <button className={styles.cancel} onClick={onClose}>Cancelar</button>
                    <button className={styles.continue}>Adicionar novo endereço de coleta</button>
                    {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                </section>
            </div>
        </>
    )
}