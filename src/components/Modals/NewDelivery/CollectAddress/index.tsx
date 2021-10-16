import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'
import NewCollectAddress from './NewCollectAddress'
import Image from 'next/image'
import MenuEllipsis from '../../MenuEllipsis'

export default function CollectAddress({onClose = () => {}}) {
    const [isNewCollectAddressVisible, setIsNewCollectAddressVisible] = useState(false)
    const [isMenuEllipsisVisible, setIsMenuEllipsisVisible] = useState(false)

    const openNewCollectAddressModal = () => {
        setIsNewCollectAddressVisible(true)
    }

    const showMenuEllipsis = () => {
        setIsMenuEllipsisVisible(true)
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.collectAddressContainer}>
                    <section className={styles.headerContainer}>
                        <div className={styles.backTitle}>
                            <h1>Meus endereços de coleta</h1>
                        </div>

                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </section>

                    <section className={styles.collectAddress}>

                        <div className={styles.collectAddressCardContainer}>
                            <div className={styles.collectAddressCardOnPressed}>
                                <div className={styles.addressInfo}>
                                    <strong>Apelido</strong>
                                    <p>Rua Endereço do Restaurante, 1234</p>
                                    <span>Ao lado da Outra Loja</span>
                                </div>
                                
                                <button 
                                    className={styles.menuEllipsis}
                                    onClick={showMenuEllipsis}
                                    >
                                    <FontAwesomeIcon icon="ellipsis-v" />
                                </button>
                            </div>

                            {isMenuEllipsisVisible ? (
                                <MenuEllipsis 
                                onClose={() => setIsMenuEllipsisVisible(false)}
                                />
                                ) : null}
                        </div>

                        <button onClick={openNewCollectAddressModal}>+ Adicionar novo endereço</button>
                    </section>
                </div>
            </div>

            {isNewCollectAddressVisible ? <NewCollectAddress onClose={() => setIsNewCollectAddressVisible(false)} /> : null}
        </>
    )
}