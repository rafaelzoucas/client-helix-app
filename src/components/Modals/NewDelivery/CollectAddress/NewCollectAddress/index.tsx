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
                        
                        <h1>Novo endereço de coleta</h1>
                    </div>

                </section> 

                <section className={styles.formContainer}>
                    <section className={styles.formContainer}>
                    <label>
                        <FontAwesomeIcon icon="store" className={styles.icon} />
                        Apelido (opcional)
                    </label>
                    <input type="text" placeholder="Meu endereço secundário" />
                    <label>
                        <FontAwesomeIcon icon="map-marker" className={styles.icon} />
                        Rua
                    </label>
                    <input type="text" placeholder="Rua do Endereço De Coleta" />
                    <label className={styles.addressNotFound}>Endereço não encontrado.</label>

                    <div>
                        <div>
                            <label>
                                <FontAwesomeIcon icon="map-marker" className={styles.icon} />
                                Número
                            </label>
                            <input type="text" placeholder="123" />
                        </div>

                        <div className={styles.comp}>
                            <label>
                                <FontAwesomeIcon icon="map-marker" className={styles.icon} />
                                Complemento (opcional)
                            </label>
                            <input type="text" placeholder="Ap 12" />
                        </div>
                    </div>

                    <label>
                        <FontAwesomeIcon icon="align-left" className={styles.icon} />
                        Referência (opcional)
                    </label>
                    <input placeholder="Proximo ao..." />
                </section>
                </section>

                <section className={styles.btnsContainer}>
                    {/* <button className={styles.cancel} onClick={onClose}>Cancelar</button> */}
                    {/* <button className={styles.continue}>Adicionar novo endereço de coleta</button> */}
                    <button className={styles.cancel}>Remover este endereço</button>
                    <button className={styles.edit}>Editar este endereço</button>
                    {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                </section>
            </div>
        </>
    )
}